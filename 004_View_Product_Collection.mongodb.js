const database = "inventory";
const collection = "products";

// Creates a database
use(database);

// Logs the total number of documents in the products collection
console.log(
  `${database}.${collection} has ${db.products.countDocuments()} documents.`
);

// Finds all instock items
db.products.find({ inStock: true });
