---
description: Audit recent changes against backend architecture rules
---

Scan all recently modified files in `src/` and check:

1. **Direct DB Leaks:** Are there any Firestore imports (`firebase-admin`, `db.collection`) outside `src/db_requests_modules/`?
2. **Try/Catch Violations:** Are any controllers using raw `try/catch` instead of `asyncHandler`?
3. **Unprotected Routes:** Are there any endpoints missing `verifyToken` or role restrictions?
4. **Secrets Exposure:** Are any environment variables or sensitive fields leaked in logs or API responses?

Output a summary table of findings. If any violation exists, propose the fix.