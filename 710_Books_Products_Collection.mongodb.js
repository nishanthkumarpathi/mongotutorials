const databaes = "studentsdb";
const collection1 = "products";
const collection2 = "orders";
use(database);

db.products.drop();

db.createCollection(collection1);
db.createCollection(collection2);

// Create index for a products collection
db.products.createIndex({ id: 1 });

// Insert 4 records into the products collection
db.products.insertMany([
  {
    id: "a1b2c3d4",
    name: "Asus Laptop",
    category: "ELECTRONICS",
    description: "Good value laptop for students",
  },
  {
    id: "z9y8x7w6",
    name: "The Day Of The Triffids",
    category: "BOOKS",
    description: "Classic post-apocalyptic novel",
  },
  {
    id: "ff11gg22hh33",
    name: "Morphy Richardds Food Mixer",
    category: "KITCHENWARE",
    description: "Luxury mixer turning good cakes into great",
  },
  {
    id: "pqr678st",
    name: "Karcher Hose Set",
    category: "GARDEN",
    description: "Hose + nosels + winder for tidy storage",
  },
]);

// Create index for a orders collection
db.orders.createIndex({ orderdate: -1 });

// Insert 4 records into the orders collection
db.orders.insertMany([
  {
    customer_id: "elise_smith@myemail.com",
    orderdate: ISODate("2020-05-30T08:35:52Z"),
    product_id: "a1b2c3d4",
    value: NumberDecimal("431.43"),
  },
  {
    customer_id: "tj@wheresmyemail.com",
    orderdate: ISODate("2019-05-28T19:13:32Z"),
    product_id: "z9y8x7w6",
    value: NumberDecimal("5.01"),
  },
  {
    customer_id: "oranieri@warmmail.com",
    orderdate: ISODate("2020-01-01T08:25:37Z"),
    product_id: "ff11gg22hh33",
    value: NumberDecimal("63.13"),
  },
  {
    customer_id: "jjones@tepidmail.com",
    orderdate: ISODate("2020-12-26T08:55:46Z"),
    product_id: "a1b2c3d4",
    value: NumberDecimal("429.65"),
  },
]);

/*
You want to generate a report to list all shop purchases for 2020, showing the product's name and category for each order, rather than the product's ID. To achieve this, you need to take the customer orders collection and join each order record to the corresponding product record in the products collection. There is a many-to-one relationship between both collections, resulting in a one-to-one join when matching an order to a product.

The join will use a single field comparison between both sides, based on the product...
*/