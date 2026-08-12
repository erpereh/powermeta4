"use client";

import { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { compareEmployeeIds } from "@/lib/meta4/users/employee-id";
import type { Meta4UserListItem } from "@/lib/meta4/users/types";
import type { Meta4Society } from "@/lib/meta4/societies";

const PAGE_SIZE = 25;

const normalizeSearch = (value: string): string =>
  value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

export type UsersListTableProps = {
  society: Meta4Society;
  users: Meta4UserListItem[];
};

export function UsersListTable({ society, users }: UsersListTableProps) {
  const [sorting, setSorting] = useState<SortingState>([{ id: "id", desc: false }]);
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo<ColumnDef<Meta4UserListItem>[]>(
    () => [
      {
        accessorKey: "id",
        header: ({ column }) => (
          <Button
            type="button"
            variant="ghost"
            className="-ml-2 h-8 px-2"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            aria-label="Ordenar por ID"
          >
            ID
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        sortingFn: (rowA, rowB) => compareEmployeeIds(rowA.original.id, rowB.original.id),
        cell: ({ row }) => (
          <span className="font-mono text-sm tabular-nums">{row.original.id}</span>
        ),
      },
      {
        accessorKey: "fullName",
        header: ({ column }) => (
          <Button
            type="button"
            variant="ghost"
            className="-ml-2 h-8 px-2"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            aria-label="Ordenar por nombre y apellidos"
          >
            Nombre y apellidos
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        sortingFn: (rowA, rowB) =>
          rowA.original.fullName.localeCompare(rowB.original.fullName, "es", {
            sensitivity: "base",
          }),
      },
    ],
    [],
  );

  const table = useReactTable({
    data: users,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, _columnId, filterValue) => {
      const query = normalizeSearch(String(filterValue ?? ""));
      if (!query) return true;
      const id = normalizeSearch(row.original.id);
      const name = normalizeSearch(row.original.fullName);
      return id.includes(query) || name.includes(query);
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: PAGE_SIZE },
    },
  });

  const filteredCount = table.getFilteredRowModel().rows.length;
  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const from = filteredCount === 0 ? 0 : pageIndex * pageSize + 1;
  const to = Math.min((pageIndex + 1) * pageSize, filteredCount);
  const hasSearch = globalFilter.trim().length > 0;

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-8 sm:px-8">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">Usuarios</h1>
        <Badge variant="secondary">{society}</Badge>
      </div>
      <p className="text-sm text-muted-foreground">Todos los usuarios disponibles en {society}.</p>

      {users.length === 0 ? (
        <p className="text-sm text-muted-foreground" role="status">
          No hay usuarios disponibles en {society}.
        </p>
      ) : (
        <div className="space-y-4">
          <Input
            type="search"
            value={globalFilter}
            onChange={(event) => {
              setGlobalFilter(event.target.value);
              table.setPageIndex(0);
            }}
            placeholder="Buscar por ID o nombre..."
            aria-label="Buscar por ID o nombre"
            className="max-w-md"
          />

          <div className="overflow-x-auto rounded-lg border border-border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      {hasSearch
                        ? "No hay usuarios que coincidan con la búsqueda."
                        : `No hay usuarios disponibles en ${society}.`}
                    </TableCell>
                  </TableRow>
                ) : (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

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
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Anterior
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SortIcon({ sorted }: { sorted: false | "asc" | "desc" }) {
  if (sorted === "asc") return <ArrowUp className="ml-1 size-3.5" aria-hidden="true" />;
  if (sorted === "desc") return <ArrowDown className="ml-1 size-3.5" aria-hidden="true" />;
  return <ArrowUpDown className="ml-1 size-3.5 opacity-50" aria-hidden="true" />;
}
