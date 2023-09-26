const database = "inventory";
const collection = "products";

// Creates a database
use(database);

db.products.find();

// To update multiple documents, use the updateMany() method.
// This method accepts a filter document, an update document, and an optional options object.

db.products.updateMany(
  {
    category: "Fashion",
  },
  {
    $set: {
      category: "apparel",
    },
  }
);

// Revese the updateMany() method
db.products.updateMany(
  {
    category: "apparel",
  },
  {
    $set: {
      category: "Fashion",
    },
  }
);
