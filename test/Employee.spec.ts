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
});
