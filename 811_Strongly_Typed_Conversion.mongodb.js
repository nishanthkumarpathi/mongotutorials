const database = "studentdb";
use(database);

// Define the pipeline
var pipeline = [
  // Convert strings to required types
  {
    $set: {
      order_date: { $toDate: "$order_date" },
      value: { $toDecimal: "$value" },
      "further_info.item_qty": { $toInt: "$further_info.item_qty" },
      "further_info.reported": {
        $switch: {
          branches: [
            {
              case: { $eq: [{ $toLower: "$further_info.reported" }, "true"] },
              then: true,
            },
            {
              case: { $eq: [{ $toLower: "$further_info.reported" }, "false"] },
              then: false,
            },
          ],
          default: { $ifNull: ["$further_info.reported", "$$REMOVE"] },
        },
      },
    },
  },

  // Output to an unsharded or sharded collection
  {
    $merge: {
      into: "orders_typed",
    },
  },
];

// Execute the aggregation and print the result
db.orders.aggregate(pipeline);

var result = db.orders_typed.find();

result;
