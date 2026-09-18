/**
 * @instructions
 * 1. Import express and create express.Router().
 * 2. Import payrollController from '../controller/payroll.controller'.
 * 3. Define routes for payroll generation and reports (DFD Level 1 - Processes 3.1 to 3.6):
 *    - POST '/generate/:month' -> payrollController.generatePayrollForMonth (Triggers the calculation engine)
 *    - GET '/reports/:month' -> payrollController.getPayrollReportsByMonth (Gets all calculated reports for a specific month)
 *    - GET '/reports/:month/:employeeId' -> payrollController.getEmployeePayslip (Gets detailed payslip for a specific employee)
 * 4. Export the router.
 */