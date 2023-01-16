import { Employee } from "./Employee";
import { Party } from "./Party";

export class Departament extends Party {
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
