---
description: Propose and implement a new Firestore DAL query
argument: collection-name
---

I require a new DB query for the collection: $ARGUMENTS

1. **Verify Need:** Confirm why no existing function in `src/db_requests_modules/` satisfies this requirement.
2. **Draft Signature:** Output the proposed function signature, expected parameters, and return type for my review.
3. **Awaiting Confirmation:** Do NOT edit the file until I respond with "Approved".
4. **Implementation:** 
   - Once approved, add the pure Firestore query to `src/db_requests_modules/<collection-name>.module.js`.
   - Use batched writes (`WriteBatch`) if performing multi-document operations.
   - Return clean data objects without Firestore metadata.