/* function createEmployee(name, streetAddress) {
    return {
      name: name,
      streetAddress: streetAddress
    };
  }
  let employee = createEmployee("John Doe", "123 Main St");
console.log(employee);
   */
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
}
let updatedEmployee =updateEmployeeWithKeyAndValue(employee, "phone", "555-555-5555");
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
    
