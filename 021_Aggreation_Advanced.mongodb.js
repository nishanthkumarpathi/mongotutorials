const database = "inventory";
const collection = "products";

// Creates a database
use(database);

db.products.find();

// The $project stage specifies the fields of the output documents.
// 1 means that the field should be included, and 0 means that the field should be supressed.
// The field can also be assigned a new value.
// Synatx
/*
{
    $project: {
        state:1, 
        zip:1,
        population:"$pop",
        _id:0
    }
}
*/

// db.products.aggregate([
//   {
//     $project: {
//       name: 1,
//       price: 1,
//       category: 1,
//       description: 1,
//       inStock: 1,
//       colors: 1,
//       _id: 0,
//     },
//   },
// ]);

// $set
// The $set stage creates new fields or changes the value of existing fields,
// and then outputs the documents with the new fields.
// Syntax
/*
{
    $set: {
        place: {
            $concat:["$city",",","$state"]
        },
        pop:10000
     }
  }
*/

// TODO: May not Work

db.products.aggregate([
  {
    $set: {
      discountedPrice: {
        $subtract: ["$price", 50],
      },
    },
  },
]);
