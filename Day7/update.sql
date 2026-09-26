
-- Trigger is created 

UPDATE ticket
SET curr_status='progress'
WHERE ticket_id='1000';

UPDATE ticket
SET curr_status='closed'
WHERE ticket_id=1000;

UPDATE ticket
SET user_ticket_id=101,comment='Express ENDPOINTS are throwing Errors',category_id='C'
WHERE ticket_id=1002;

-- PLEASE RUN THESE UPDATES AFTER RUNNING TRIGGERS
-- ELSE YOU WILL SEE EMPTY TABLES

SELECT * FROM status_history;
SELECT * FROM assignment;

-- support_ticket=# UPDATE ticket
-- SET user_ticket_id=101,comment='Express ENDPOINTS are throwing Errors',category_id='C'
-- WHERE ticket_id=1002;
-- UPDATE 1
-- support_ticket=# SELECT * FROM assignment;
--  assignment_id | ticket_id | old_user_id | new_user_id 
-- ---------------+-----------+-------------+-------------
--          50000 |      1002 | 102         | 101
-- (1 row)

-- support_ticket=# 

SELECT * FROM ticket WHERE comment IS NOT NULL;


-- Using order by to sort tickets by category
SELECT * FROM ticket WHERE curr_status="open" ORDER BY category_id;
SELECT * FROM ticket WHERE user_ticket_id=100 ORDER BY category_id;

-- # SELECT * FROM ticket WHERE curr_status='open' ORDER BY category_id;
--  ticket_id | category_id | user_ticket_id | customer_id | curr_status |                        comment                        
-- -----------+-------------+----------------+-------------+-------------+-------------------------------------------------------
--       1004 | A           |            100 |         300 | open        | This particular hook is failing..
--       1005 | A           |            100 |         300 | open        | 
--       1009 | B           |            100 |         301 | open        | The grid template syntax has bugs
--       1003 | B           |            101 |         302 | open        | Dark Mode Toggle css is not passing Lighthouse scores
--       1001 | B           |            100 |         300 | open        | onclick() function is not working
--       1006 | C           |            101 |         301 | open        | 
--       1007 | C           |            102 |         303 | open        | 
--       1008 | C           |            101 |         302 | open        | Test suites are failing at health endpoint
--       1002 | C           |            101 |         303 | open        | Express ENDPOINTS are throwing Errors
-- (9 rows)

-- support_ticket=# SELECT * FROM ticket WHERE user_ticket_id=100 ORDER BY category_id;
--  ticket_id | category_id | user_ticket_id | customer_id | curr_status |              comment              
-- -----------+-------------+----------------+-------------+-------------+-----------------------------------
--       1004 | A           |            100 |         300 | open        | This particular hook is failing..
--       1000 | A           |            100 |         300 | closed      | This particular hook is failing..
--       1005 | A           |            100 |         300 | open        | 
--       1001 | B           |            100 |         300 | open        | onclick() function is not working
--       1009 | B           |            100 |         301 | open        | The grid template syntax has bugs
-- (5 rows)

-- support_ticket=# 


-- We want to see the top 5 latest open tickets , SO WE MUST USE LIMIT

SELECT * FROM ticket WHERE curr_status='open' ORDER BY  ticket_id  DESC LIMIT 5;

-- support_ticket=# SELECT * FROM ticket WHERE curr_status='open' ORDER BY ticket_id DESC LIMIT 5;
--  ticket_id | category_id | user_ticket_id | customer_id | curr_status |                  comment                   
-- -----------+-------------+----------------+-------------+-------------+--------------------------------------------
--       1009 | B           |            100 |         301 | open        | The grid template syntax has bugs
--       1008 | C           |            101 |         302 | open        | Test suites are failing at health endpoint
--       1007 | C           |            102 |         303 | open        | 
--       1006 | C           |            101 |         301 | open        | 
--       1005 | A           |            100 |         300 | open        | 
-- (5 rows)


