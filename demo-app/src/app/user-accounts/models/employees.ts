export type Employee = {
  employeeId: number;
  lastName: string;
  firstName: string;
  title: string;
  titleOfCourtesy: string;
  birthDate: string;
  hireDate: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  homePhone: string;
  extension: string;
  photo: string;
  notes: string;
  reportsTo: number;
  photoPath: string;
  username: string;
  password: string;
};

export type NewEmployee = Omit<Employee, "employeeId">;