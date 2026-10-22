"use client";

import { useMemo, useState } from "react";
import { Download } from "lucide-react";

import { UserDetailDialog } from "@/components/tools/users/user-detail-dialog";
import {
  Badge,
  Button,
  EmptyState,
  Input,
  Table,
  type TableProps,
} from "@/components/system";
import { compareEmployeeIds } from "@/lib/meta4/users/employee-id";
import { USERS_SEARCH_MAX_LENGTH, filterUsers } from "@/lib/meta4/users/list-filter";
import type { Meta4UserListItem } from "@/lib/meta4/users/types";
import type { Meta4Society } from "@/lib/meta4/societies";

const PAGE_SIZE = 25;
const ROW_HEIGHT = 48;
const TABLE_HEIGHT = Math.min(PAGE_SIZE, 10) * ROW_HEIGHT + ROW_HEIGHT;

type SortState = NonNullable<TableProps<Meta4UserListItem>["sort"]>;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const saveFile = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

/** Exporta a Excel lo filtrado; el servidor vuelve a leer los usuarios de la sociedad. */
function UsersDownload({ query, total }: { query: string; total: number }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const download = async () => {
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/users/export", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query }),
      });
      if (!response.ok) {
        const data: unknown = await response.json().catch(() => null);
        setError(
          isRecord(data) && typeof data.message === "string"
            ? data.message
            : "No se ha podido descargar el Excel.",
        );
        return;
      }
      const fileName =
        /filename="([^"]+)"/.exec(response.headers.get("content-disposition") ?? "")?.[1] ??
        "Usuarios.xlsx";
      saveFile(await response.blob(), fileName);
    } catch {
      setError("No se ha podido descargar el Excel.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-1 sm:items-end">
      <Button
        type="button"
        variant="outline"
        onClick={() => void download()}
        disabled={pending || total === 0}
        aria-busy={pending}
      >
        <Download aria-hidden="true" className="size-4" />
        {pending ? "Preparando…" : total === 1 ? "Exportar a Excel" : `Exportar ${total} a Excel`}
      </Button>
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const employeeIdSortKey = (id: string): string => {
  if (/^\d+$/.test(id)) {
    const key = id.replace(/^0+/, "") || "0";
    return `${String(key.length).padStart(4, "0")}:${key}:${id}`;
  }
  return `~:${id}`;
};

const compareRows = (
  a: Meta4UserListItem,
  b: Meta4UserListItem,
  sort: SortState,
): number => {
  let cmp = 0;
  if (sort.key === "id") {
    cmp = compareEmployeeIds(a.id, b.id);
  } else if (sort.key === "claveSelf") {
    cmp = a.claveSelf.localeCompare(b.claveSelf, "es", { sensitivity: "base" });
  } else if (sort.key === "fullName") {
    cmp = a.fullName.localeCompare(b.fullName, "es", { sensitivity: "base" });
  }
  return sort.direction === "asc" ? cmp : -cmp;
};

export type UsersListTableProps = {
  society: Meta4Society;
  users: Meta4UserListItem[];
};

export function UsersListTable({ society, users }: UsersListTableProps) {
  const [sort, setSort] = useState<SortState | null>({ key: "id", direction: "asc" });
  const [globalFilter, setGlobalFilter] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);

  const columns = useMemo<TableProps<Meta4UserListItem>["columns"]>(
    () => [
      {
        key: "id",
        header: "ID",
        sortable: true,
        width: "96px",
        sortValue: (row) => employeeIdSortKey(row.id),
        cell: (row) => (
          <span className="font-mono text-sm tabular-nums text-foreground">{row.id}</span>
        ),
      },
      {
        key: "claveSelf",
        header: "Usuario Meta4",
        sortable: true,
        width: "148px",
        sortValue: (row) => row.claveSelf,
        cell: (row) => (
          <span className="font-mono text-sm text-foreground">{row.claveSelf}</span>
        ),
      },
      {
        key: "fullName",
        header: "Nombre y apellidos",
        sortable: true,
        width: "240px",
        sortValue: (row) => row.fullName,
        cell: (row) => (
          <span className="text-sm text-foreground">{row.fullName}</span>
        ),
      },
    ],
    [],
  );

  const filteredUsers = useMemo(() => filterUsers(users, globalFilter), [users, globalFilter]);

  const sortedUsers = useMemo(() => {
    if (!sort) return filteredUsers;
    return [...filteredUsers].sort((a, b) => compareRows(a, b, sort));
  }, [filteredUsers, sort]);

  const filteredCount = sortedUsers.length;
  const pageCount = Math.max(1, Math.ceil(filteredCount / PAGE_SIZE));
  const safePageIndex = Math.min(pageIndex, pageCount - 1);
  const pageStart = safePageIndex * PAGE_SIZE;
  const pageUsers = sortedUsers.slice(pageStart, pageStart + PAGE_SIZE);
  const from = filteredCount === 0 ? 0 : pageStart + 1;
  const to = Math.min(pageStart + PAGE_SIZE, filteredCount);
  const hasSearch = globalFilter.trim().length > 0;
  const tableHeight = Math.min(
    TABLE_HEIGHT,
    Math.max(ROW_HEIGHT * 3, pageUsers.length * ROW_HEIGHT + ROW_HEIGHT),
  );

  return (
    <div className="mx-auto w-full max-w-6xl space-y-4 px-4 py-5 sm:px-6">
      <div className="flex flex-wrap items-center gap-2.5">
        <Badge status="neutral" size="sm">
          {society}
        </Badge>
        <p className="text-sm text-muted-foreground">
          Todos los usuarios disponibles en {society}.
        </p>
      </div>

      {users.length === 0 ? (
        <EmptyState title={`No hay usuarios disponibles en ${society}.`} />
      ) : (
        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <Input
              type="search"
              value={globalFilter}
              onChange={(value) => {
                setGlobalFilter(value);
                setPageIndex(0);
              }}
              placeholder="Buscar por ID, usuario o nombre..."
              aria-label="Buscar por ID, usuario o nombre"
              maxLength={USERS_SEARCH_MAX_LENGTH}
              className="max-w-md"
            />
            <UsersDownload query={globalFilter} total={filteredCount} />
          </div>

          <Table
            data={pageUsers}
            columns={columns}
            getRowId={(row) => row.id}
            sort={sort}
            onSortChange={(next) => {
              setSort(next);
              setPageIndex(0);
            }}
            defaultSort={{ key: "id", direction: "asc" }}
            rowHeight={ROW_HEIGHT}
            height={tableHeight}
            emptyState={
              hasSearch
                ? "No hay usuarios que coincidan con la búsqueda."
                : `No hay usuarios disponibles en ${society}.`
            }
            onRowActivate={(row) => setSelectedEmployeeId(row.id)}
            getRowAriaLabel={(row) => `Ver detalle de ${row.fullName}`}
            className="min-w-0"
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground" aria-live="polite">
              {filteredCount === 0
                ? "Mostrando 0 de 0"
                : `Mostrando ${from}–${to} de ${filteredCount}`}
            </p>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setPageIndex((current) => Math.max(0, current - 1))}
                disabled={safePageIndex <= 0}
              >
                Anterior
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  setPageIndex((current) => Math.min(pageCount - 1, current + 1))
                }
                disabled={safePageIndex >= pageCount - 1 || filteredCount === 0}
              >
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      )}

      <UserDetailDialog
        employeeId={selectedEmployeeId}
        open={selectedEmployeeId !== null}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) setSelectedEmployeeId(null);
        }}
      />
    </div>
  );
}
