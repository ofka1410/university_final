---
name: create-endpoint
description: Create a new API route and controller following the strict backend architecture
argument-hint: <feature-name>
---

Follow this workflow to implement the endpoint for: $ARGUMENTS

0. **Check the Decision Log** in `university_final/CLAUDE.md`. Stop if the feature is rejected or postponed.
1. **Check DAL First:**
   - Search `university_final/src/db_requests_modules/` for existing functions matching this operation.
   - If a new or changed DB function is needed, STOP and ask me for permission (use the impact analysis from `/add-dal-fn`) before writing it.
2. **Controller Implementation:**
   - Place in `university_final/src/services/management/controller/<feature-name>.controller.js`.
   - Wrap the controller function strictly using `asyncHandler`.
   - Never use try/catch blocks. Use `AppError` for operational errors.
   - Validate request input with `zod`.
3. **Route & Security:**
   - Place in the appropriate service route file.
   - Apply `verifyToken` and `requireRole(['Admin', 'Manager'])`.
   - Ensure the path is relative (e.g., `/api/<feature-name>`).
   - Do not restructure `index.js` (the `app.js` split is rejected).
4. **Verification:**
   - Run `npm run lint` (from `university_final/`, or `npm --prefix university_final run lint` from `backend/`) and fix any formatting or syntax errors.
   - Run `npm test` the same way and fix any failures.
   - Tests must use mocks — never production Firestore.
