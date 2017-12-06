CREATE TABLE cars (
  id SERIAL,
  make VARCHAR(50), -- VARCHAR for limited amount of characters (256 max)
  model VARCHAR(50),
  doors INTEGER,
  description TEXT -- TEXT for string with unlimited characters
);

-- DATA TYPES:
  -- INTEGER
  -- VARCHAR
  -- TEXT
  -- DECIMAL
  -- FLOAT
  -- BOOLEAN


-- CRUD

-- CREATE
INSERT INTO students(first_name, last_name, email, phone_number) VALUES ('Paul','Chang','paulchang93@gmail.com','778.991.4976');

-- READ

SELECT * FROM students;

SELECT id, first_name, last_name FROM students ORDER BY id DESC;

SELECT * FROM students WHERE first_name = 'Amir';

SELECT * FROM students WHERE id > 100;

SELECT * FROM students WHERE registration_date >= '2017-07-03';

SELECT * FROM students WHERE first_name = 'Amir' OR first_name = 'John';

SELECT * FROM students WHERE ((first_name = 'Amir' AND last_name = 'Daniel') OR first_name = 'John');

SELECT * FROM students WHERE id > 100 AND id < 200;

SELECT * FROM students WHERE age > 40 OR age < 20;

SELECT * FROM students WHERE age BETWEEN 25 AND 35;

SELECT * FROM students WHERE registration_date IS NULL; -- NULL cannot use = sign 'IS NOT NULL'

SELECT * FROM students WHERE age IS NULL OR age < 20;

SELECT * FROM students WHERE first_name LIKE 'P%'; -- reads all first_name that start with 'P'

SELECT * FROM students WHERE first_name ILIKE 'p%'; -- reads all first_name that start with 'p' case insensitive

SELECT * FROM students WHERE first_name ILIKE '%nn%' OR last_name ILIKE '%nn%';
-- reads all first_name or last_name that contain 'nn'

SELECT * FROM students WHERE age > 30 ORDER BY first_name, last_name;

SELECT * FROM students WHERE age > 30 ORDER BY first_name, last_name LIMIT 50;

SELECT * FROM students WHERE age > 30 ORDER BY first_name, last_name LIMIT 50 OFFSET 50;
-- OFFSET means skip the first 50, and get the next 50

SELECT * FROM students WHERE age > 25  LIMIT 20 OFFSET 20;

SELECT COUNT (*) FROM students WHERE age > 25; -- returns default 'count'

SELECT COUNT (*) as student_count FROM students WHERE age > 25; -- returns as 'student_count'

SELECT SUM(age) FROM students;

SELECT SUM(age)/COUNT(*) FROM students WHERE registration_date > '2017-01-01';

SELECT AVG(age) FROM students WHERE registration_date > '2017-01-01';

SELECT ROUND(AVG(age)) FROM students WHERE registration_date > '2017-01-01';

SELECT MAX(age) FROM students WHERE first_name ILIKE 'j%';


SELECT first_name, COUNT(first_name)
FROM students
GROUP BY first_name
ORDER BY count DESC;

SELECT age, COUNT(*)
FROM students
GROUP BY age
ORDER BY count DESC;

UPDATE students
set registration_date='2017-11-6'
WHERE registration_date IS NULL;

DELETE FROM students WHERE id=653;

-- select first names from the table students and order it by descending number of occurences
SELECT first_name, COUNT(*)
FROM students
GROUP BY first_name
ORDER BY COUNT(*) DESC;


-- select product with lowest price
SELECT PRO_NAME, PRO_PRICE
FROM item_mast
WHERE PRO_PRICE =
(SELECT MIN(PRO_PRICE) FROM item_mast)
