
--  seed data insertion
INSERT INTO customer VALUES (300,'Benison'),(301,'Anjal'),(302,'Hawas'),(303,'Akshay');

--  customer_id | customer_name 
-- -------------+---------------
--          300 | Benison
--          301 | Anjal
--          302 | Hawas
--          303 | Akshay
-- (4 rows)

INSERT INTO category VALUES 
('A','React Bugs'),
('B','CSS Bugs'),
('C','Node Bugs');

--  category_id | category_name 
-- -------------+---------------
--  A           | React Bugs
--  B           | CSS Bugs
--  C           | Node Bugs
-- (3 rows)


INSERT INTO user_table VALUES
('100','Inzam'),
('101','Mushtaq'),
('102','Ajesh');

--  user_table_id | user_table_name 
-- ---------------+-----------------
--            100 | Inzam
--            101 | Mushtaq
--            102 | Ajesh
-- (3 rows)

-- INSERT INTO valid_status_table VALUES
-- ('open'),
-- ('progress'),
-- ('closed');

--  valid_status 
-- --------------
--  open
--  progress
--  closed
-- (3 rows)
INSERT INTO ticket VALUES
('1000','A',100,300,DEFAULT,'This particular hook is failing..'),
('1001','B',100,300,DEFAULT,'onclick() function is not working'),
('1002','B',102,303,DEFAULT,NULL),
('1003','B',101,302,DEFAULT,'Dark Mode Toggle css is not passing Lighthouse scores');
('1004','A',100,300,'open','This particular hook is failing..');


--  ticket_id | category_id | user_ticket_id | customer_id | curr_status |                        comment                        
-- -----------+-------------+----------------+-------------+-------------+-------------------------------------------------------
--       1000 | A           |            100 |         300 | open        | This particular hook is failing..
--       1001 | B           |            100 |         300 | open        | onclick() function is not working
--       1002 | B           |            102 |         303 | open        | 
--       1003 | B           |            101 |         302 | open        | Dark Mode Toggle css is not passing Lighthouse scores
--       1004 | A           |            100 |         300 | open        | This particular hook is failing..
-- (5 rows)

INSERT INTO ticket VALUES
('1005','A',100,300,DEFAULT,NULL),
('1006','C',101,301,DEFAULT,NULL),
('1007','C',102,303,DEFAULT,NULL),
('1008','C',101,302,DEFAULT,'Test suites are failing at health endpoint'),
('1009','B',100,301,DEFAULT,'The grid template syntax has bugs');


