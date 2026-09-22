export type HirePersonInput = {
  firstName: string;
  lastName1: string;
  lastName2: string;
  documentType: string;
  documentNumber: string;
  email: string;
  hireDate: string;
};

export type HirePerson = {
  firstName: string;
  lastName1: string;
  lastName2: string;
  documentType: string;
  documentNumber: string;
  email: string;
  hireDate: string;
};

export type HireLaunchResult = {
  personCount: number;
  returnCode: string;
  fileName: string;
  filePath: string;
};
