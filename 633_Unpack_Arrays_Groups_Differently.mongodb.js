// You want to generate a retail report to list the total value and
// quantity of expensive products sold (valued over 15 dollars).
// The source data is a list of shop orders,
// where each order contains the set of products purchased as part of the order.

const database = "studentsdb";

use(database);

// Define the pipeline
var pipeline = [
  // Unpack each product from the each order's product as a new separate record
  {
    $unwind: {
      path: "$products",
    },
  },

  // Match only products valued greater than 15.00
  {
    $match: {
      "products.price": {
        $gt: NumberDecimal("15.00"),
      },
    },
  },

  // Group by product type, capturing each product's total value + quantity
  {
    $group: {
      _id: "$products.prod_id",
      product: { $first: "$products.name" },
      total_value: { $sum: "$products.price" },
      quantity: { $sum: 1 },
    },
  },

  // Set product id to be the value of the field that was grouped on
  {
    $set: {
      product_id: "$_id",
    },
  },

  // Omit unwanted fields
  { $unset: ["_id"] },
];

// Execute the aggregation and print the result
var result = db.orders.aggregate(pipeline);

result; // VSCode MongoDB Playground output
