export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  jobTitle: string;
  imageFilePath: string;
  badgeIds: Array<number>;
}

export interface EmployeeResultProps {
  employees: Employee[];
  searchTerm: string | null;
}
