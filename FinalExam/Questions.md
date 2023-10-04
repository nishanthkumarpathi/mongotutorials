# NoSQL Database - Final Exam.

## Questions.

0. Import these JSON files into your customers and orders collections respectively
    - store-customers.json
    - store-orders.json

1. Perform the Basic Queries in the customers collection:

    - Find all customers with a given first name
    - Find all customers with a given favorite category
    - Find all customers with a given favorite category and a given state
    - Find all customers with a given favorite category and a given state, but only return their name and email address
    - Find all customers with a given favorite category and a given state, but only return their name and email address, sorted by name (ascending)
    - Find all customers with a given favorite category and a given state, but only return their name and email address, sorted by name (ascending), and limit the results to 5 documents

2. Perform the Basic Queries in the orders collection:
    - Find all orders with a given status
    - Find all orders with a given status, but only return the order id and the date it was created
    - Find all orders with a given status, but only return the order id and the date it was created, sorted by date (descending)
    - Find all orders with a given status, but only return the order id and the date it was created, sorted by date (descending), and limit the results to 5 documents

3. Perform the Basic Queries in the customers Collection
    - Retrieve all active customers from the collection.
    - Count the number of customers who have placed at least one order.
    - Find all customers who have been customers since before a certain date.( Choose any date you like)
    - Retrieve customers who have a certain number of favorite categories.
    - Find customers who have "food" as one of their favorite categories.
    - Retrieve all customers who have both "food" and "clothing" in their favorite categories.

4. Perform the Basic Queries in the Customers Collection
    - Find all customers from a specific city.
    - Retrieve all customers who have a billing address in a specific state.
    - Find all customers who have placed a specific order using an "$oid".

5. Perform the following queries in the Customers Collection
    - Group customers based on their favorite categories and count them.
    - For each customer, calculate the total number of orders they have placed.
    - Calculate the average number of favorite categories per customer.

6. Return a list of every date in the year 2022, with the total amount of all orders placed on that date, sorted by date (earliest first). You'll need to use a $group in your aggregation

7. Use the aggregate() method with $project to run the following queries in the customers collection:
    - All customers, but shape the output by only returning their name and favorite categories.
    - Same query ... but this time, rename the property favoriteCategories to faves

8. Use the aggregate() method with $project to run the following queries in the customers collection:
    - All customers, but shape the output by only returning their name and the number of favoriteCategories for each
    - The average number of customer favoriteCategories, grouped by the state for their billing address.

    Consider:

    - What happens if a customer document doesn't have the favoriteCategories property?
    - How can you mitigate this issue?

9. Use findOne() to run the following queries:

    - Return the full customer document associated with an order, given an order id
    - Use findOne() to obtain a customer id from an order and then use that to return a customer using  findOne() with that ID. This should be a nested call.

10. Perform the following actions.

    - Delete a customer who is not active and has placed no orders.
    - Remove the phone field from customer documents where the phone number is not available.
