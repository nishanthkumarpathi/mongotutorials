const database = "inventory";
const collection = "products";

// Creates a database
use(database);

// Finds all instock items
db.products.find({ inStock: true });

// Find a Document with Equality
//  When given equality with an _id field, the find() command will return the specified document that matches the _id. Here's an example:
db.products.find({ _id: ObjectId("651122384d85192118444843") });

// Find a Document by Using the $in Operator
// Use the $in operator to select documents where the value of a field equals any value in the specified array. Here's an example:
db.products.find({ colors: { $in: ["Black", "White"] } });
