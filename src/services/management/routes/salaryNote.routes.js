/**
 * @instructions
 * 1. Import express and create express.Router().
 * 2. Import salaryNoteController from '../controller/salaryNote.controller'.
 * 3. Define routes for salary notes/exceptions (DFD Level 1 - Process 1.5):
 *    - GET '/:employeeId/:month' -> salaryNoteController.getNotesByEmployeeAndMonth
 *    - POST '/' -> salaryNoteController.createNewSalaryNote
 *    - DELETE '/:id' -> salaryNoteController.deleteSalaryNote
 * 4. Export the router.
 */