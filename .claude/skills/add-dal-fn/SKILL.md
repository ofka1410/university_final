---
name: add-dal-fn
description: Propose and implement a new or changed Firestore DAL query, with impact analysis and explicit user approval before any edit
argument-hint: <collection-name>
---

I require a new DB query for the collection: $ARGUMENTS

1. **Verify Need:** Confirm why no existing (or planned, per the module's `@instructions`) function in `university_final/src/db_requests_modules/` satisfies this requirement. Read `university_final/firestore_schema.json` first; never invent fields.
2. **Draft Signature:** Output the proposed function signature, expected parameters, and return type for my review.
3. **Impact Analysis** (required by `CLAUDE.md` → DAL change control) if any existing or planned function is modified, replaced, renamed, restructured or removed: affected functions, all existing and planned callers (controllers, services, ETL), preserved vs. lost functionality, regressions, query/index and performance implications. For paginated queries, state the ordering, tie-breaker and cursor strategy.
4. **Awaiting Confirmation:** Do NOT edit the file until I respond with "Approved".
5. **Implementation:**
   - Once approved, add the pure Firestore query to `university_final/src/db_requests_modules/<collection-name>.module.js`.
   - Use batched writes (`WriteBatch`) if performing multi-document operations.
   - Return clean data objects without Firestore metadata.
   - Add mocked tests only — never hit production Firestore.
6. **Document** the approved decision in the Decision Log of `university_final/CLAUDE.md`.
