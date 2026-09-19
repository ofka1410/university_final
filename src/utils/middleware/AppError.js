/**
 * @instructions
 * 1. Create and export a class named 'AppError' that extends the built-in JavaScript 'Error' class.
 * 2. The constructor should accept three parameters: message (string), statusCode (number), and errorCode (string, optional).
 * 3. Inside the constructor:
 *    - Call super(message).
 *    - Set this.statusCode = statusCode.
 *    - Set this.errorCode = errorCode || 'INTERNAL_ERROR'.
 *    - Set this.isOperational = true (This flag helps distinguish our custom errors from generic unhandled bugs).
 * 4. Capture the stack trace using Error.captureStackTrace(this, this.constructor).
 */