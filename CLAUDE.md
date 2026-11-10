project:
  name: "Restaurant Payroll and BI Management System Backend"
  stack: 
    - "Node.js"
    - "Express.js"
    - "Firebase Firestore (NoSQL) via firebase-admin"
  architecture_pattern: "Strict modular design separating DAL, Controllers, ETL, and Global Error Handling"

folder_structure:
  "src/config/": "Firebase initialization"
  "src/utils/middleware/": "AppError.js, asyncHandler.js, errorHandler.js, auth.middleware.js"
  "src/db_requests_modules/": "Data Access Layer (DAL)"
  "src/services/management/": "REST API Controllers"
  "src/services/data_integration/": "ETL / File Import pipeline (Multer, Transformers)"

strict_architecture_rules:
  database_access:
    rule: "ALL direct Firestore queries (GET, POST, PUT, DELETE) MUST be located strictly inside src/db_requests_modules/"
    restriction: "Controllers or Services MUST NEVER interact with Firestore directly. They must call the DAL."
  permissions_for_new_queries:
    rule: "Before writing any new DB query, search db_requests_modules/ to see if a matching function exists."
    restriction: "NEVER create a new function in db_requests_modules without asking the user for explicit permission first."
  error_handling:
    rule: "NEVER use try/catch blocks inside controllers."
    requirements:
      - "ALWAYS wrap controller logic using asyncHandler (src/utils/middleware/asyncHandler.js)"
      - "ALWAYS throw operational errors using the custom AppError class (src/utils/middleware/AppError.js)"

security_guidelines:
  authentication:
    middleware: "verifyToken"
    rule: "ALL routes (except explicit public endpoints) MUST be protected by Firebase Auth middleware verifying the Bearer token."
  authorization_rbac:
    middleware: "requireRole(allowedRoles)"
    rule: "Implement strict Role-Based Access Control using Custom Claims embedded in the JWT token (e.g., ['Admin', 'Manager'])."
  dev_bypass:
    conditions: 
      - "process.env.NODE_ENV === 'development'"
      - "process.env.DEV_BYPASS_ENABLED === 'true'"
      - "req.headers['x-dev-bypass'] === 'true'"
    action: "Bypass Firebase token verification and inject mock admin user object (e.g., req.user = { uid: 'dev-admin', role: 'Admin' })"
  routing:
    rule: "Use relative paths for Express routes (e.g., /api/employees). Do not hardcode base URLs."