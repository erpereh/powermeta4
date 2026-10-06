"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import {
  CARD_WIDTH,
  fitCamera,
  zoomCamera,
  type Camera,
  type ChartLayout,
  type Point,
} from "@/lib/portal/org-chart-layout";

type Gesture = { points: Point[]; camera: Camera };
const distance = (points: Point[]) =>
  Math.hypot(points[1].x - points[0].x, points[1].y - points[0].y);
const middle = (points: Point[]) =>
  points.length === 1
    ? points[0]
    : { x: (points[0].x + points[1].x) / 2, y: (points[0].y + points[1].y) / 2 };

export function useOrgCamera(layout: ChartLayout, anchorId: string | null, restored = true) {
  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0, scale: 1 });
  const [dragging, setDragging] = useState(false);
  const cameraRef = useRef(camera);
  const sizeRef = useRef({ width: 0, height: 0 });
  const fitted = useRef(false);
  const autoFit = useRef(true);
  const previous = useRef<ChartLayout | null>(null);
  const points = useRef(new Map<number, Point>());
  const gesture = useRef<Gesture | null>(null);
  const update = useCallback((next: Camera) => {
    cameraRef.current = next;
    setCamera(next);
  }, []);
  const fit = useCallback(
    () => update(fitCamera(layout.width, layout.height, sizeRef.current)),
    [layout.width, layout.height, update],
  );
  const zoom = useCallback(
    (factor: number) => {
      autoFit.current = false;
      const { width, height } = sizeRef.current;
      update(
        zoomCamera(cameraRef.current, cameraRef.current.scale * factor, {
          x: width / 2,
          y: height / 2,
        }),
      );
    },
    [update],
  );
  const center = () => {
    autoFit.current = false;
    const root = layout.nodes[0];
    update({ scale: 1, x: sizeRef.current.width / 2 - root.x - CARD_WIDTH / 2, y: 32 });
  };
  useLayoutEffect(() => {
    if (!viewport) return;
    setDragging(false);
    const resize = () => {
      const { width, height } = viewport.getBoundingClientRect();
      if (width <= 0 || height <= 0) return;
      const old = sizeRef.current;
      sizeRef.current = { width, height };
      if (!fitted.current) {
        fitted.current = true;
        fit();
      } else
        update({
          ...cameraRef.current,
          x: cameraRef.current.x + (width - old.width) / 2,
          y: cameraRef.current.y + (height - old.height) / 2,
        });
    };
    resize();
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(resize);
    observer?.observe(viewport);
    const wheel = (event: WheelEvent) => {
      event.preventDefault();
      autoFit.current = false;
      const rect = viewport.getBoundingClientRect();
      const units = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? rect.height : 1;
      const factor = Math.exp(-Math.max(-300, Math.min(300, event.deltaY * units)) * 0.002);
      update(
        zoomCamera(cameraRef.current, cameraRef.current.scale * factor, {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        }),
      );
    };
    viewport.addEventListener("wheel", wheel, { passive: false });
    return () => {
      observer?.disconnect();
      viewport.removeEventListener("wheel", wheel);
      points.current.clear();
      gesture.current = null;
    };
  }, [viewport, fit, update]);
  useLayoutEffect(() => {
    const old = previous.current;
    const id = anchorId ?? layout.nodes[0]?.person.employeeId;
    const before = old?.nodes.find((node) => node.person.employeeId === id);
    const after = layout.nodes.find((node) => node.person.employeeId === id);
    if (before && after)
      update({
        ...cameraRef.current,
        x: cameraRef.current.x + (before.x - after.x) * cameraRef.current.scale,
        y: cameraRef.current.y + (before.y - after.y) * cameraRef.current.scale,
      });
    previous.current = layout;
  }, [layout, anchorId, update]);
  useLayoutEffect(() => {
    if (restored && fitted.current && autoFit.current) {
      autoFit.current = false;
      fit();
    }
  }, [restored, fit, viewport]);
  const local = (event: PointerEvent<HTMLDivElement>): Point => {
    const rect = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };
  const rebase = () => {
    gesture.current = points.current.size
      ? { points: [...points.current.values()].slice(0, 2), camera: cameraRef.current }
      : null;
  };
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (
      (event.pointerType === "mouse" && event.button !== 0) ||
      (event.target instanceof Element && event.target.closest("button,a,input,select,textarea"))
    )
      return;
    event.preventDefault();
    autoFit.current = false;
    event.currentTarget.focus();
    event.currentTarget.setPointerCapture(event.pointerId);
    points.current.set(event.pointerId, local(event));
    rebase();
    setDragging(true);
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!points.current.has(event.pointerId) || !gesture.current) return;
    points.current.set(event.pointerId, local(event));
    const next = [...points.current.values()].slice(0, 2);
    const start = gesture.current;
    const before = middle(start.points);
    const after = middle(next);
    const ratio =
      next.length === 2 && start.points.length === 2
        ? distance(next) / Math.max(1, distance(start.points))
        : 1;
    const scaled = zoomCamera(start.camera, start.camera.scale * ratio, before);
    update({ ...scaled, x: scaled.x + after.x - before.x, y: scaled.y + after.y - before.y });
  };
  const onPointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    points.current.delete(event.pointerId);
    rebase();
    setDragging(points.current.size > 0);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.ctrlKey || event.metaKey || event.altKey)
      return;
    const movement: Record<string, Point> = {
      ArrowLeft: { x: 48, y: 0 },
      ArrowRight: { x: -48, y: 0 },
      ArrowUp: { x: 0, y: 48 },
      ArrowDown: { x: 0, y: -48 },
    };
    if (movement[event.key]) {
      autoFit.current = false;
      event.preventDefault();
      update({
        ...cameraRef.current,
        x: cameraRef.current.x + movement[event.key].x,
        y: cameraRef.current.y + movement[event.key].y,
      });
    } else if (["+", "=", "-", "0"].includes(event.key)) {
      event.preventDefault();
      if (event.key === "0") {
        autoFit.current = false;
        fit();
      } else zoom(event.key === "-" ? 1 / 1.2 : 1.2);
    }
  };
  const onFocusCapture = (event: FocusEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) return;
    const area = event.currentTarget.getBoundingClientRect();
    const target = event.target.getBoundingClientRect();
    const dx =
      target.left < area.left
        ? area.left + 16 - target.left
        : target.right > area.right
          ? area.right - 16 - target.right
          : 0;
    const dy =
      target.top < area.top
        ? area.top + 16 - target.top
        : target.bottom > area.bottom
          ? area.bottom - 16 - target.bottom
          : 0;
    if (dx || dy) {
      autoFit.current = false;
      update({ ...cameraRef.current, x: cameraRef.current.x + dx, y: cameraRef.current.y + dy });
    }
  };
  return {
    camera,
    setViewport,
    dragging,
    zoom,
    fit: () => {
      autoFit.current = false;
      fit();
    },
    center,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: onPointerEnd,
      onPointerCancel: onPointerEnd,
      onLostPointerCapture: onPointerEnd,
      onKeyDown,
      onFocusCapture,
    },
  };
}
