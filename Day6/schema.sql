CREATE TABLE customer (
    customer_id NUMERIC(3,0) PRIMARY KEY,
    customer_name VARCHAR(30) NOT NULL,
    CHECK (customer_id  BETWEEN 299 AND 1000)
);

CREATE TABLE category (
    category_id CHAR(1) PRIMARY KEY,
    category_name VARCHAR(20) NOT NULL
);

CREATE TABLE user_table (
    user_table_id NUMERIC(3,0) PRIMARY KEY,
    user_table_name VARCHAR(30) NOT NULL,
    CHECK (user_table_id  BETWEEN 99 AND 300)
);

CREATE TABLE ticket (
    ticket_id NUMERIC(4,0) PRIMARY KEY,
    category_id CHAR(1) REFERENCES category,
    user_ticket_id NUMERIC(3,0) REFERENCES user_table,
    customer_id NUMERIC(3,0) REFERENCES customer,
    comment VARCHAR(255)
);

CREATE TABLE Status_History (
    status_id NUMERIC(5,0) PRIMARY KEY,
    ticket_id NUMERIC(4,0) REFERENCES ticket,
    old_status VARCHAR(10),
    new_status VARCHAR(10) NOT NULL,
    CHECK (status_id  BETWEEN 9999 AND 50001)
);

CREATE TABLE Assignment (
    assignment_id NUMERIC(5,0) PRIMARY KEY,
    ticket_id NUMERIC(4,0) REFERENCES ticket,
    old_user_id VARCHAR(10),
    new_user_id VARCHAR(10) NOT NULL,
    CHECK (assignment_id  BETWEEN 50000 AND 100000)
);


/*
support_ticket=# \dt
               List of relations
 Schema |      Name      | Type  |    Owner     
--------+----------------+-------+--------------
 public | assignment     | table | christo.jose
 public | category       | table | christo.jose
 public | customer       | table | christo.jose
 public | status_history | table | christo.jose
 public | ticket         | table | christo.jose
 public | user_table     | table | christo.jose
(6 rows)

support_ticket=# \d customer
                        Table "public.customer"
    Column     |         Type          | Collation | Nullable | Default 
---------------+-----------------------+-----------+----------+---------
 customer_id   | numeric(3,0)          |           | not null | 
 customer_name | character varying(30) |           | not null | 
Indexes:
    "customer_pkey" PRIMARY KEY, btree (customer_id)
Check constraints:
    "customer_customer_id_check" CHECK (customer_id >= 299::numeric AND customer_id <= 1000::numeric)
Referenced by:
    TABLE "ticket" CONSTRAINT "ticket_customer_id_fkey" FOREIGN KEY (customer_id) REFERENCES customer(customer_id)

support_ticket=# \d assignment
                       Table "public.assignment"
    Column     |         Type          | Collation | Nullable | Default 
---------------+-----------------------+-----------+----------+---------
 assignment_id | numeric(5,0)          |           | not null | 
 ticket_id     | numeric(4,0)          |           |          | 
 old_user_id   | character varying(10) |           |          | 
 new_user_id   | character varying(10) |           | not null | 
Indexes:
    "assignment_pkey" PRIMARY KEY, btree (assignment_id)
Check constraints:
    "assignment_assignment_id_check" CHECK (assignment_id >= 50000::numeric AND assignment_id <= 100000::numeric)
Foreign-key constraints:
    "assignment_ticket_id_fkey" FOREIGN KEY (ticket_id) REFERENCES ticket(ticket_id)

support_ticket=# \d status_history
                    Table "public.status_history"
   Column   |         Type          | Collation | Nullable | Default 
------------+-----------------------+-----------+----------+---------
 status_id  | numeric(5,0)          |           | not null | 
 ticket_id  | numeric(4,0)          |           |          | 
 old_status | character varying(10) |           |          | 
 new_status | character varying(10) |           | not null | 
Indexes:
    "status_history_pkey" PRIMARY KEY, btree (status_id)
Check constraints:
    "status_history_status_id_check" CHECK (status_id >= 9999::numeric AND status_id <= 50001::numeric)
Foreign-key constraints:
    "status_history_ticket_id_fkey" FOREIGN KEY (ticket_id) REFERENCES ticket(ticket_id)

support_ticket=# \d ticket
                          Table "public.ticket"
    Column     |          Type          | Collation | Nullable | Default 
---------------+------------------------+-----------+----------+---------
 ticket_id     | numeric(4,0)           |           | not null | 
 category_id   | character(1)           |           |          | 
 user_table_id | numeric(3,0)           |           |          | 
 customer_id   | numeric(3,0)           |           |          | 
 comment       | character varying(255) |           |          | 
Indexes:
    "ticket_pkey" PRIMARY KEY, btree (ticket_id)
Foreign-key constraints:
    "ticket_category_id_fkey" FOREIGN KEY (category_id) REFERENCES category(category_id)
    "ticket_customer_id_fkey" FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
    "ticket_user_id_fkey" FOREIGN KEY (user_table_id) REFERENCES user_table(user_table_id)
Referenced by:
    TABLE "assignment" CONSTRAINT "assignment_ticket_id_fkey" FOREIGN KEY (ticket_id) REFERENCES ticket(ticket_id)
    TABLE "status_history" CONSTRAINT "status_history_ticket_id_fkey" FOREIGN KEY (ticket_id) REFERENCES ticket(ticket_id)

support_ticket=# \d user_table
                        Table "public.user_table"
     Column      |         Type          | Collation | Nullable | Default 
-----------------+-----------------------+-----------+----------+---------
 user_table_id   | numeric(3,0)          |           | not null | 
 user_table_name | character varying(30) |           | not null | 
Indexes:
    "user_table_pkey" PRIMARY KEY, btree (user_table_id)
Check constraints:
    "user_table_user_table_id_check" CHECK (user_table_id >= 99::numeric AND user_table_id <= 300::numeric)
Referenced by:
    TABLE "ticket" CONSTRAINT "ticket_user_id_fkey" FOREIGN KEY (user_table_id) REFERENCES user_table(user_table_id)

support_ticket=# \d category
                        Table "public.category"
    Column     |         Type          | Collation | Nullable | Default 
---------------+-----------------------+-----------+----------+---------
 category_id   | character(1)          |           | not null | 
 category_name | character varying(20) |           | not null | 
Indexes:
    "category_pkey" PRIMARY KEY, btree (category_id)
Referenced by:
    TABLE "ticket" CONSTRAINT "ticket_category_id_fkey" FOREIGN KEY (category_id) REFERENCES category(category_id)

support_ticket=# \conninfo
You are connected to database "support_ticket" as user "christo.jose" via socket in "/var/run/postgresql" at port "5432".
support_ticket=# 
*/
