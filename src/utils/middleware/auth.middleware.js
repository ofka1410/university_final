/**
 * @instructions
 * 1. Import 'firebase-admin' and the custom 'AppError' class.
 * 2. Create and export an async middleware function named 'verifyToken' (req, res, next).
 * 3. Inside 'verifyToken':
 *    - DEV BYPASS: If process.env.NODE_ENV === 'development' AND req.headers['x-dev-bypass'] === 'true', mock the user:
 *      req.user = { uid: 'dev-admin-123', role: 'Admin' };
 *      return next();
 *    - PRODUCTION FLOW: Check for the 'Authorization' header (must start with 'Bearer '). If missing, throw AppError 401.
 *    - Extract the token and verify it using 'admin.auth().verifyIdToken(token)'.
 *    - If verification fails, catch and throw AppError 401.
 *    - If successful, attach the decoded token (including custom claims like 'role') to 'req.user' and call next().
 * 4. Create and export a middleware factory named 'requireRole(allowedRoles)'.
 *    - 'allowedRoles' is an array (e.g., ['Admin', 'Manager']).
 *    - Return a (req, res, next) middleware.
 *    - Inside, check if 'req.user.role' exists and is included in 'allowedRoles'.
 *    - If not, throw AppError 403 ('Forbidden'). Otherwise, call next().
 */