const database = "inventory";
const collection = "products";

use(database);

db.products.find();

// Count Documents
// Use db.collection.countDocuments() to count the number of documents that match a query. countDocuments() takes two parameters: a query document and an options document.
// db.collection.countDocuments( <query>, <options> )

// The query selects the documents to be counted.
db.products.countDocuments();

db.products.countDocuments({ category: "apparel" });

// Apply Conditions inside the CountDocuments Method
db.products.countDocuments({ category: "apparel", qty: { $gt: 25 } });
