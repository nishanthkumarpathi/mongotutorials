const database = "inventory";
const collection = "products";

// Creates a database
use(database);

// Finds all instock items
db.products.find({ inStock: true });

// Finding Documents by Using Comparison Operators
// Review the following comparison operators: $gt, $lt, $lte, and $gte.

// $gt
// Use the $gt operator to match documents with a field greater than the given value. For example:

db.products.find({ price: { $gt: 100 } });

// $lt
// Use the $lt operator to match documents with a field less than the given value. For example:

db.products.find({ price: { $lt: 100 } });

// $lte
// Use the $lte operator to match documents with a field less than or equal to the given value. For example:

db.products.find({ price: { $lte: 100 } });

// $gte
// Use the $gte operator to match documents with a field greater than or equal to the given value. For example:

db.products.find({ price: { $gte: 100 } });
