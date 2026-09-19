/**
 * @instructions
 * 1. Import 'db' from '../../../config/firebase' for write operations.
 * 2. Import 'contractModule' from '../../../db_requests_modules/contract.module'.
 * 3. Import 'asyncHandler' from '../../../utils/middleware/asyncHandler' and 'AppError' from '../../../utils/middleware/AppError'.
 * 4. Create and export:
 *    - getAllContracts(req, res): Check req.query.
 *        * If req.query.contractType -> call contractModule.getContractsByType().
 *        * If req.query.includesTipModel === 'true' -> call contractModule.getContractsWithTipModel().
 *        * Else -> call contractModule.getAllContracts().
 *    - getContractById(req, res): Call contractModule.getContractById(req.params.id).
 *    - createNewContract(req, res): Validate required fields. Create in 'WAGES_CONTRACT'. Return 201.
 *    - updateContract(req, res): Update 'WAGES_CONTRACT' where doc id = req.params.id.
 * 5. CRITICAL ERROR HANDLING: 
 *    - DO NOT use try-catch blocks.
 *    - Wrap EVERY exported function with asyncHandler.
 *    - For operational errors (e.g., contract not found, invalid base rate), use: throw new AppError('Message', statusCode, 'ErrorCode').
 */