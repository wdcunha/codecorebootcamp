SELECT * FROM students
INNER JOIN projects ON students.id = projects.student_id;




SELECT * FROM students
INNER JOIN projects ON students.id = projects.student_id
ORDER BY students.id DESC;



SELECT students.id, first_name, COUNT(*) as project_count
FROM students
INNER JOIN projects ON students.id = projects.student_id
GROUP BY students.id
ORDER By project_count DESC;



SELECT * FROM  students
INNER JOIN enrolments ON students.id = enrolments.student_id



SELECT * FROM  students
INNER JOIN enrolments ON students.id = enrolments.student_id
INNER JOIN courses ON enrolments.course_id = courses.id;



SELECT * FROM students
INNER JOIN enrolments ON students.id = enrolments.student_id
INNER JOIN courses ON enrolments.course_id = courses.id
WHERE courses.title = 'Up-sized hybrid project';
-- you can use aliases for when the queries get larger
SELECT * FROM students AS s
INNER JOIN enrolments AS e ON s.id = e.student_id
INNER JOIN courses AS c ON e.course_id = c.id
WHERE c.title = 'Up-sized hybrid project';


-- select students that don't have projects
SELECT * FROM  students
LEFT JOIN projects on students.id = projects.student_id
WHERE projects.student_id IS NULL;




SELECT course_id, AVG(score)
FROM students
INNER JOIN enrolments on students.id = enrolments.student_id
INNER JOIN courses on enrolments.course_id = courses.id
GROUP BY course_id
ORDER BY avg DESC


SELECT courses.id, title, AVG(score)
FROM enrolments
INNER JOIN courses on enrolments.course_id = courses.id
GROUP BY courses.id



SELECT title, COUNT(*)
FROM enrolments
INNER JOIN courses on enrolments.course_id = courses.id
GROUP BY title;



SELECT title, COUNT(*)
FROM enrolments
LEFT JOIN courses on enrolments.course_id = courses.id
GROUP BY title
ORDER BY count DESC



SELECT courses.id, title, COUNT(enrolments.student_id)
FROM enrolments
LEFT JOIN courses on enrolments.course_id = courses.id
GROUP BY courses.id
ORDER BY count DESC
