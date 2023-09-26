const database = "inventory";
const collection = "products";
use(database);

db.products.find();

db.products.getIndexes();

// Create a Single Field Index
// Use createIndex() to create a new index in a collection.
// Within the parentheses of createIndex(), include an object that contains the field and sort order.

db.products.createIndex({ category: 1 });

// Create a Unique Single Field Index

// Add {unique:true} as a second, optional, parameter in createIndex() to force uniqueness in the index field values.
// Once the unique index is created, any inserts or updates including duplicated values in the collection for the index field/s will fail.

// email is the best way like uniquekey
db.products.createIndex({ email: 1 }, { unique: true });

// Check if an index is being used on a query
// Use explain() in a collection when running a query to see the Execution plan.
// This plan provides the details of the execution stages (IXSCAN , COLLSCAN, FETCH, SORT, etc.).

// The IXSCAN stage indicates the query is using an index and what index is being selected.
// The COLLSCAN stage indicates a collection scan is perform, not using any indexes.
// The FETCH stage indicates documents are being read from the collection.
// The SORT stage indicates documents are being sorted in memory.
