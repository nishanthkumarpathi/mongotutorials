const database = "inventory";
const collection = "products";

use(database);

// db.products.find();

// Use cursor.sort() to return query results in a specified order.
// Within the parentheses of sort(), include an object that specifies the field(s) to sort by and the order of the sort.
// Use 1 for ascending order, and -1 for descending order.
// Syntax:
// db.collection.find(<query>).sort(<sort>)

// Sort by a Single Field

db.products.find({ category: "apparel" }).sort({ name: 1 });

// To ensure documents are returned in a consistent order,
// include a field that contains unique values in the sort.
// An easy way to do this is to include the _id field in the sort.

db.products.find({ category: "apparel" }).sort({ name: 1, _id: 1 });

// Use cursor.limit() to return query results in a specified order.
// Within the parentheses of limit(), specify the maximum number of documents to return.
// db.collection.find(<query>).limit(<number>)

db.products.find({ category: "apparel" }).sort({ name: 1, _id: 1 }).limit(1);
