const database = "inventory";
const collection = "products";

// Create database
use(database);

// Create collection
db.createCollection(collection);
