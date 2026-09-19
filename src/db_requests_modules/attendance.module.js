/**
 * @instructions
 * 1. Import 'db' from config/firebase.js.
 * 2. Create and export the following pure functions for the 'ATTENDANCE' collection:
 *    - getAllAttendanceByMonth(targetMonth): Fetches all attendance records for a specific month.
 *    - getEmployeeAttendanceByMonth(empId, targetMonth): Queries the exact attendance document for an employee in a given month.
 *    - getAttendanceHistoryByEmployee(empId): Fetches all historical attendance records for an employee.
 *    - getAttendanceByStatus(targetMonth, status): Queries attendance documents for a specific month filtered by Status (e.g., "Approved", "Pending").
 * 3. Return clean arrays/objects.
 */