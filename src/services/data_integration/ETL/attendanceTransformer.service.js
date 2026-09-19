/**
 * @instructions
 * 1. Import read-only modules ('employeeModule', 'contractModule') from '../../../../db_requests_modules/'.
 * 2. Import 'createModule' from '../../../../db_requests_modules/create.module' for internal creations.
 * 3. Create and export an async function 'transform(fileBuffer)'.
 * 4. PARSE PHASE: Convert fileBuffer to text. Extract shift rows with valid 'כניסה' and 'יציאה'. Build two distinct arrays: 'employee_list' and 'contract_list'.
 * 5. VALIDATE & CREATE PHASE:
 *    - Iterate 'employee_list': Check employeeModule.getEmployeeByTabitCode. If missing, await createModule.createNewEmployeeInternal(). Store the real Emp_ID.
 *    - Iterate 'contract_list': Check contractModule. If missing, await createModule.createNewContractInternal().
 * 6. FORMATTING PHASE:
 *    - Map the parsed data into an array of JSON objects EXACTLY matching this database structure for each employee:
 *      {
 *        Emp_ID: "<Resolved DB ID>",
 *        Target_Month: "YYYY-MM",
 *        Total_Regular_Hours: <number>,
 *        Total_Overtime_125: <number>,
 *        Total_Overtime_150: <number>,
 *        Total_Work_Days: <number>,
 *        Daily_Shifts: [ { Shift_Date: <Date>, Start_Time: <Date>, End_Time: <Date>, Hours_Worked: <number> } ],
 *        Status: "Approved"
 *      }
 * 7. Return the final structured array. DO NOT perform bulk inserts here and DO NOT use try-catch.
 */