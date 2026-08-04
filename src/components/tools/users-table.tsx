"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useWorkspaceStore } from "@/stores/use-workspace-store";
import { USER_ROLE_LABELS, USER_STATUS_LABELS } from "@/lib/users/validation";
import type { WorkspaceUserRole, WorkspaceUserStatus } from "@/types/workspace";

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();

export function UsersTable() {
  const users = useWorkspaceStore((state) => state.workspaces[state.activeCompanyId]?.users ?? []);
  const [query, setQuery] = useState("");
  const [role, setRole] = useState<WorkspaceUserRole | "all">("all");
  const [status, setStatus] = useState<WorkspaceUserStatus | "all">("all");

  const filteredUsers = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    return users.filter((user) => {
      const matchesQuery =
        !normalizedQuery ||
        normalize([user.firstName, user.lastName, user.email, user.username].join(" ")).includes(
          normalizedQuery,
        );
      const matchesRole = role === "all" || user.role === role;
      const matchesStatus = status === "all" || user.status === status;
      return matchesQuery && matchesRole && matchesStatus;
    });
  }, [query, role, status, users]);

  const hasFilters = Boolean(query) || role !== "all" || status !== "all";
  const clearFilters = () => {
    setQuery("");
    setRole("all");
    setStatus("all");
  };

  return (
    <div className="space-y-5">
      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_12rem_12rem_auto] md:items-end">
        <label className="grid gap-2 text-sm font-medium">
          Buscar usuarios
          <span className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Nombre, correo o usuario"
              className="pl-9"
            />
          </span>
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Rol
          <Select
            value={role}
            onValueChange={(value) => setRole(value as WorkspaceUserRole | "all")}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {Object.entries(USER_ROLE_LABELS).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Estado
          <Select
            value={status}
            onValueChange={(value) => setStatus(value as WorkspaceUserStatus | "all")}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {Object.entries(USER_STATUS_LABELS).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>
        {hasFilters && (
          <Button type="button" variant="ghost" onClick={clearFilters}>
            <X /> Limpiar filtros
          </Button>
        )}
      </div>

      {filteredUsers.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          {users.length === 0
            ? "Todavía no hay usuarios en este workspace."
            : "No hay usuarios que coincidan con los filtros."}
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Correo</TableHead>
                <TableHead className="hidden sm:table-cell">Usuario</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Link
                      href={`/tools/users/${user.id}`}
                      className="font-medium hover:text-primary"
                    >
                      {user.firstName} {user.lastName}
                    </Link>
                  </TableCell>
                  <TableCell className="max-w-48 truncate">{user.email}</TableCell>
                  <TableCell className="hidden text-muted-foreground sm:table-cell">
                    {user.username}
                  </TableCell>
                  <TableCell>{USER_ROLE_LABELS[user.role]}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "active" ? "secondary" : "outline"}>
                      {USER_STATUS_LABELS[user.status]}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
