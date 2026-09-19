/**
 * @instructions
 * 1. Import 'db' from '../../../config/firebase' for write operations.
 * 2. Import 'restaurantModule' from '../../../db_requests_modules/restaurant.module'.
 * 3. Import 'asyncHandler' from '../../../utils/middleware/asyncHandler' and 'AppError' from '../../../utils/middleware/AppError'.
 * 4. Create and export:
 *    - getAllRestaurants(req, res): Check req.query.
 *        * If req.query.name -> call restaurantModule.getRestaurantIdByName().
 *        * Else -> call restaurantModule.getAllRestaurants().
 *    - getRestaurantById(req, res): Call restaurantModule.getRestaurantById(req.params.id).
 *    - createNewRestaurant(req, res): Save payload to 'RESTAURANT' collection.
 *    - updateRestaurant(req, res): Update 'RESTAURANT' where doc id = req.params.id.
 * 5. CRITICAL ERROR HANDLING: 
 *    - DO NOT use try-catch blocks.
 *    - Wrap EVERY exported function with asyncHandler.
 *    - For operational errors, use: throw new AppError('Message', statusCode, 'ErrorCode').
 */