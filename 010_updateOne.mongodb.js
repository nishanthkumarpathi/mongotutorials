const database = "inventory";
const collection = "products";

// Creates a database
use(database);

db.products.find();

// The updateOne() method accepts a filter document, an update document, and an optional options object.
// MongoDB provides update operators and options to help you update documents.
// In this section, we'll cover three of them: $set, upsert, and $push.

// $set
// The $set operator replaces the value of a field with the specified value.
// If the field does not exist, $set will add a new field with the specified value.
// If you do not use $set, the update operation will replace the entire document.
// For example, the following operation will replace the entire document:

db.products.updateOne(
  {
    _id: ObjectId("65127fc89e87f73b985cc356"),
  },
  {
    $set: {
      price: 111.95,
    },
  }
);

// upsert
// The upsert option creates a new document if no documents match the filtered criteria. Here's an example:

db.products.updateOne(
  {
    name: "Printer",
  },
  {
    $set: {
      price: 111.95,
    },
  },
  {
    upsert: true,
  }
);

// $push
// The $push operator adds a new value to the hosts array field.

db.products.updateOne(
  {
    name: "Printer",
  },
  {
    $push: {
      location: "Bahrain",
    },
  }
);
