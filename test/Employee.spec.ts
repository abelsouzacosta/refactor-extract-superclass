import { Employee } from "../src/Employee";

describe("Employee", () => {
  it("should create an employee entity with valid informations", () => {
    const id = "323444";
    const name = "Junior";
    const monthlyCosts = 6800;

    const employee = new Employee(id, name, monthlyCosts);
    expect(employee.getName()).toBe(name);
    expect(employee.getId()).toBe(id);
    expect(employee.getMonthlyCosts()).toBe(monthlyCosts);
    expect(employee.getAnnualCosts()).toBe(monthlyCosts * 12);
  });
});
