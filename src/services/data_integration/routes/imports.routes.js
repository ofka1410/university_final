/**
 * @instructions
 * 1. Import express and create express.Router().
 * 2. Import 'multer' and configure it to use memory storage (const upload = multer({ storage: multer.memoryStorage() })).
 * 3. Import 'importsController' from '../controller/imports.controller'.
 * 4. Define a SINGLE unified route for handling all Tabit file uploads:
 *    - POST '/upload' -> Use multer middleware: upload.single('file') -> importsController.handleFileUpload
 * 5. Export the router.
 * 
 * Note: The routing to the specific ETL logic (Sales vs. Attendance) will be handled internally by the pipeline, not by the router.
 */