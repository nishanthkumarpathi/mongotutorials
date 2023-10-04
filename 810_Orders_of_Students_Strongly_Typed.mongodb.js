// Connect to studentdb and drop orders

const database = "studentdb";
const collection = "orders";

use(database);
db.orders.drop();

// Insert orders documents
db.orders.insertMany([
  {
    customer_id: "elise_smith@myemail.com",
    order_date: "2020-05-30T08:35:52",
    value: "231.43",
    further_info: {
      item_qty: "3",
      reported: "false",
    },
  },
  {
    customer_id: "oranieri@warmmail.com",
    order_date: "2020-01-01T08:25:37",
    value: "63.13",
    further_info: {
      item_qty: "2",
    },
  },
  {
    customer_id: "tj@wheresmyemail.com",
    order_date: "2019-05-28T19:13:32",
    value: "2.01",
    further_info: {
      item_qty: "1",
      reported: "true",
    },
  },
]);
