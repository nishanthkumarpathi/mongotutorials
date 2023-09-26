/* Drop the products collection */

const database = "inventory";

// Create database
use(database);

db.products.drop();
