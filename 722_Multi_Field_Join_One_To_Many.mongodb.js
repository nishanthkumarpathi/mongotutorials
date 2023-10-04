/*
You want to generate a report to list all the orders made for each product in 2020. To achieve this, you need to take a shop's products collection and join each product record to all its orders stored in an orders collection. There is a one-to-many relationship between both collections, based on a match of two fields on each side. Rather than joining on a single field such as product_id (which doesn't exist in this dataset), you need to use two common fields to join (product_name and product_variation).
*/

const database = "studentsdb";
use(database);

// Define the pipeline
var pipeline = [
  // Join by 2 fields in products collection to 2 fields in orders collection
  {
    $lookup: {
      from: "orders",
      let: {
        prdname: "$name",
        prdvartn: "$variation",
      },
      // Embedded pipeline to control how the join is matched
      pipeline: [
        // Join by two fields in each side
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$product_name", "$$prdname"] },
                { $eq: ["$product_variation", "$$prdvartn"] },
              ],
            },
          },
        },

        // Match only orders made in 2020
        {
          $match: {
            orderdate: {
              $gte: ISODate("2020-01-01T00:00:00Z"),
              $lt: ISODate("2021-01-01T00:00:00Z"),
            },
          },
        },

        // Exclude some unwanted fields from the right side of the join
        { $unset: ["_id", "product_name", "product_variation"] },
      ],
      as: "orders",
    },
  },

  // Only show products that have at least one order
  {
    $match: {
      orders: { $ne: [] },
    },
  },

  // Omit unwanted fields
  { $unset: ["_id"] },
];

var result = db.products.aggregate(pipeline);

result;
