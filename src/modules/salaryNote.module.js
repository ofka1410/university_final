/**
 * @instructions
 * 1. Import 'db' from config/firebase.js.
 * 2. Create and export the following pure functions for the 'SALARY_NOTE' collection:
 *    - getAllNotesByMonth(targetMonth): Fetches all salary notes for a specific month (e.g., "2026-09").
 *    - getNotesByEmployeeAndMonth(empId, targetMonth): Queries notes for a specific employee in a specific month (crucial for payroll calculation).
 *    - getNotesHistoryByEmployee(empId): Fetches all historical salary notes for a specific employee.
 *    - getNotesByTypeAndMonth(noteType, targetMonth): Queries notes by a specific type (e.g., "ימי מחלה", "בונוס") in a given month.
 * 3. Return clean arrays/objects.
 */