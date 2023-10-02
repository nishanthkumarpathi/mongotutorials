// You need to generate a report to show what each shop customer purchased in 2020.
// You will group the individual order records by customer,
// capturing each customer's first purchase date, the number of orders they made,
// the total value of all their orders,
// and a list of their order items sorted by date.

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

  // Sort by order date ascending (to pick out 'first_purchase_date' below)
  {
    $sort: {
      orderdate: 1,
    },
  },

  // Group by customer
  {
    $group: {
      _id: "$customer_id",
      first_purchase_date: { $first: "$orderdate" },
      total_value: { $sum: "$value" },
      total_orders: { $sum: 1 },
      orders: { $push: { orderdate: "$orderdate", value: "$value" } },
    },
  },

  // Sort by each customer's first purchase date
  {
    $sort: {
      first_purchase_date: 1,
    },
  },

  // Set customer's ID to be value of the field that was grouped on
  {
    $set: {
      customer_id: "$_id",
    },
  },

  // Omit unwanted fields
  { $unset: ["_id"] },
];

// Execute the aggregation and print the result
var result = db.orders.aggregate(pipeline);

result; // VSCode MongoDB Playground output
