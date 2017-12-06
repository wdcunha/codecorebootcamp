-- -- Create a student record with the following attributes: first_name: John, last_name: Smith, Age: 45, email: john@smith.com registration_date: January 1st 2016, phone_number: 778.778.7787
-- Select that student from the database be fetching the last record
-- Using the id you fetched from the previous exercise, update the age of that record to become 50
-- Delete that record using its id


INSERT INTO students(first_name, last_name, email, registration_date, phone_number) VALUES ('John','Smith','john@smith.com','2016-01-01','778.778.7787');

SELECT MAX(id) FROM students;
SELECT * FROM students WHERE id=667;


UPDATE students
set age = 50
WHERE id=667;

DELETE FROM students WHERE id=667;


-- Select the first 10 students whose ages are between 35 and 45.
-- Select the third set of 10 students whose ages are more than 25 and whose first names contain `th`. The students must be ordered by their id then first name in a descending order.
-- Select the 10 oldest students (You should ignore students with an age that is `NULL`).
-- Select all students with age 45 whose last names contain the letter n.

SELECT * FROM students WHERE age BETWEEN 35 AND 45 LIMIT 10;

SELECT * FROM students WHERE first_name ILIKE '%th%' ORDER BY id ORDER BY first_name LIMIT 10 OFFSET 30;


-- From Jack





/*
Write the following SQL Queries:
*/

/*
1. Create a student record with the following attributes: first_name: John, last_name: Smith, Age: 45, email: john@smith.com registration_date: January 1st 2016, phone_number: 778.778.7787
*/

INSERT INTO students (first_name, last_name, age, email, registration_date, phone_number)
VALUES ('John', 'Smith', 45, 'john@smith.com', '2016-1-1', '778.778.7787')

/*
2. Select that student from the database be fetching the last record
*/

SELECT *
FROM students
ORDER BY id DESC
LIMIT 1

/*
Let's break down the above:
  SELECT *         <-- get me the values for every column (id, first_name, etc)
  FROM students    <-- in the students table
  ORDER BY id DESC <-- the results will be ordered by id, from highest to lowest
  LIMIT 1          <-- limit the number of results to only 1
*/

/*
3. Using the id you fetched from the previous exercise, update the age of that record to become 50
*/

UPDATE students
SET age = 50
WHERE id = (SELECT id FROM students ORDER BY id DESC LIMIT 1)

/*
  UPDATE students    <-- we're updating the students table
  SET age = 50       <-- everywhere that the `WHERE` clause is true, set age to 50
  WHERE id =         <-- set age to 50 where id = (the result of the next SQL statement)
    (SELECT id       <-- this is just the last person query from question 2
    FROM students
    ORDER BY id DESC
    LIMIT 1)         <-- must be of size 1 otherwise `id =` gets confused
                        does NOT work with lists (i.e. id = [1,2] won't work)
*/

/*
4. Delete that record using its id
*/

DELETE FROM students
WHERE id =
  (SELECT id FROM students ORDER BY id DESC LIMIT 1)





  From the students table:

1. Select the first 10 students whose ages are between 35 and 45.

SELECT * FROM students WHERE age BETWEEN 35 AND 45 LIMIT 10;



2. Select the third set of 10 students whose ages are more than 25 and whose first names contain `th`. The students must be ordered by their id then first name in a descending order.

SELECT * FROM students
WHERE age > 25  AND first_name ILIKE '%th%'
ORDER BY id, first_name
DESC LIMIT 10 OFFSET 20;


3. Select the 10 oldest students (You should ignore students with an age that is `NULL`).

SELECT * FROM students
WHERE age IS NOT NULL
ORDER BY age DESC
LIMIT 10;


4. Select all students with age 45 whose last names contain the letter n.

SELECT * FROM students
WHERE age = 45 AND last_name ILIKE '%n%';


From the products table:

5. Select all the products that are on sale.

SELECT * FROM products
WHERE sale_price < price;


6. Select all the products that are on sale and have remaining items in stock ordered by the sale price in ascending order.

SELECT * FROM products
WHERE sale_price < price AND remaining_quantity > 0
ORDER BY sale_price;

* the default is ascending order

7. Select all the products priced between 25 and 50 (regular price) and that are on sale.

SELECT * FROM products
WHERE price BETWEEN 25 AND 50 AND sale_price < price;





-- From the students table:
--
-- Find the number of students named 'Milton'.
SELECT COUNT(first_name) FROM students WHERE ILIKE 'Milton'
-- List the `first_name`s that occur more than once in students, with the number occurrences of that name.
SELECT first_name, COUNT(first_name) FROM students GROUP BY first_name HAVING COUNT(first_name) > 1
-- Refine the above query to list the 20 most common first_names among students, in order first of how common they are, and alphabetically when names have the same count.
SELECT first_name, COUNT(first_name) FROM students GROUP BY first_name HAVING COUNT(first_name) > 1 ORDER BY COUNT(first_name) DESC, first_name  LIMIT 20
-- From the products table:
--
-- Find the most expensive product.
SELECT * FROM products ORDER BY price DESC LIMIT 1;
SELECT * FROM products WHERE price = (SELECT MAX(price) FROM products) LIMIT 1
-- Find the cheapest product that is on sale.
SELECT * FROM products WHERE sale_price < price ORDER BY price LIMIT 1;
-- Find the total value of all inventory in stock (use sale price).
SELECT SUM(sale_price) FROM products



