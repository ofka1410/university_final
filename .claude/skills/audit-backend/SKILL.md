---
name: audit-backend
description: Audit recent backend changes against the architecture and security rules in CLAUDE.md
---

Scan all recently modified files in `university_final/src/` (and `university_final/index.js`) and check:

1. **Direct DB Leaks:** Are there any Firestore imports (`firebase-admin`, `db.collection`) outside `src/db_requests_modules/`?
   Report every hit. Only two are expected, and each must still be listed and checked by hand: `src/config/firebase.js` (it initializes the app) and Firebase **Auth** token verification in `src/utils/middleware/auth.middleware.js`. Any Firestore access (`db`, `.collection(`, `getFirestore`) in either file is still a violation.
2. **Try/Catch Violations:** Are any controllers using raw `try/catch` instead of `asyncHandler`?
3. **Unprotected Routes:** Are there any endpoints missing `verifyToken` or role restrictions?
4. **Secrets Exposure:** Are any environment variables or sensitive fields leaked in logs or API responses? Is `.gitignore` still excluding `.env*`, keys and service-account files?
5. **Production Safety:** Does any test reach Firestore without the isolation in `test/setup.js`?
6. **Decision Log:** Does any change implement something marked rejected or postponed in `university_final/CLAUDE.md`?

Output a summary table of findings. If any violation exists, propose the fix — do not apply it without approval.
