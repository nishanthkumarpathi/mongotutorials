const database = "inventory";
const collection = "products";

// Creates a database
use(database);

db.products.find();

// To replace documents in MongoDB, we use the replaceOne() method. The replaceOne() method takes the following parameters:

// filter: A query that matches the document to replace.
// replacement: The new document to replace the old one with.
// options: An object that specifies options for the update.

db.products.replaceOne(
  {
    _id: ObjectId("65127fc89e87f73b985cc356"),
  },
  {
    name: "Dress Shirt",
    price: 49.95,
    category: "Fashion",
    description: "A stylish dress shirt suitable for formal occasions.",
    inStock: true,
    colors: ["White", "Blue"],
  }
);
