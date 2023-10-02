// You need to query a collection of people to find the three youngest individuals,
// who have a job in engineering, sorted by the youngest person first.

const database = "studentsdb";
use(database);

// Define the pipeline
var pipeline = [
  // Match engineers only
  {
    $match: {
      vocation: "ENGINEER",
    },
  },

  // Sort by youngest person first
  {
    $sort: {
      dateofbirth: -1,
    },
  },

  // Only include the first 3 youngest people
  { $limit: 3 },

  // Exclude unrequired fields from each person record
  { $unset: ["_id", "vocation", "address"] },
];

// Execute the aggregation and print the result
var result = db.persons.aggregate(pipeline);

result; // VSCode MongoDB Playground output
