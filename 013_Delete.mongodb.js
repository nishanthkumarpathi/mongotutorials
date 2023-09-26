const database = "inventory";
const collection = "products";

use(database);

db.products.find();

// Delete One Document
// The following code shows an example of the deleteOne() method:

db.products.deleteOne({
  _id: ObjectId("65128be34fea76a1acefcc00"),
});

// Delete Many Documents
// The following code shows an example of the deleteMany() method:
db.products.deleteMany({
  category: "apparel",
});
