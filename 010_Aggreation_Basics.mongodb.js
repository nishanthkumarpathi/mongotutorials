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

// Finds all in stock items and group them by category
db.products.aggregate([
  {
    $match: {
      inStock: true,
    },
  },
  {
    $group: {
      _id: "$category",
      numProducts: {
        $sum: 1,
      },
    },
  },
]);
