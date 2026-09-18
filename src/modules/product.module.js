/**
 * @instructions
 * 1. Import 'db' from config/firebase.js.
 * 2. Create and export the following pure functions for the 'PRODUCT' collection:
 *    - getAllProducts(): Fetches all products.
 *    - getProductById(prodId): Fetches a specific product by ID.
 *    - getProductByName(productName): Queries a product by its exact 'Name'.
 *    - getProductsByCategory(catId): Queries products where 'Cat_Ref' matches the given category ID.
 *    - getProductsByRestaurant(restId): Queries products where the 'Restaurant_Refs' array contains the given restId.
 *    - getProductsByPriceRange(minPrice, maxPrice): Queries products where 'Price' is between minPrice and maxPrice.
 * 3. Return clean arrays/objects.
 */