import type { Meta4ProfileSectionView } from "@/types/meta4-profile";

export type Meta4EmployeeEmailView = {
  email: string;
  dateRange: string;
};

export type Meta4EmployeeDetailView = {
  available: boolean;
  employeeId: string;
  displayName: string | null;
  message: string | null;
  sections: Meta4ProfileSectionView[];
  emails: Meta4EmployeeEmailView[];
};
