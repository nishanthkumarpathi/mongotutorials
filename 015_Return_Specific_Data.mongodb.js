const database = "inventory";
const collection = "products";

use(database);

db.products.find();

// Add a Projection Document
// To specify fields to include or exclude in the result set, add a projection document as the second parameter in the call to db.collection.find().
// db.collection.find( <query>, <projection> )

// Include a Field
// To include a field, set its value to 1 in the projection document.
// db.collection.find( <query>, { <field> : 1 })

db.products.find({ category: "apparel" }, { name: 1 });

db.products.find({ category: "apparel" }, { name: 1, price: 1 });

// Exclude a Field
// To exclude a field, set its value to 0 in the projection document.
// db.collection.find( <query>, { <field> : 0 })

db.products.find({ category: "apparel" }, { name: 0 });

db.products.find({ category: "apparel" }, { name: 0, price: 0 });
