const database = "inventory";
const collection = "products";

// Creates a database
use(database);

db.products.find({
  $and: [
    { $or: [{ category: "Electronics" }, { category: "Clothing" }] },
    { $or: [{ price: { $lt: 50 } }, { price: { $gt: 500 } }] },
  ],
});
