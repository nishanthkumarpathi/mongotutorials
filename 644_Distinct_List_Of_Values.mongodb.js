// You want to query a collection of people where each document contains data on one or
// more languages spoken by the person. The query result should be an
// alphabetically sorted list of unique languages that a developer can subsequently use to
// populate a list of values in a user interface's drop-down widget.

// This example is the equivalent of a SELECT DISTINCT statement in SQL.

const database = "studentsdb";
use(database);

// Define the pipeline
var pipeline = [
  // Unpack each language field which may be an array or a single value
  {
    $unwind: {
      path: "$language",
    },
  },

  // Group by language
  {
    $group: {
      _id: "$language",
    },
  },

  // Sort languages alphabetically
  {
    $sort: {
      _id: 1,
    },
  },

  // Change _id field's name to 'language'
  {
    $set: {
      language: "$_id",
      _id: "$$REMOVE",
    },
  },
];

// Execute the aggregation and print the result
var result = db.persons.aggregate(pipeline);
printjson(result); // MongoDB Shell script output
result; // VSCode MongoDB Playground output
