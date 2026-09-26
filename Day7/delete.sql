-- Delete operations in tables with referential integrity will be blocked by default

DELETE FROM Assignment WHERE assignment_id=50000;

-- The primary key assigment _id is not refernced anywere
-- So this delete will not throw error

-- DELETE FROM customer WHERE customer_id=300;
-- THIS WILL THROW error

-- So we have two options
-- 1. ON DELETE  CASCADE
-- 2. ON DELETE SET DEFAULT

-- WE SHOULD HAVE SET THESE OPTIONS WHILE CREATING TABLE, 
-- So now we have to alter the table

-- 1. When a user or mentor is deleted we set to default 
-- 2. When a customer is deleted we will delete all records on cascade

-- 1. We need a default value
INSERT INTO user_table VALUES (299,'Not Assigned');
ALTER TABLE ticket ALTER COLUMN user_ticket_id SET DEFAULT 299;

-- We cannot directly add that constraint on one go
ALTER TABLE ticket 
DROP CONSTRAINT ticket_user_ticket_id_fkey;

-- So we drop that constraint and we add a new one
ALTER TABLE ticket
ADD CONSTRAINT ticket_user_ticket_id_fkey
FOREIGN KEY (user_ticket_id)
REFERENCES user_table(user_table_id)
ON DELETE SET DEFAULT;

-- Now when a user is deleted , the default value would be 299



-------------------------
-- BEFORE DELETE
-- support_ticket=# SELECT * FROM ticket;
--  ticket_id | category_id | user_ticket_id | customer_id | curr_status |                        comment                        
-- -----------+-------------+----------------+-------------+-------------+-------------------------------------------------------
--       1001 | B           |            100 |         300 | open        | onclick() function is not working
--       1003 | B           |            101 |         302 | open        | Dark Mode Toggle css is not passing Lighthouse scores
--       1004 | A           |            100 |         300 | open        | This particular hook is failing..
--       1000 | A           |            100 |         300 | closed      | This particular hook is failing..
--       1002 | C           |            101 |         303 | open        | Express ENDPOINTS are throwing Errors
--       1005 | A           |            100 |         300 | open        | 
--       1006 | C           |            101 |         301 | open        | 
--       1007 | C           |            102 |         303 | open        | 
--       1008 | C           |            101 |         302 | open        | Test suites are failing at health endpoint
--       1009 | B           |            100 |         301 | open        | The grid template syntax has bugs
-- (10 rows)

---------------------------

DELETE FROM user_table WHERE user_ticket_id=100;

-- support_ticket=# SELECT * FROM ticket;
--  ticket_id | category_id | user_ticket_id | customer_id | curr_status |                        comment                        
-- -----------+-------------+----------------+-------------+-------------+-------------------------------------------------------
--       1003 | B           |            101 |         302 | open        | Dark Mode Toggle css is not passing Lighthouse scores
--       1002 | C           |            101 |         303 | open        | Express ENDPOINTS are throwing Errors
--       1006 | C           |            101 |         301 | open        | 
--       1007 | C           |            102 |         303 | open        | 
--       1008 | C           |            101 |         302 | open        | Test suites are failing at health endpoint
--       1001 | B           |            299 |         300 | open        | onclick() function is not working
--       1004 | A           |            299 |         300 | open        | This particular hook is failing..
--       1000 | A           |            299 |         300 | closed      | This particular hook is failing..
--       1005 | A           |            299 |         300 | open        | 
--       1009 | B           |            299 |         301 | open        | The grid template syntax has bugs
-- (10 rows)

---------------------------------------------------------
---------------------------------------------------------
---------------------------------------------------------

-- NOW WE APPLY THIS FOR CUSTOMER

ALTER TABLE ticket
DROP CONSTRAINT ticket_customer_id_fkey;

ALTER TABLE ticket
ADD CONSTRAINT ticket_customer_id_fkey
FOREIGN KEY(customer_id )
REFERENCES customer(customer_id)
ON DELETE CASCADE;

-- We are deleting all records of customer 300

-- But at this point ticket_id is refernceed by child tables assignment and status_history
-- So for cascade update we DROP AND ADD new constraints

-- 1. Fix the assignment table constraint
ALTER TABLE assignment
DROP CONSTRAINT assignment_ticket_id_fkey;

ALTER TABLE assignment
ADD CONSTRAINT assignment_ticket_id_fkey
FOREIGN KEY (ticket_id)
REFERENCES ticket(ticket_id)
ON DELETE CASCADE;

-- 2. Fix the status_history table constraint
ALTER TABLE status_history
DROP CONSTRAINT status_history_ticket_id_fkey;

ALTER TABLE status_history
ADD CONSTRAINT status_history_ticket_id_fkey
FOREIGN KEY (ticket_id)
REFERENCES ticket(ticket_id)
ON DELETE CASCADE;

DELETE FROM customer WHERE customer_id=300;

--  ticket_id | category_id | user_ticket_id | customer_id | curr_status |                        comment                        
-- -----------+-------------+----------------+-------------+-------------+-------------------------------------------------------
--       1003 | B           |            101 |         302 | open        | Dark Mode Toggle css is not passing Lighthouse scores
--       1002 | C           |            101 |         303 | open        | Express ENDPOINTS are throwing Errors
--       1006 | C           |            101 |         301 | open        | 
--       1007 | C           |            102 |         303 | open        | 
--       1008 | C           |            101 |         302 | open        | Test suites are failing at health endpoint
--       1009 | B           |            299 |         301 | open        | The grid template syntax has bugs
-- (6 rows)
