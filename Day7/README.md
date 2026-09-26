# Description

The intention is to Apply CRUD operations to the table
●​ Write INSERT, SELECT, UPDATE and DELETE queries.
●​ Use WHERE, ORDER BY and LIMIT.
●​ Apply NOT NULL, UNIQUE, CHECK and foreign keys.

# Version-controlled SQL files

## updated_schema.sql

1. This file has a newer version of tables compared to Day6
2. valid_status_table is added so that only valid_status are entered
3. Current Status is added to ticket table

## trigger.sql

1. On updating the status of ticket, (curr_status) , the plpgsql FUNCTION `status_update_fn()` must run
2. So we create a trigger for it `trg_after_status_update` and this `trigger` will be called if the following condition is met

```sql
AFTER UPDATE OF curr_status ON ticket
FOR EACH ROW
WHEN (OLD.curr_status IS DISTINCT FROM NEW.curr_status)
```

> Similar function and trigger is attached to assignment

## insert.sql

1. Inserts a valid set of seed data to the table
2. This sets stage for update.sql

## update.sql

1. SELECT Queries with WHERE, ORDER BY and LIMIT are used to filter out records
2. UPDATE statments updating status and assignment of tickets are written

## delete.sql

1. CONSTRAINTS are modified to support `safe deletion`
2. Removing a user from user table sets tickets to `299 - Unassigned`
3. Removing a customer deletes all rows referencing that customer


# Best Execution Order

updated_schema.sql --> trigger.sql --> insert.sql --> update.sql --> delete.sql
