import { Party } from "./Party";

export class Employee extends Party {
  constructor(
    protected id: string,
    protected name: string,
    protected monthlyCosts: number
  ) {
    super(name);
  }

  getAnnualCosts(): number {
    return this.monthlyCosts * 12;
  }

  getId(): string {
    return this.id;
  }

  getMonthlyCosts(): number {
    return this.monthlyCosts;
  }
}
