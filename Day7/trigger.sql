-- STEP : 1 CREATE  FUNCTION TO UPDATE STATUS

CREATE FUNCTION status_update_fn()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO status_history
    VALUES (DEFAULT,OLD.ticket_id,OLD.curr_status,NEW.curr_status);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_after_status_update
AFTER UPDATE OF curr_status ON ticket
FOR EACH ROW
WHEN (OLD.curr_status IS DISTINCT FROM NEW.curr_status)
EXECUTE FUNCTION status_update_fn()

-- support_ticket=# \i '/home/christo.jose/Phase-2/Day7/trigger.sql'
-- CREATE FUNCTION
-- CREATE TRIGGER
-- support_ticket=# UPDATE ticket
-- SET curr_status='progress'
-- WHERE ticket_id=1000;
-- UPDATE 1
-- support_ticket=# SELECT * FROM status_history;
--  status_id | ticket_id | old_status | new_status 
-- -----------+-----------+------------+------------
--      10000 |      1000 | open       | progress
-- (1 row)

-- support_ticket=# UPDATE ticket
-- SET curr_status='progress'
-- WHERE ticket_id=1000;
-- UPDATE 1
-- support_ticket=# SELECT * FROM status_history;
--  status_id | ticket_id | old_status | new_status 
-- -----------+-----------+------------+------------
--      10000 |      1000 | open       | progress
-- (1 row)

-- support_ticket=# UPDATE ticket
-- SET curr_status='closed'
-- WHERE ticket_id=1000;
-- UPDATE 1
-- support_ticket=# SELECT * FROM status_history;
--  status_id | ticket_id | old_status | new_status 
-- -----------+-----------+------------+------------
--      10000 |      1000 | open       | progress
--      10001 |      1000 | progress   | closed
-- (2 rows)


--  CREATE FUNCTION

CREATE FUNCTION assignment_update_fn()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO assignment VALUES
    (DEFAULT,OLD.ticket_id,OLD.user_ticket_id,NEW.user_ticket_id);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql; 

-- CREATE THE TRIGGER USING THIS FUNCTION

CREATE TRIGGER trg_after_assignment_update
AFTER UPDATE OF user_ticket_id ON ticket
FOR EACH ROW
WHEN (OLD.user_ticket_id IS DISTINCT FROM NEW.user_ticket_id)
EXECUTE FUNCTION assignment_update_fn()