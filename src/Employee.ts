export class Employee {
  constructor(
    protected id: string,
    protected name: string,
    protected monthlyCosts: number
  ) {}

  getAnnualCosts(): number {
    return this.monthlyCosts * 12;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getMonthlyCosts(): number {
    return this.monthlyCosts;
  }
}
