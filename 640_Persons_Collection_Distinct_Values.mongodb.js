const databaes = "studentsdb";
const collection = "persons";
use(database);

db.persons.drop();

db.createCollection(collection);

// Insert records into the persons collection
db.persons.insertMany([
  {
    firstname: "Elise",
    lastname: "Smith",
    vocation: "ENGINEER",
    language: "English",
  },
  {
    firstname: "Olive",
    lastname: "Ranieri",
    vocation: "ENGINEER",
    language: ["Italian", "English"],
  },
  {
    firstname: "Toni",
    lastname: "Jones",
    vocation: "POLITICIAN",
    language: ["English", "Welsh"],
  },
  {
    firstname: "Bert",
    lastname: "Gooding",
    vocation: "FLORIST",
    language: "English",
  },
  {
    firstname: "Sophie",
    lastname: "Celements",
    vocation: "ENGINEER",
    language: ["Gaelic", "English"],
  },
  {
    firstname: "Carl",
    lastname: "Simmons",
    vocation: "ENGINEER",
    language: "English",
  },
  {
    firstname: "Diego",
    lastname: "Lopez",
    vocation: "CHEF",
    language: "Spanish",
  },
  {
    firstname: "Helmut",
    lastname: "Schneider",
    vocation: "NURSE",
    language: "German",
  },
  {
    firstname: "Valerie",
    lastname: "Dubois",
    vocation: "SCIENTIST",
    language: "French",
  },
]);

// You want to query a collection of people where each document contains data on one or
// more languages spoken by the person. The query result should be an
// alphabetically sorted list of unique languages that a developer can subsequently use to
// populate a list of values in a user interface's drop-down widget.

// This example is the equivalent of a SELECT DISTINCT statement in SQL.