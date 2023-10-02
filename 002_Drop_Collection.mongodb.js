/* Drop the products collection */

const database = "inventory";

// Create database
use(database);

// db.products.drop();

// print all names key from all docs
db.products.find({}, { name: 1, _id: 0 });