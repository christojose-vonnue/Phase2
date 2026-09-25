# Relational Model

* Turn business requirements into a relational model.
* Design the Support Ticket database.

## Requirements

1. Model users, customers, tickets, comments, categories, assignments and status history.
2. Create an ER diagram and initial CREATE TABLE statements.

## Entities

| Entity | Task |
|-------| -------------------------------------------|
| Users | They solve the tickets raised by customers |
| Customer | They raise the tickets as they have issues |
| Tickets  | Actual Object with a unique id, category and description or comment |
| Status history | Each ticket will have a history | 
| Assignments  | Assignment History of each ticket |
| Categories | Available Categories the Ticket can be issued |

## Relations

### User

- Each User can have many Customers but a customer can at a time be assigned to only one user
-  Each User can have many Tickets but a ticket can at a time be assigned to only one user

### Customer

- A customer can at a time be associated with one User
- A customer can raise many tickets 

### Ticket

- Each Ticket has a unique id, a unique Customer and a Single user at a time
- Each user will have a Status history and assignments (To track the history)
- Each Ticket will have a unique **valid** category 

### Status History

- Every time status of any ticket changes, that is logged in the History
- Each log is a unique status id, **valid** ticket id, old status, new status

### Assignments

- Every time assigne of any ticket changes, that is logged in the History
- Each log is a unique assigne id, **valid** ticket id, old **valid** user, new **valid** user

## Assumptions

1. We assume that a ticket can be only allocated to one user at a time.
2. A ticket can be only assigned to one category and it can be changed after it is issued
3. Comments are a nullable **attribute** in a ticket and not a entity

### Naming Conventions

2. Userid is a `3-Digit-NUMBER` from **100** to **200**
3. Customerid is a `3-Digit-NUMBER` from **300** to **999**
4. Ticketid is a `4-Digit-NUMBER` from **1000** to **9999**
5. Statusid is a `5-Digit-NUMBER` from **10000** to **50000**
6. Assignment_id is a `5-Digit-NUMBER` from **50001** to **99999**
6. Any user can be assigned to any category
7. category_id is a character from `A` to `Z`