import path from "node:path";

const WINDOWS_FORBIDDEN = /[<>:"/\\|?*\u0000-\u001f]/g;
const UNSAFE_FILENAME = /[^A-Za-z0-9._-]/g;

const pad = (value: number): string => String(value).padStart(2, "0");

export const sanitizeHireUsername = (username: string): string => {
  const cleaned = username
    .trim()
    .replace(WINDOWS_FORBIDDEN, "_")
    .replace(UNSAFE_FILENAME, "_")
    .replace(/_+/g, "_")
    .replace(/^[._]+|[._]+$/g, "");
  return cleaned || "usuario";
};

export const formatHireTimestamp = (date: Date): string =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}_${pad(date.getHours())}-${pad(date.getMinutes())}-${pad(date.getSeconds())}`;

export const buildHireFileName = (username: string, date: Date): string =>
  `Hire_${sanitizeHireUsername(username)}_${formatHireTimestamp(date)}.xls`;

export const buildHireFilePath = (directory: string, fileName: string): string =>
  path.win32.join(directory.replace(/[\\/]+$/, ""), fileName);
