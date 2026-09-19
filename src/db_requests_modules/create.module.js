/**
 * @instructions
 * 1. Import 'db' from '../config/firebase'.
 * 2. Create and export pure async functions for internal database creation operations:
 *    - createNewEmployeeInternal(employeeData): Inserts a new document into 'EMPLOYEE' collection (default Status: "Active"). Returns the new document ID.
 *    - createNewContractInternal(contractData): Inserts a new document into 'WAGES_CONTRACT' collection. Returns the new document ID.
 * 3. These functions are strictly for internal service use (ETL). Do not add req/res Express logic here.
 * 4. Return the newly created doc.id directly.
 */