// Aggregation: Collection and summary of data
// Stage: One of the built-in methods that can be completed on the data, but does not permanently alter it
// Aggregation pipeline: A series of stages completed on the data in order

/* 
Structure of an Aggregation Pipeline

db.collection.aggregate([
    {
        $stage1: {
            { expression1 },
            { expression2 }...
        },
        $stage2: {
            { expression1 }...
        }
    }
])
*/

const database = "inventory";
const collection = "products";

// Creates a database
use(database);

// Logs the total number of documents in the products collection

// console.log(
//   `${database}.${collection} has ${db.products.countDocuments()} documents.`
// );

// Finds all instock items
// db.products.find({ inStock: true });

// $match
// The $match stage filters for documents that match specified conditions
/* 
{
  $match: {
     "field_name": "value"
  }
}
*/

// db.products.aggregate([
//   {
//     $match: {
//       inStock: true,
//     },
//   },
// ]);

// $group
// The $group stage groups documents by a group key.

/*
{
  $group:
    {
      _id: <expression>, // Group key
      <field>: { <accumulator> : <expression> }
    }
 }
*/

// Finds all in stock items and group them by category
// db.products.aggregate([
//   {
//     $match: {
//       inStock: true,
//     },
//   },
//   {
//     $group: {
//       _id: "$category",
//       numProducts: {
//         $sum: 1,
//       },
//     },
//   },
// ]);

// ------CONVERTING INTO PIPELINE FORMAT------
var pipeline = [
  {
    $match: {
      inStock: true,
    },
  },
  {
    $group: {
      _id: "$category",
      numProducts: {
        $sum: 1,
      },
    },
  },
];

var results = db.products.aggregate(pipeline);
results;
