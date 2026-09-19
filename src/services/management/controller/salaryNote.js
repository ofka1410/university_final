/**
 * @instructions
 * 1. Import 'db' from '../../../config/firebase' for write operations.
 * 2. Import 'salaryNoteModule' from '../../../db_requests_modules/salaryNote.module'.
 * 3. Import 'asyncHandler' from '../../../utils/middleware/asyncHandler' and 'AppError' from '../../../utils/middleware/AppError'.
 * 4. Create and export:
 *    - getNotesByEmployeeAndMonth(req, res): Call salaryNoteModule.getNotesByEmployeeAndMonth(req.params.employeeId, req.params.month).
 *    - createNewSalaryNote(req, res): Extract payload (Emp_ID, Target_Month, Note_Type, Amount, Description). Save to 'SALARY_NOTE' collection.
 *    - deleteSalaryNote(req, res): Hard delete the document with req.params.id from 'SALARY_NOTE'.
 * 5. CRITICAL ERROR HANDLING: 
 *    - DO NOT use try-catch blocks.
 *    - Wrap EVERY exported function with asyncHandler.
 *    - For operational errors, use: throw new AppError('Message', statusCode, 'ErrorCode').
 */