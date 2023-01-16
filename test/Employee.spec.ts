import { Employee } from "../src/Employee";

describe("Employee", () => {
  let employee: Employee;

  beforeAll(() => {
    employee = new Employee("323444", "Junior", 5000);
  });

  it("should get the name of the employee", () => {
    let employeeName = employee.getName();

    expect(employeeName).toBe("Junior");
  });

  it("should return the id of the employee", () => {
    let employeeId = employee.getId();

    expect(employeeId).toBe("323444");
  });

  it("should get the monthly costs of the employee", () => {
    let employeeMonthlyCosts = employee.getMonthlyCosts();

    expect(employeeMonthlyCosts).toBe(5000);
  });

  it("should get the annual costs of the employee", () => {
    let employeeAnnualCosts = employee.getAnnualCosts();

    expect(employeeAnnualCosts).toBe(5000 * 12);
  });
});
