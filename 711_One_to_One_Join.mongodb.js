/*
You want to generate a report to list all shop purchases for 2020, showing the product's name and category for each order, rather than the product's ID. To achieve this, you need to take the customer orders collection and join each order record to the corresponding product record in the products collection. There is a many-to-one relationship between both collections, resulting in a one-to-one join when matching an order to a product.

The join will use a single field comparison between both sides, based on the product...
*/

const database = "studentsdb";

use(database);

// Define the pipeline
var pipeline = [
  // Match only orders made in 2020
  {
    $match: {
      orderdate: {
        $gte: ISODate("2020-01-01T00:00:00Z"),
        $lt: ISODate("2021-01-01T00:00:00Z"),
      },
    },
  },

  // Join "product_id" in orders collection to "id" in products" collection
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "id",
      as: "product_mapping",
    },
  },

  // For this data model, will always be 1 record in right-side
  // of join, so take 1st joined array element
  {
    $set: {
      product_mapping: { $first: "$product_mapping" },
    },
  },

  // Extract the joined embeded fields into top level fields
  {
    $set: {
      product_name: "$product_mapping.name",
      product_category: "$product_mapping.category",
    },
  },

  // Omit unwanted fields
  { $unset: ["_id", "product_id", "product_mapping"] },
];

var result = db.orders.aggregate(pipeline);

result;
