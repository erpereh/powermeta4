import { beforeEach, describe, expect, it, vi } from "vitest";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { exportUsersToXlsx } from "@/lib/meta4/users/export-xlsx";
import { listMeta4Users } from "@/lib/meta4/users/service";

import { POST } from "./route";

vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: vi.fn(),
  deleteSessionCookie: vi.fn(),
}));
vi.mock("@/lib/meta4/users/service", () => ({ listMeta4Users: vi.fn() }));
vi.mock("@/lib/meta4/users/export-xlsx", () => ({
  exportUsersToXlsx: vi.fn(),
  usersFileName: (society: string, date: string) => `Usuarios_${society}_${date}.xlsx`,
}));

const users = [
  { id: "0639", claveSelf: "jose.pinero", fullName: "José Piñero Pecero" },
  { id: "0579", claveSelf: "antonioramon.sanchez", fullName: "Antonio Ramón Sánchez" },
];

const post = (body: unknown) =>
  POST(
    new Request("http://localhost/api/users/export", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    }),
  );

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getCurrentAuthContext).mockResolvedValue(
    {} as Awaited<ReturnType<typeof getCurrentAuthContext>>,
  );
  vi.mocked(listMeta4Users).mockResolvedValue({ society: "CYC", users });
  vi.mocked(exportUsersToXlsx).mockResolvedValue(Buffer.from([80, 75]));
});

describe("POST /api/users/export", () => {
  it("rejects requests without a session", async () => {
    vi.mocked(getCurrentAuthContext).mockResolvedValueOnce(null);

    const response = await post({});

    expect(response.status).toBe(401);
    expect(deleteSessionCookie).toHaveBeenCalled();
    expect(listMeta4Users).not.toHaveBeenCalled();
  });

  it("rejects an invalid query", async () => {
    const response = await post({ query: 5 });

    expect(response.status).toBe(400);
    expect(listMeta4Users).not.toHaveBeenCalled();
  });

  it("exports every user sorted by id without a query", async () => {
    const response = await post({});

    expect(response.status).toBe(200);
    expect(exportUsersToXlsx).toHaveBeenCalledWith([users[1], users[0]]);
    expect(response.headers.get("content-disposition")).toMatch(
      /^attachment; filename="Usuarios_CYC_\d{4}-\d{2}-\d{2}\.xlsx"$/,
    );
    expect(response.headers.get("cache-control")).toBe("no-store");
  });

  it("exports only the filtered users", async () => {
    const response = await post({ query: "pinero" });

    expect(response.status).toBe(200);
    expect(exportUsersToXlsx).toHaveBeenCalledWith([users[0]]);
  });

  it("returns 404 when nothing matches", async () => {
    const response = await post({ query: "nadie" });

    expect(response.status).toBe(404);
    expect(exportUsersToXlsx).not.toHaveBeenCalled();
  });
});
