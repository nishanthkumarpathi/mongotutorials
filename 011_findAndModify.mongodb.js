const database = "inventory";
const collection = "products";

// Creates a database
use(database);

// db.products.find();

// The findAndModify() method is used to find and replace a single document in MongoDB.
// It accepts a filter document, a replacement document, and an optional options object.

db.products.findAndModify({
  query: {
    _id: ObjectId("65128be34fea76a1acefcc00"),
  },
  update: {
    $inc: {
      price: 20,
    },
  },
  new: true,
});
