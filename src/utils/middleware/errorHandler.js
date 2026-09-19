/**
 * @instructions
 * 1. Import the 'AppError' class from '../utils/AppError'.
 * 2. Create and export an Express error-handling middleware function. It MUST have exactly 4 arguments: (err, req, res, next).
 * 3. Set defaults for the error:
 *    - statusCode: err.statusCode || 500
 *    - errorCode: err.errorCode || 'INTERNAL_SERVER_ERROR'
 *    - message: err.message || 'Something went wrong on the server'
 * 4. Add logic to catch specific Firebase/Firestore errors (e.g., if err.code starts with 'auth/' or 'firestore/'), and map them to appropriate HTTP status codes and user-friendly messages.
 * 5. Send the final JSON response to the client in this EXACT format:
 *    {
 *      "success": false,
 *      "error": {
 *        "statusCode": <number>,
 *        "errorCode": "<string>",
 *        "message": "<string>"
 *      },
 *      "timestamp": "<current ISO date string>"
 *    }
 * 6. Make sure NOT to leak the err.stack trace in the JSON response (assume production ready).
 */