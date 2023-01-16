import { Employee } from "./Employee";
import { Party } from "./Party";

export class Departament extends Party {
  constructor(protected name: string, protected staff: Employee[]) {
    super(name);
  }

  getStaff(): Employee[] {
    return this.staff.slice();
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
