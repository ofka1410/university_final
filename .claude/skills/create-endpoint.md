---
description: Create a new API route and controller following strict architecture
argument: feature-name
---

Follow this workflow to implement the endpoint for: $ARGUMENTS

1. **Check DAL First:** 
   - Search `src/db_requests_modules/` for existing functions matching this operation.
   - If a new DB function is needed, STOP and ask me for permission before writing it.
2. **Controller Implementation:**
   - Place in `src/services/management/controller/<feature-name>.controller.js`.
   - Wrap the controller function strictly using `asyncHandler`.
   - Never use try/catch blocks. Use `AppError` for operational errors.
3. **Route & Security:**
   - Place in the appropriate service route file.
   - Apply `verifyToken` and `requireRole(['Admin', 'Manager'])`.
   - Ensure the path is relative (e.g., `/api/<feature-name>`).
4. **Verification:**
   - Run `npm run lint` and fix any formatting or syntax errors.