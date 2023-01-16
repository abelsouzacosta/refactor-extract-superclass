import { Employee } from "./Employee";

export class Departament {
  constructor(protected name: string, protected staff: Employee[]) {}

  getStaff(): Employee[] {
    return this.staff.slice();
  }

  getName(): string {
    return this.name;
  }

  getMonthlyCosts(): number {
    return this.staff
      .map((employee) => employee.getMonthlyCosts())
      .reduce((sum: number, cost: number) => sum + cost);
  }

  getAnnualCosts(): number {
    return this.getMonthlyCosts() * 12;
  }
}
