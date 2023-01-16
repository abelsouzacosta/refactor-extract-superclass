import { Departament } from "../src/Departament";
import { Employee } from "../src/Employee";

describe("Departament", () => {
  const employee1 = new Employee("345566", "Gabriel", 5000);
  const employee2 = new Employee("345566", "Rafael", 5000);
  const employee3 = new Employee("345566", "Juliana", 5000);
  let staff = [employee1, employee2, employee3];
  let department: Departament;

  beforeAll(() => {
    department = new Departament("IT", staff);
  });

  it("should return the monthly costs", () => {
    const totalMonthlyCosts = department.getMonthlyCosts();

    expect(totalMonthlyCosts).toBe(15000);
  });

  it("should return the annual costs", () => {
    const annualCosts = department.getAnnualCosts();

    expect(annualCosts).toBe(15000 * 12);
  });
});
