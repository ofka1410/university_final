/**
 * @instructions
 * 1. Import 'db' from '../../../config/firebase' for write operations.
 * 2. Import 'employeeModule' from '../../../db_requests_modules/employee.module'.
 * 3. Import 'asyncHandler' from '../../../utils/middleware/asyncHandler' and 'AppError' from '../../../utils/middleware/AppError'.
 * 4. Create and export:
 *    - getAllEmployees(req, res): Check req.query. 
 *        * If req.query.tabitCode exists -> call employeeModule.getEmployeeByTabitCode().
 *        * If req.query.firstName & req.query.lastName -> call employeeModule.getEmployeeByName().
 *        * If req.query.restId & req.query.deptId -> call employeeModule.getEmployeesByDepartment().
 *        * If req.query.role & req.query.restId -> call employeeModule.getEmployeesByRoleAndRestaurant().
 *        * If req.query.restId (only) -> call employeeModule.getEmployeesByRestaurant().
 *        * Else -> call employeeModule.getAllActiveEmployees().
 *    - getEmployeeById(req, res): Call employeeModule.getEmployeeById(req.params.id).
 *    - createNewEmployee(req, res): Validate body. Use getEmployeeByTabitCode() to check for duplicates. Write to 'EMPLOYEE' collection. Return 201.
 *    - updateEmployee(req, res): Update 'EMPLOYEE' collection where doc id = req.params.id.
 *    - deleteEmployee(req, res): Soft delete - update 'Status' to "Inactive".
 * 5. CRITICAL ERROR HANDLING: 
 *    - DO NOT use try-catch blocks.
 *    - Wrap EVERY exported function with asyncHandler.
 *    - For operational errors (e.g., duplicate Tabit Code, missing fields), use: throw new AppError('Message', statusCode, 'ErrorCode').
 */