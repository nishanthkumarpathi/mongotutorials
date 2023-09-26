const database = "inventory";
const collection = "products";

// Creates a database
use(database);

// Drops the products collection if it exists
db.products.drop();

// Creates collection
db.createCollection(collection);

// Exercise 1: Create a collection named products

// Seed data, Single document
const productData = {
  name: "Smartphone",
  price: 499.99,
  category: "Electronics",
  description: "A high-end smartphone with advanced features.",
  inStock: true,
  colors: ["Black", "Silver", "Gold"],
};


// Inserts seed data
db.products.insertOne(productData);

// Exercise 2: Insert Multiple Documents
// Seed data
const productsData = [
  {
    name: "Laptop",
    price: 899.95,
    category: "Electronics",
    description: "A powerful laptop for both work and entertainment.",
    inStock: true,
    colors: ["Silver", "Space Gray"],
  },
  {
    name: "Running Shoes",
    price: 89.99,
    category: "Sports",
    description: "Comfortable and lightweight shoes for running and training.",
    inStock: false,
    colors: ["Black", "White", "Red"],
  },
  {
    name: "Wireless Earbuds",
    price: 79.99,
    category: "Electronics",
    description: "True wireless earbuds with noise-cancellation technology.",
    inStock: true,
    colors: ["White", "Black", "Blue"],
  },
  {
    name: "Dress Shirt",
    price: 49.95,
    category: "Fashion",
    description: "A stylish dress shirt suitable for formal occasions.",
    inStock: true,
    colors: ["White", "Blue", "Pink", "Gray"],
  },
  {
    name: "Yoga Mat",
    price: 29.99,
    category: "Sports",
    description: "A non-slip yoga mat for comfortable workouts.",
    inStock: true,
    colors: ["Purple", "Blue", "Green"],
  },
  {
    name: "Coffee Maker",
    price: 69.95,
    category: "Appliances",
    description: "A programmable coffee maker for your daily brew.",
    inStock: false,
    colors: ["Black", "White"],
  },
  {
    name: "Digital Camera",
    price: 349.0,
    category: "Electronics",
    description: "A high-resolution digital camera for capturing memories.",
    availability: {
      inStock: true,
      stockCount: 100, // Example stock count
      warehouseLocation: "New York", // Example location
    },
    specs: {
      resolution: "20MP", // Example resolution
      zoom: "5x Optical Zoom", // Example zoom capability
    },
    colors: ["Black"],
  },
];

// Inserts seed data
db.products.insertMany(productsData);
