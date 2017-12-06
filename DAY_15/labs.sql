-- Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.
-- Select product titles, product prices and the lowest price they were sold at during the last month.


/*
Write the following SQL Queries:
*/

/*
1. Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.
*/


SELECT orders.id, AVG(line_items.price * line_items.quantity)
FROM orders
INNER JOIN line_items on orders.id = line_items.order_id
WHERE orders.completed_on BETWEEN '2016-01-01' AND '2016-01-30'
GROUP BY orders.id
ORDER BY orders.id


SELECT o.id, AVG(li.quantity * li.price) AS average_line_item
FROM orders as o
INNER JOIN line_items AS li ON o.id = li.order_id
WHERE o.completed_on BETWEEN '2016-01-01' AND '2016-01-30'
GROUP BY o.id
ORDER BY o.id;

/*
2. Select product titles, product prices and the lowest price they were sold at during the last month.
*/


SELECT p.name, p.price, MIN(li.price) AS lowest_price
FROM line_items as li
INNER JOIN products AS p ON li.product_id = p.id
INNER JOIN orders AS o ON li.order_id = o.id
WHERE o.completed_on > CURRENT_DATE - INTERVAL '1 month'
GROUP BY p.id;


SELECT products.name, products.price, MIN(line_items.price) AS lowest_price
FROM line_items
INNER JOIN products ON line_items.product_id = products.id
INNER JOIN orders ON line_items.order_id = orders.id
WHERE orders.completed_on > CURRENT_DATE - INTERVAL '1 month'
GROUP BY products.id


-- Calculate how many items in stock we've ever had for products (remaining or sold) in the database.
-- if total stock
SELECT SUM(remaining_quantity + quantity) FROM line_items
INNER JOIN products ON products.id = line_items.product_id
-- if individual stock
SELECT name, remaining_quantity + quantity AS total_ever FROM line_items
INNER JOIN products ON products.id = line_items.product_id
-- Find the average order total price for all the orders in the system
SELECT AVG(sum)
FROM (SELECT SUM(price * quantity)as sum FROM line_items group by order_id)alias;
--alias mmust be declared but doesn't have any input. it could be any value.


/*
Write the following SQL Queries:
*/

/*
1. Calculate how many items in stock we've ever had for products (remaining or sold) in the database.
*/

SELECT SUM(quantity) + (
  SELECT SUM(remaining_quantity) FROM products
) AS total
FROM line_items;

/*
2. Find the average order total price for all the orders in the system
*/

SELECT AVG(total_price) AS average_order_total
FROM (
  SELECT o.id, SUM(li.price * li.quantity) as total_price
  FROM orders AS o
  INNER JOIN line_items AS li ON li.order_id = o.id
  GROUP BY o.id
) AS average;



-- QUERY 3

/* Cam's Excellent Solutions!!! */

/*
Write the following SQL Queries:
*/

/*
1. Select all the products that have been purchased in the last 12 months.
*/

SELECT p.*
FROM products AS p
INNER JOIN line_items AS li ON p.id = li.product_id
INNER JOIN orders AS o ON o.id = li.order_id
WHERE o.completed_on > CURRENT_DATE - INTERVAL '12 month';


/*
2. Select the top 10 products in terms of last year's gross sales.
*/

SELECT p.*, SUM(li.quantity * li.price) AS sum
FROM products AS p
INNER JOIN line_items AS li ON li.product_id = p.id
INNER JOIN orders AS o ON o.id = li.order_id
WHERE o.completed_on BETWEEN '2016-01-01' AND '2016-12-31'
GROUP BY p.id
ORDER BY sum DESC
LIMIT 10;

/*
3. Select all the products that weren't purchased during the last 12 months.
*/

SELECT *
FROM products AS p
WHERE p.id NOT IN (
  -- the query below selects the product ids of all of the ordered products
  SELECT p.id
  FROM products as p
  INNER JOIN line_items as li ON p.id = li.product_id
  INNER JOIN orders as o ON o.id = li.order_id
  WHERE o.completed_on > CURRENT_DATE - INTERVAL '12 month'
);


-- QUERY 3 (self)
-- 1.

SELECT orders.id, products.name, line_items.order_id
FROM line_items
INNER JOIN products ON products.id = line_items.product_id
INNER JOIN orders ON orders.id = line_items.order_id
WHERE orders.completed_on > CURRENT_DATE - INTERVAL '1 month'
ORDER BY orders.completed_on DESC

-- 2.

SELECT products.name, SUM(line_items.price * line_items.quantity) AS gross_total
FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON orders.id = line_items.order_id
WHERE orders.completed_on BETWEEN '2016-01-01' AND '2016-12-31'
GROUP BY products.id
ORDER BY gross_total DESC LIMIT 10

-- 3.
