export type Meta4EmployeeEmailRecord = {
  email: string;
  order: string;
  startDate: string;
  endDate: string;
  locationTypeCode: string;
};

export type Meta4EmployeeDetailResult = {
  employeeId: string;
  fields: Record<string, string>;
  emails: Meta4EmployeeEmailRecord[];
};