//1
// -- Select the product whose stock has the most value (use sale price)
SELECT * FROM products
WHERE (sale_price * remaining_quantity) IN ( SELECT MAX(sale_price * remaining_quantity) FROM products);
//2
// -- Select the most expensive product whose price is between 25 and 50 with remaining quantity
SELECT * FROM products
WHERE price IN ( SELECT MAX(price) FROM products WHERE (price BETWEEN 25 AND 50) AND remaining_quantity>0);
//3
// -- Select all products on sale with remaining quantity ordered by their price and then their name
SELECT * FROM products
WHERE sale_price < price AND remaining_quantity >0
ORDER BY price, name;
//4
// -- Select the second set 20 results based on the previous query
SELECT * FROM products
WHERE sale_price < price AND remaining_quantity >0
ORDER BY price, name
LIMIT 20 OFFSET 20;
//5
// -- Find the average price of all products
SELECT AVG(price) FROM products;
//6
// -- Find the average price of all products that are on sale
SELECT AVG(price) FROM products
WHERE sale_price < price;
//7
// -- Find the average price of all products that are on sale with remaining quantity
SELECT AVG(price) FROM products
WHERE sale_price < price AND remaining_quantity >0;
//8
// -- Update all the products whose name contains `paper` (case insensitive)
UPDATE products
SET remaining_quantity = 0
WHERE name ILIKE '%paper%';
//9
// Is it possible to revert the query in question 8?
No.
//10
// -- Update all the products whose name contains `paper` or `steel`
// -- to have a remaining quantity of a random number between 5 and 25
UPDATE products
SET remaining_quantity = FLOOR(RANDOM()*(25-5+1))+5
WHERE name ILIKE '%paper%' OR name ILIKE '%steel%';

SELECT * FROM products
WHERE name ILIKE '%paper%' OR name ILIKE '%steel%';
// 11
// --Select the second set of 10 cheapest products with remaining quantity
SELECT * FROM products
WHERE remaining_quantity > 0
ORDER BY price
LIMIT 10 OFFSET 10;
//12
// --Build a query that groups the products by their sale price
// -- and show the number of products in that price and the sum of remaining quantity.
// -- Label the count `product_count`

SELECT sale_price, COUNT(*) AS product_count , SUM(remaining_quantity)
FROM products
GROUP BY sale_price;
//13
// -- [stretch] Update the most expensive product to have double its quantity in a single query

UPDATE products
SET remaining_quantity = remaining_quantity * 2
WHERE price IN (SELECT MAX(price) from products);
// WHERE price = (SELECT MAX(price) from products);

SELECT * FROM products WHERE price IN (SELECT MAX(price) from products);



/*
Write the following SQL Queries:

For the products table:
*/

/*
1. Select the product whose stock has the most value (use sale price)
*/

SELECT *, (sale_price * remaining_quantity) AS stock_value
FROM products
ORDER BY stock_value DESC
LIMIT 1;

/*
2. Select the most expensive product whose price is between 25 and 50 with remaining quantity
*/

SELECT *
FROM products
WHERE remaining_quantity > 0 AND price BETWEEN 25 AND 50
ORDER BY price DESC
LIMIT 1

/*
3. Select all products on sale with remaining quantity ordered by their price and then their name
*/

SELECT *
FROM products
WHERE remaining_quantity > 0 AND price > sale_price
ORDER BY price, name

/*
4. Select the second set 20 results based on the previous query
*/

SELECT *
FROM products
WHERE remaining_quantity > 0 AND price > sale_price
ORDER BY price, name
LIMIT 20
OFFSET 20

/*
5. Find the average price of all products
*/

SELECT AVG(price)
FROM products

/*
6. Find the average price of all products that are on sale
*/

SELECT AVG(price)
FROM products
WHERE price > sale_price

/*
7. Find the average price of all products that are on sale with remaining quantity
*/

SELECT AVG(price)
FROM products
WHERE price > sale_price AND remaining_quantity > 0

/*
8. Update all the products whose name contains `paper` (case insensitive) to have a remaining quantity of 0
*/

UPDATE products
SET remaining_quantity = 0
WHERE name ILIKE '%paper%'

/*
9. Is it possible to revert the query in question 8?
*/

/* NO */

/*
10. Update all the products whose name contains `paper` or `steel` to have a remaining quantity of a random number between 5 and 25
*/

UPDATE products
SET remaining_quantity = FLOOR(RANDOM()*(25-5+1)+5)
WHERE name ILIKE '%paper%' OR name ILIKE '%steel%'

/*
11. Select the second set of 10 cheapest products with remaining quantity
*/

SELECT *
FROM products
WHERE remaining_quantity > 0
ORDER BY price
LIMIT 10
OFFSET 10

/*
12. Build a query that groups the products by their sale price and show the number of products in that price and the sum of remaining quantity. Label the count `product_count`
*/

SELECT COUNT(sale_price) as product_count, sale_price, SUM(remaining_quantity)
FROM products
GROUP BY sale_price

/*
13. [stretch] Update the most expensive product to have double its quantity in a single query
*/

UPDATE products
SET remaining_quantity = remaining_quantity * 2
WHERE id = (SELECT id FROM products ORDER BY price DESC LIMIT 1)

/*
  The solution below works for multiple products with the same price
*/
UPDATE products
SET remaining_quantity = remaining_quantity * 2
WHERE id IN (SELECT MAX(price) FROM products)
