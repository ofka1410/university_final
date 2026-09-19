/**
 * @instructions
 * 1. Import 'db' from '../../../config/firebase' for write operations.
 * 2. Import 'categoryModule' and 'productModule' from '../../../db_requests_modules/'.
 * 3. Import 'asyncHandler' from '../../../utils/middleware/asyncHandler' and 'AppError' from '../../../utils/middleware/AppError'.
 * 4. Create and export category functions:
 *    - getAllCategories(req, res): Check req.query. If req.query.restId -> call categoryModule.getCategoriesByRestaurant(). Else -> call categoryModule.getAllCategories().
 *    - createNewCategory(req, res): Save payload to 'CATEGORY' collection. Return 201.
 *    - updateCategory(req, res): Update specific fields in 'CATEGORY' where doc id = req.params.id. Return 200.
 *    - deleteCategory(req, res): Delete category where doc id = req.params.categoryId. Return 200.
 * 5. Create and export product functions:
 *    - getAllProducts(req, res): Check req.query.
 *        * If req.query.productName -> call productModule.getProductByName().
 *        * If req.query.catId -> call productModule.getProductsByCategory().
 *        * If req.query.restId -> call productModule.getProductsByRestaurant().
 *        * If req.query.minPrice & req.query.maxPrice -> call productModule.getProductsByPriceRange().
 *        * Else -> call productModule.getAllProducts().
 *    - createNewProduct(req, res): Save payload to 'PRODUCT' collection. Return 201.
 *    - updateProduct(req, res): Update specific fields in 'PRODUCT' where doc id = req.params.id. Return 200.
 *    - deleteProduct(req, res): Delete product where doc id = req.params.productId. Return 200.
 * 6. CRITICAL ERROR HANDLING: 
 *    - DO NOT use try-catch blocks.
 *    - Wrap EVERY exported function with asyncHandler.
 *    - For operational errors, use: throw new AppError('Message', statusCode, 'ErrorCode').
 */