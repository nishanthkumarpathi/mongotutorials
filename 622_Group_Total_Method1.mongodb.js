// You need to generate a report to show what each shop customer purchased in 2020.
// You will group the individual order records by customer,
// capturing each customer's first purchase date, the number of orders they made,
// the total value of all their orders,
// and a list of their order items sorted by date.

const database = "studentsdb";
use(database);

db.orders.find();

var businesslogic = [
  {
    $match: {
      orderdate: {
        $gte: ISODate("2020-01-01T00:00:00Z"),
        $lt: ISODate("2021-01-01T00:00:00Z"),
      },
    },
  },
  {
    $sort: {
      orderdate: 1,
    },
  },
  {
    $group: {
      _id: "$customer_id",
      noOfOrders: {
        $sum: 1,
      },
      totalValue: {
        $sum: "$value",
      },
      firstPurchaseDate: {
        $min: "$orderdate",
      },
      orderItems: {
        $push: {
          orderdate: "$orderdate",
          value: "$value",
        },
      },
    },
  },
];

var result = db.orders.aggregate(businesslogic);
result;
