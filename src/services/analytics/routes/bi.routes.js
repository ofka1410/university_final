/**
 * @instructions
 * 1. Import express and create express.Router().
 * 2. Import biController from '../controller/bi.controller'.
 * 3. Define routes for business intelligence and KPI reports (DFD Level 1 - Processes 4.1 to 4.4):
 *    - GET '/dashboard/:month' -> biController.getMonthlyDashboard (Macro metrics for the restaurant)
 *    - GET '/employee/:id/:month' -> biController.getEmployeePerformance (Micro metrics for a specific employee)
 * 4. Export the router.
 */