/**
 * @instructions
 * 1. Create and export a higher-order function named 'asyncHandler'.
 * 2. It should accept an asynchronous Express middleware/controller function 'fn' as its only argument.
 * 3. It must return a new function with the exact Express signature: (req, res, next).
 * 4. Inside the returned function, execute Promise.resolve(fn(req, res, next)).catch(next).
 * 5. Do not add any other logic. Keep it strictly as a minimal wrapper to catch unhandled promise rejections and pass them to the global error handler.
 */