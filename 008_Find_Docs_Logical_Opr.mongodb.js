const database = "inventory";
const collection = "products";

// Creates a database
use(database);

// Find a Document by Using Implicit $and
// Use implicit $and to select documents that match multiple expressions. For example:
db.products.find({ $and: [{ colors: "Black" }, { colors: "Red" }] });

// Find a Document by Using the $or Operator
// Use the $or operator to select documents that match at least one of the included expressions. For example:
db.products.find({ $or: [{ colors: "Black" }, { colors: "Red" }] });

// Find a Document by Using the $and Operator
// Use the $and operator to use multiple $or expressions in your query. For example:

// db.routes.find({
//     $and: [
//       { $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }] },
//       { $or: [{ "airline.name": "American Airlines" }, { airplane: 320 }] },
//     ]
//   })
