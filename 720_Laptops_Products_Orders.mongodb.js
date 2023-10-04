const databaes = "studentsdb";
const collection1 = "products";
const collection2 = "orders";
use(database);

db.products.drop();
db.orders.drop();

db.createCollection(collection1);
db.createCollection(collection2);

// Insert 6 records into the products collection
db.products.insertMany([
  {
    name: "Asus Laptop",
    variation: "Ultra HD",
    category: "ELECTRONICS",
    description: "Great for watching movies",
  },
  {
    name: "Asus Laptop",
    variation: "Normal Display",
    category: "ELECTRONICS",
    description: "Good value laptop for students",
  },
  {
    name: "The Day Of The Triffids",
    variation: "1st Edition",
    category: "BOOKS",
    description: "Classic post-apocalyptic novel",
  },
  {
    name: "The Day Of The Triffids",
    variation: "2nd Edition",
    category: "BOOKS",
    description: "Classic post-apocalyptic novel",
  },
  {
    name: "Morphy Richards Food Mixer",
    variation: "Deluxe",
    category: "KITCHENWARE",
    description: "Luxury mixer turning good cakes into great",
  },
  {
    name: "Karcher Hose Set",
    variation: "Full Monty",
    category: "GARDEN",
    description: "Hose + nosels + winder for tidy storage",
  },
]);

// Create index for the orders collection
db.orders.createIndex({ product_name: 1, product_variation: 1 });

// Insert 4 records into the orders collection
db.orders.insertMany([
  {
    customer_id: "elise_smith@myemail.com",
    orderdate: ISODate("2020-05-30T08:35:52Z"),
    product_name: "Asus Laptop",
    product_variation: "Normal Display",
    value: NumberDecimal("431.43"),
  },
  {
    customer_id: "tj@wheresmyemail.com",
    orderdate: ISODate("2019-05-28T19:13:32Z"),
    product_name: "The Day Of The Triffids",
    product_variation: "2nd Edition",
    value: NumberDecimal("5.01"),
  },
  {
    customer_id: "oranieri@warmmail.com",
    orderdate: ISODate("2020-01-01T08:25:37Z"),
    product_name: "Morphy Richards Food Mixer",
    product_variation: "Deluxe",
    value: NumberDecimal("63.13"),
  },
  {
    customer_id: "jjones@tepidmail.com",
    orderdate: ISODate("2020-12-26T08:55:46Z"),
    product_name: "Asus Laptop",
    product_variation: "Normal Display",
    value: NumberDecimal("429.65"),
  },
]);

/*
You want to generate a report to list all the orders made for each product in 2020. To achieve this, you need to take a shop's products collection and join each product record to all its orders stored in an orders collection. There is a one-to-many relationship between both collections, based on a match of two fields on each side. Rather than joining on a single field such as product_id (which doesn't exist in this dataset), you need to use two common fields to join (product_name and product_variation).
*/