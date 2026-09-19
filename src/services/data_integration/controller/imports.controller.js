/**
 * @instructions
 * 1. Import 'asyncHandler' and 'AppError' from '../../../../utils/middleware/'.
 * 2. Import 'filePipeline' from '../ETL/filePipeline'.
 * 3. Import 'db' from '../../../../config/firebase' for WriteBatch operations.
 * 4. Create and export 'handleFileUpload(req, res)':
 *    a. Check if req.file exists. If not, throw AppError.
 *    b. Pass to pipeline: const { file_type, processData } = await filePipeline.processFile(req.file).
 *    c. Switch (file_type):
 *       - case 'attendance': Insert 'processData' into 'ATTENDANCE' collection using Firestore WriteBatch.
 *       - case 'sales': Insert 'processData' into 'MONTHLY_SALE' collection using WriteBatch.
 *       - case 'salaryNotes': Insert 'processData' into 'SALARY_NOTE' collection using WriteBatch.
 *    d. Commit the WriteBatch.
 *    e. Return res.status(201).json({ success: true, file_type, insertedCount: processData.length }).
 * 5. CRITICAL: Wrap the entire function in asyncHandler. DO NOT use try-catch blocks inside.
 */