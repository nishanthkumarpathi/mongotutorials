const database = "inventory";
const collection = "products";

// Creates a database
use(database);

// Logs the total number of documents in the products collection
console.log(
  `${database}.${collection} has ${db.products.countDocuments()} documents.`
);


// Finds all documents in the products collection
db.products.find();

// Finds all documents with the name "Dress Shirt"
db.products.find({ name: "Dress Shirt" });


// Finds all instock items
db.products.find({ inStock: true });

// findOne()
// The findOne() method returns the first document that matches the query.
// The findOne() method takes the following parameters:

db.products.findOne({ name: "Dress Shirt" });
