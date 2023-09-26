const database = "inventory";
const collection = "products";

// Creates a database
use(database);

// Find Documents with an Array That Contains a Specified Value
// In the following example, "Black" is not enclosed in square brackets,
// so MongoDB returns all documents within the colors array that contain the specified value.
db.products.find({ colors: "Black" });

// Find a Document by Using the $elemMatch Operator
// Use the $elemMatch operator to find all documents that contain the specified subdocument. For example:
db.products.find({ colors: { $elemMatch: { $eq: "Black" } } });

// Advanced Example, this will not work, as our data is not nested like this.

// db.sales.find({
//     items: {
//       $elemMatch: { name: "laptop", price: { $gt: 800 }, quantity: { $gte: 1 } },
//     },
//   })
