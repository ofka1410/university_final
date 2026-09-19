/**
 * @instructions
 * 1. Import 'db' from config/firebase.js.
 * 2. Create and export the following pure functions for the 'EMPLOYEE' collection:
 *    - getAllActiveEmployees(): Fetches all employees with Status: "Active".
 *    - getEmployeeById(empId): Fetches a single employee by doc ID.
 *    - getEmployeeByTabitCode(tabitCode): Queries for an employee using their 'Tabit_Code'.
 *    - getEmployeeByName(firstName, lastName): Queries for an employee by exact First_Name and Last_Name.
 *    - getEmployeesByRestaurant(restId): Queries employees where 'Restaurant_Info.Rest_ID' matches the given ID.
 *    - getEmployeesByDepartment(restId, deptId): Queries employees belonging to a specific department in a specific restaurant.
 *    - getEmployeesByRoleAndRestaurant(role, restId): Queries employees by a specific Role (e.g., "מלצר") and Rest_ID.
 * 3. Ensure all returned objects include the document ID (doc.id).
 */