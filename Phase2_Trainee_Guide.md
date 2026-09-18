# **Day 1: Node.js runtime and project setup** 

_Create a production-style TypeScript Node.js workspace._ 

Today’s goal 

Understand the Node.js runtime and create a repeatable project setup that another developer can run. 

## **What you should know by the end of today** 

- Explain Node.js versus browser JavaScript. 

- Use npm scripts, environment variables and command-line arguments. 

- Compile and run TypeScript in strict mode. 

## **Resources to use** 

- <u>Node.js Learn — Read the introduction and command-line sections.</u> 

- <u>TypeScript Handbook</u> — Review modules, strict typing and project configuration. 

## **Main hands-on task** 

Build a System Information CLI that accepts commands and prints runtime information. 

### **Functional requirements** 

- Commands for version, operating system, memory, current directory and environment. 

- Helpful output for invalid commands. 

- README with install, development, build and test commands. 

### **Engineering expectations** 

- Use strict TypeScript. 

- Separate command parsing from data collection. 

- Add at least five Jest tests. 

### **Suggested implementation order** 

1. Initialise the repository and TypeScript configuration. 

2. Create npm scripts. 

3. Implement one command at a time. 

4. Extract reusable functions. 

5. Add tests and documentation. 

Stretch task 

Add a --json option that prints machine-readable output. 

# **Day 2: Files, promises and error handling** 

_Build a persistent command-line application._ 

Today’s goal 

Use async/await correctly and keep storage concerns separate from business logic. 

## **What you should know by the end of today** 

- Read and write files using promise-based APIs. 

- Handle malformed or missing data safely. 

- Avoid unhandled promise rejections. 

## **Resources to use** 

- <u>Node.js File System</u> — Use the promise-based API. 

- <u>Jest — Review asynchronous testing.</u> 

## **Main hands-on task** 

Build a file-based Task Manager CLI. 

### **Functional requirements** 

- Add, list, complete, delete and filter tasks. 

- Persist tasks in JSON. 

- Recover gracefully when the file does not yet exist. 

### **Engineering expectations** 

- No synchronous file APIs. 

- Repository/storage functions must be separate from commands. 

- Include tests for failure cases. 

### **Suggested implementation order** 

1. Define the Task type. 

2. Build storage functions. 

3. Build service functions. 

4. Add CLI commands. 

5. Test malformed data and missing IDs. 

Stretch task Support exporting filtered tasks to a second JSON file. 

# **Day 3: HTTP and REST fundamentals** 

_Expose task data through an HTTP API._ 

Today’s goal Understand requests, responses, status codes and REST resource design. 

## **What you should know by the end of today** 

- Explain HTTP method and status-code choices. 

- Parse route parameters and JSON bodies. 

- Return consistent JSON errors. 

## **Resources to use** 

- <u>Node.js HTTP</u> — Review server, request and response APIs. 

- <u>MDN HTTP overview</u> — Use as a protocol reference. 

## **Main hands-on task** 

Convert the task manager into a Node.js HTTP API without Express. 

### **Functional requirements** 

- GET /tasks, GET /tasks/:id, POST /tasks, PATCH /tasks/:id and DELETE /tasks/:id. 

- Correct status codes for success, validation failure and missing resources. 

### **Engineering expectations** 

- Set Content-Type correctly. 

- Do not duplicate response-writing logic. 

- Validate all input before saving. 

### **Suggested implementation order** 

1. Write the API contract first. 

2. Build response helpers. 

3. Implement routing. 

4. Connect the service layer. 

5. Test with an API client and Jest. 

#### Stretch task 

Add filtering by completion status through query parameters. 

# **Day 4: Express and layered architecture** 

_Refactor the API into a maintainable Express application._ 

Today’s goal Learn routing, middleware and separation of responsibilities. 

## **What you should know by the end of today** 

- Use Express routers and middleware. 

- Separate routes, controllers, services and repositories. 

- Handle errors centrally. 

## **Resources to use** 

- <u>Express routing — Read route methods and route parameters.</u> 

- <u>Express middleware</u> — Read application- and router-level middleware. 

## **Main hands-on task** 

Migrate the Task API to Express and restructure the codebase. 

### **Functional requirements** 

- Preserve all existing endpoints. 

- Add request logging and a health endpoint. 

- Add centralised not-found and error handlers. 

### **Engineering expectations** 

- Routes contain no business logic. 

- Controllers do not access files directly. 

- Avoid any unless explained. 

### **Suggested implementation order** 

1. Create the folder structure. 

2. Move repository and service code first. 

3. Create controllers and routes. 

Add middleware. 

4. Run all existing tests. 

Stretch task Add a request ID to every response. 

# **Day 5: Backend assessment 1** 

_Demonstrate independent Node.js API development._ 

Today’s goal Build a Support Ticket API from a written requirement within one day. 

## **What you should know by the end of today** 

- Translate a requirement into endpoints and data structures. 

- Plan before coding. 

- Deliver tested, documented functionality. 

## **Resources to use** 

- <u>Node.js Learn — Use as reference only.</u> 

- <u>Express guide — Use as reference only.</u> 

## **Main hands-on task** 

Build a file-backed Support Ticket API. 

### **Functional requirements** 

- Create, list, view, update status, assign and delete tickets. 

- Validate title, description, priority, status and assignee. 

- Provide API examples in the README. 

### **Engineering expectations** 

- Work independently. 

- Commit in logical increments. 

- Include unit and endpoint tests. 

### **Suggested implementation order** 

1. Read and clarify the requirement. 

2. Write endpoint and type definitions. 

3. Implement the smallest complete flow. 

4. Add remaining endpoints. 

5. Test and document. 

# **Day 6: Relational database modelling** 

_Turn business requirements into a relational model._ 

Today’s goal 

Design a database that protects data quality through relationships and constraints. 

## **What you should know by the end of today** 

- Identify entities and relationships. 

- Choose primary and foreign keys. 

- Explain one-to-many and many-to-many models. 

## **Resources to use** 

- <u>PostgreSQL tutorial — Read concepts and getting started.</u> 

## **Main hands-on task** 

Design the Support Ticket database. 

### **Functional requirements** 

- Model users, customers, tickets, comments, categories, assignments and status history. 

- Create an ER diagram and initial CREATE TABLE statements. 

### **Engineering expectations** 

- Use consistent naming. 

- Record assumptions. 

- Avoid storing repeated derived data without justification. 

### **Suggested implementation order** 

1. Extract nouns and business rules. 

2. Identify relationships. 

3. Draw the model. 

4. Review with a peer. 

5. Create tables in PostgreSQL. 

Stretch task 

Add a labels/tags model without storing comma-separated values. 

# **Day 7: SQL CRUD and constraints** 

_Create and manipulate reliable relational data._ 

Today’s goal Practise SQL statements and enforce business rules at database level. 

## **What you should know by the end of today** 

- Write INSERT, SELECT, UPDATE and DELETE queries. 

- Use WHERE, ORDER BY and LIMIT. 

- Apply NOT NULL, UNIQUE, CHECK and foreign keys. 

## **Resources to use** 

- <u>PostgreSQL SQL tutorial — Read tables, rows and querying sections.</u> 

## **Main hands-on task** 

Implement and seed the ticket-system schema, then solve the provided CRUD query set. 

### **Functional requirements** 

- Queries for open tickets, high-priority tickets, status updates and safe deletion. 

- Constraints preventing invalid priorities, duplicate users and orphan records. 

### **Engineering expectations** 

- Store queries in version-controlled SQL files. 

- Use meaningful sample data. 

### **Suggested implementation order** 

1. Create schema. 

2. Insert seed data. 

3. Run each query manually. 

4. Test invalid inserts. 

5. Document expected results. 

Stretch task 

Create a reusable reset script for the training database. 

# **Day 8: Joins, grouping and reports** 

_Answer business questions using SQL._ 

Today’s goal Use joins and aggregation to produce useful reports. 

## **What you should know by the end of today** 

- Choose inner versus outer joins. 

- Use GROUP BY, HAVING and aggregate functions. 

- Build readable multi-table queries. 

## **Resources to use** 

- <u>PostgreSQL SQL tutorial — Focus on joins and aggregate functions.</u> 

## **Main hands-on task** 

Create a reporting SQL pack for the Support Ticket system. 

### **Functional requirements** 

- Ticket count by status and assignee. 

- Customers with more than five open tickets. 

- Users with no assigned tickets. 

- Oldest unresolved ticket. 

- Counts by category and priority. 

### **Engineering expectations** 

- Every report includes a comment stating the business question. 

- Format complex SQL for readability. 

### **Suggested implementation order** 

1. Confirm required output columns. 

2. Build base joins. 

3. Add grouping and filters. 

4. Verify using known seed data. 

5. Explain one complex query. 

Stretch task 

Create a weekly workload report using a common table expression. 

# **Day 9: Transactions and indexes** 

_Protect multi-step operations and improve query performance._ 

Today’s goal Use transactions for atomic changes and indexes for justified performance needs. 

## **What you should know by the end of today** 

- Explain commit and rollback. 

- Implement a multi-step transaction. 

- Read a basic EXPLAIN plan. 

## **Resources to use** 

- <u>PostgreSQL advanced tutorial — Read transactions.</u> 

- <u>PostgreSQL documentation</u> — Read the introduction to indexes. 

## **Main hands-on task** 

Implement transactional ticket reassignment and compare a search query before and after indexing. 

### **Functional requirements** 

- Update assignee, insert history and add a system comment as one transaction. 

- Rollback when any operation fails. 

- Capture EXPLAIN output before and after an index. 

### **Engineering expectations** 

- Do not add indexes without a query-based reason. 

- Demonstrate rollback with a deliberate failure. 

### **Suggested implementation order** 

1. Write the non-transactional sequence. 

2. Wrap it in a transaction. 

3. Force a failure and verify rollback. 

4. Measure a query plan. 

5. Create and justify an index. 

Stretch task Investigate a composite index for status and assignee. 

# **Day 10: Database assessment** 

_Demonstrate independent database design and SQL skills._ 

Today’s goal Design the database for an Equipment Booking System. 

## **What you should know by the end of today** 

- Model a new domain. 

- Create constraints, reports, a transaction and indexes. 

- Explain design choices. 

## **Resources to use** 

- <u>PostgreSQL tutorial — Use as reference only.</u> 

## **Main hands-on task** 

Design and implement the Equipment Booking System database. 

### **Functional requirements** 

- Employees, equipment, categories, bookings, approvals and maintenance records. 

- Seed data, ten required queries, one transaction and two justified indexes. 

### **Engineering expectations** 

- Submit an ER diagram and runnable SQL scripts. 

- A clean database reset must reproduce the result. 

### **Suggested implementation order** 

1. Analyse requirements. 

2. Create ER diagram. 

3. Implement schema. 

4. Seed data. 

5. Complete queries, transaction and indexes. 

6. Validate from a clean database. 

# **Day 11: Node.js with PostgreSQL** 

_Replace file storage with a real database._ 

Today’s goal Connect the Support Ticket API to PostgreSQL through a repository layer. 

## **What you should know by the end of today** 

- Configure connections safely. 

- Use parameterised queries. 

- Handle database failures. 

## **Resources to use** 

- <u>Node.js Learn — Review environment variables.</u> 

- <u>PostgreSQL docs — Use connection and SQL references.</u> 

## **Main hands-on task** 

Replace the file repository with PostgreSQL. 

### **Functional requirements** 

- Connection health check. 

- CRUD repository methods. 

- No SQL injection vulnerabilities. 

### **Engineering expectations** 

- Keep controllers and services unchanged where possible. 

- Never concatenate untrusted SQL values. 

### **Suggested implementation order** 

1. Configure database environment variables. 

2. Create connection module. 

3. Implement repository methods. 

4. Run endpoint tests. 

5. Test database failure. 

Stretch task Add graceful shutdown of the connection pool. 

# **Day 12: Prisma, migrations and seed data** 

_Manage schema changes repeatably._ 

Today’s goal Introduce an ORM while understanding the SQL and migrations it generates. 

## **What you should know by the end of today** 

- Define Prisma models and relations. 

- Create and apply migrations. 

- Write a seed script. 

## **Resources to use** 

- <u>Prisma getting started — Follow the PostgreSQL and TypeScript path.</u> 

- <u>Prisma CRUD</u> — Review create, read, update and delete. 

## **Main hands-on task** 

Migrate the ticket API repository to Prisma. 

### **Functional requirements** 

- Schema, migration, seed command and repository methods. 

- Document all database commands. 

### **Engineering expectations** 

- Inspect generated migration SQL. 

- Do not edit the production schema manually. 

### **Suggested implementation order** 

1. Initialise Prisma. 

2. Model existing tables. 

3. Create migration. 

4. Seed data. 

5. Replace repository queries. 

6. Run tests. 

Stretch task Demonstrate how to correct a faulty migration in development. 

# **Day 13: Validation, pagination and filtering** 

_Build list endpoints suitable for real applications._ 

Today’s goal Add robust query validation and database-level pagination. 

## **What you should know by the end of today** 

- Validate query parameters. 

- Return pagination metadata. 

- Filter and sort safely. 

## **Resources to use** 

- <u>Express routing — Review query and route parameters.</u> 

- <u>Prisma CRUD</u> — Review filtering and pagination patterns. 

## **Main hands-on task** 

Enhance GET /tickets. 

### **Functional requirements** 

- Page, pageSize, status, priority, assignee, search, sortField and sortDirection. 

- Maximum page size. 

- Total count and page metadata. 

### **Engineering expectations** 

- Never fetch all rows before slicing. 

- Whitelist sortable fields. 

### **Suggested implementation order** 

1. Define query schema. 

2. Build validated filter object. 

3. Implement count and data queries. 

4. Return metadata. 

5. Test edge cases. 

Stretch task Support multiple status values. 

# **Day 14: Backend API testing** 

_Test the application at service and HTTP boundaries._ 

Today’s goal Build reliable, isolated tests using a dedicated test database. 

## **What you should know by the end of today** 

- Distinguish unit and integration tests. 

- Set up and tear down test data. 

- Test error paths. 

## **Resources to use** 

- <u>Jest — Review setup, teardown and async tests.</u> 

- <u>Supertest</u> — Review request testing examples. 

## **Main hands-on task** 

Add a complete backend test suite. 

### **Functional requirements** 

- At least ten endpoint tests and five service tests. 

- Cover validation, not found, pagination, filtering and database errors. 

### **Engineering expectations** 

- Tests must not depend on execution order. 

- Use clear arrange-act-assert structure. 

### **Suggested implementation order** 

1. Create test environment config. 

2. Reset data safely. 

3. Write happy-path tests. 

4. Add validation and failure tests. 

5. Check isolation. 

Stretch task Add a small test-data factory. 

# **Day 15: Backend feature sprint** 

_Modify an unfamiliar starter repository._ 

Today’s goal Add comments and status history through database, service and API layers. 

## **What you should know by the end of today** 

- Trace an existing request flow. 

- Write an impact analysis. 

- Create a reviewable PR. 

## **Resources to use** 

- <u>Existing repository README — Your mentor will provide the actual repository link.</u> 

## **Main hands-on task** 

Implement ticket comments and status history in the supplied codebase. 

### **Functional requirements** 

- Database migration, endpoints, permissions and tests. 

- PR description with implementation and testing details. 

### **Engineering expectations** 

- Follow existing conventions rather than rebuilding architecture. 

- Keep the PR focused. 

### **Suggested implementation order** 

1. Run and map the project. 

2. Write impact analysis. 

3. Implement database changes. 

4. Implement backend flow. 

5. Test and prepare PR. 

Stretch task Add a history endpoint with pagination. 

# **Day 16: Authentication** 

_Identify users securely._ 

Today’s goal Implement registration, login and protected routes. 

## **What you should know by the end of today** 

- Hash passwords. 

- Issue and verify access tokens. 

- Avoid information leakage. 

## **Resources to use** 

- <u>OWASP Authentication Cheat Sheet — Read the password and error-message guidance.</u> 

- <u>Express middleware</u> — Review middleware flow. 

## **Main hands-on task** 

Add authentication to the ticket system. 

### **Functional requirements** 

- Register, login, current-user endpoint and authentication middleware. 

- Secrets from environment variables. 

### **Engineering expectations** 

- Never store plain-text passwords. 

- Do not reveal whether a login email exists. 

### **Suggested implementation order** 

1. Add user credentials model. 

2. Implement password hashing. 

3. Implement login. 

4. Create middleware. 

5. Protect routes and test. 

Stretch task Add token expiry handling. 

# **Day 17: Authorisation and roles** 

_Control what authenticated users may do._ 

Today’s goal Implement server-side permissions for administrator, agent and customer roles. 

## **What you should know by the end of today** 

- Create a permission matrix. 

- Enforce ownership and role rules. 

- Test forbidden access. 

## **Resources to use** 

- <u>OWASP Access Control Cheat Sheet — Read deny-by-default and server-side checks.</u> 

## **Main hands-on task** 

Add role-based and ownership-based permissions. 

### **Functional requirements** 

- Customers see their own tickets, agents see assigned tickets, admins manage all. 

- ● Only admins manage users. 

### **Engineering expectations** 

- Backend is authoritative. 

- Return 403 without exposing restricted data. 

### **Suggested implementation order** 

1. Write permission matrix. 

2. Create reusable checks. 

3. Apply to routes/services. 

4. Test every role. 

5. Review for missing checks. 

Stretch task Add project membership permissions. 

# **Day 18: Security and resilience** 

_Reduce common API risks._ 

Today’s goal Review and harden the API against common misuse and failures. 

## **What you should know by the end of today** 

- Recognise injection and validation risks. 

- Apply rate, body-size and header protections. 

- Document residual risks. 

## **Resources to use** 

- <u>OWASP Node.js Security Cheat Sheet</u> — Use as the review checklist. 

## **Main hands-on task** 

Perform a security review and implement fixes. 

### **Functional requirements** 

- Identify at least five risks. 

- Add appropriate validation, secure headers, rate limiting, CORS and size limits. 

### **Engineering expectations** 

- Do not add packages without understanding configuration. 

- Add tests for important protections. 

### **Suggested implementation order** 

1. Threat-model main endpoints. 

2. Record findings. 

3. Prioritise. 

4. Fix and test. 

5. Document remaining limitations. 

#### Stretch task 

Add an audit log for repeated rejected requests. 

# **Day 19: Logging and API documentation** 

_Make the service operable by another team._ 

Today’s goal Add structured logs, health checks and usable documentation. 

## **What you should know by the end of today** 

- Create useful logs without leaking secrets. 

- Use request IDs. 

- Document setup and endpoints. 

## **Resources to use** 

- <u>Express debugging</u> — Review debugging support. 

- <u>OpenAPI Specification — Use as API documentation reference.</u> 

## **Main hands-on task** 

Add operational readiness features. 

### **Functional requirements** 

- Structured request/error logs, correlation ID, health endpoint, API documentation and .env.example. 

### **Engineering expectations** 

- A new developer should run the project from README alone. 

- Never log passwords or tokens. 

### **Suggested implementation order** 

1. Add logger abstraction. 

2. Add request IDs. 

3. Create health checks. 

4. Document API. 

5. Clone into a clean directory and verify setup. 

Stretch task 

Add readiness and liveness health endpoints. 

# **Day 20: React mental model and setup** 

_Build a static component-based dashboard._ 

Today’s goal Understand components, JSX, props and UI decomposition. 

## **What you should know by the end of today** 

- Create typed function components. 

- Break a screen into reusable parts. 

- Run a React TypeScript app with Vite. 

## **Resources to use** 

- <u>React Learn — Complete Quick Start.</u> 

- <u>Describing the UI</u> — Read components, importing and JSX. 

- <u>Vite guide — Use the React TypeScript starter.</u> 

## **Main hands-on task** 

Build a static project and issue dashboard. 

### **Functional requirements** 

- App shell, header, sidebar, project card, issue card, badge, avatar and empty state. 

### **Engineering expectations** 

- Use semantic HTML. 

- No large monolithic component. 

- Props must be typed. 

### **Suggested implementation order** 

1. Sketch component tree. 

2. Create project. 

3. Build small components. 

4. Compose page. 

5. Review accessibility and responsiveness. 

Stretch task 

Create a component gallery page showing all variants. 

# **Day 21: Props, lists and conditional rendering** 

_Render reusable UI from data._ 

Today’s goal Build an issue list with correctly typed props and UI states. 

## **What you should know by the end of today** 

- Render arrays with stable keys. 

- Use conditional rendering clearly. 

- Avoid duplicated markup. 

## **Resources to use** 

- <u>React: Describing the UI — Read rendering lists and conditional rendering.</u> 

## **Main hands-on task** 

Build the Issue List screen. 

### **Functional requirements** 

- Status and priority variations, empty list, overdue indicator and reusable rows/cards. 

### **Engineering expectations** 

- Do not use array index as a key when a stable ID exists. 

- Keep display components free of hard-coded business data. 

### **Suggested implementation order** 

1. Define issue types. 

2. Create sample data. 

3. Build one row/card. 

4. Render list. 

5. Add empty and overdue states. 

Stretch task Add grouped display by status. 

# **Day 22: State and events** 

_Make the issue screen interactive._ 

Today’s goal Use state, events and derived values without mutating data. 

## **What you should know by the end of today** 

- Use useState and controlled inputs. 

- Calculate filtered results from state. 

- Update arrays immutably. 

## **Resources to use** 

- <u>React: Adding Interactivity — Read events, state and updating arrays.</u> 

## **Main hands-on task** 

Add search, filters, sorting and issue creation. 

### **Functional requirements** 

- Search, status filter, priority filter, sort, add issue and clear filters. 

### **Engineering expectations** 

- Do not store filtered arrays as duplicate state. 

- No external state library. 

### **Suggested implementation order** 

1. Identify minimal state. 

2. Add controlled inputs. 

3. Create derived filtered data. 

4. Implement add action. 

5. Test interactions manually. 

Stretch task 

Persist filters in the URL. 

# **Day 23: Forms and validation** 

_Build an accessible issue form._ 

Today’s goal Handle controlled fields, validation and submit states. 

## **What you should know by the end of today** 

- Validate on submit and at field level. 

- Associate labels and errors. 

- Handle unsaved changes. 

## **Resources to use** 

- <u>React forms guidance — Review controlled inputs.</u> 

## **Main hands-on task** 

Build create/edit issue forms. 

### **Functional requirements** 

- Title, description, project, assignee, priority, status, due date and labels. 

- Error summary, disabled submitting state and cancel confirmation. 

### **Engineering expectations** 

- Error messages must be actionable. 

- Form submission must not occur with invalid data. 

### **Suggested implementation order** 

1. Define form model. 

2. Build reusable field components only where useful. 

3. Implement validation. 

4. Add submit and cancel states. 

5. Keyboard-test the form. 

Stretch task Add reusable validation helpers with tests. 

# **Day 24: React assessment** 

_Demonstrate React fundamentals independently._ 

Today’s goal Build an Employee Leave Request interface from a supplied design. 

## **What you should know by the end of today** 

- Apply component design, state, TypeScript and accessibility. 

- Handle common UI states. 

- Deliver responsive work. 

## **Resources to use** 

- <u>React Learn — Use as reference only.</u> 

## **Main hands-on task** 

Build the assessed Leave Request interface. 

### **Functional requirements** 

- Request list, filters, form, balance summary, loading, empty and error states. 

### **Engineering expectations** 

- Match the provided design reasonably. 

- Do not omit responsive behaviour. 

### **Suggested implementation order** 

1. Analyse screen. 

2. Create component plan. 

3. Implement static layout. 

4. Add state and validation. 

5. Test and polish. 

# **Day 25: Routing and pages** 

_Turn components into a navigable application._ 

Today’s goal Use client-side routing, parameters and nested layouts. 

## **What you should know by the end of today** 

- Define routes and layouts. 

- Read route parameters. 

- Handle missing pages and invalid IDs. 

## **Resources to use** 

- <u>React Router documentation — Follow declarative-mode setup.</u> 

## **Main hands-on task** 

Add routes for login, projects, issues, profile and not-found states. 

### **Functional requirements** 

- Nested application layout, active navigation and working direct URLs. 

### **Engineering expectations** 

- Do not render every page conditionally in one component. 

- Provide useful invalid-ID states. 

### **Suggested implementation order** 

1. Install router. 

2. Create route map. 

3. Build layout and navigation. 

4. Add parameterised routes. 

5. Test direct navigation. 

#### Stretch task 

Add breadcrumb navigation derived from routes. 

# **Day 26: API integration** 

_Connect React to the backend safely._ 

Today’s goal Build a typed API layer with complete loading and error states. 

## **What you should know by the end of today** 

- Fetch data from the backend. 

- Handle success, empty, validation, network and server states. 

- Use environment-based API URLs. 

## **Resources to use** 

- <u>MDN Fetch API — Read requests, responses and errors.</u> 

## **Main hands-on task** 

Connect project and issue lists to the backend. 

### **Functional requirements** 

- Loading, empty, error and retry states. 

- Typed response mapping. 

### **Engineering expectations** 

- Do not call fetch directly from many display components. 

- Never hard-code localhost URLs in production code. 

### **Suggested implementation order** 

1. Create API client. 

2. Add environment config. 

3. Fetch projects. 

4. Fetch issues. 

5. Add all UI states. 

6. Test failed requests. 

Stretch task 

Add request cancellation when navigating away. 

# **Day 27: Effects and custom hooks** 

_Separate reusable data behaviour from UI._ 

Today’s goal Use effects deliberately and create useful custom hooks. 

## **What you should know by the end of today** 

- Explain effect dependencies and cleanup. 

- Avoid effects for pure calculations. 

- Create reusable hooks. 

## **Resources to use** 

- <u>React: Synchronizing with Effects — Read the full section.</u> 

- <u>You Might Not Need an Effect — Use as a decision guide.</u> 

## **Main hands-on task** 

Create useProjects, useIssues, useIssue, useDebounce and useDocumentTitle. 

### **Functional requirements** 

- Correct loading/error behaviour and cleanup. 

### **Engineering expectations** 

- No disabled exhaustive-deps rule without explanation. 

- Hooks expose a clear, typed API. 

### **Suggested implementation order** 

1. Identify repeated logic. 

2. Extract one hook. 

3. Test behaviour manually. 

4. Add remaining hooks. 

5. Review every effect for necessity. 

Stretch task Add simple hook tests. 

# **Day 28: Authentication state and context** 

_Maintain user session and protect pages._ 

Today’s goal Use Context for authentication without turning all state global. 

## **What you should know by the end of today** 

- Restore a session. 

- Protect routes. 

- Show role-aware navigation. 

## **Resources to use** 

- <u>React: Passing Data Deeply — Read Context guidance.</u> 

## **Main hands-on task** 

Implement login, authentication context, session restore, logout and protected routes. 

### **Functional requirements** 

- Unauthorised page and role-aware navigation. 

### **Engineering expectations** 

- Frontend hiding is not authorisation. 

- Avoid storing unrelated application data in auth context. 

### **Suggested implementation order** 

1. Build API login call. 

2. Create auth context. 

3. Restore session. 

4. Protect routes. 

5. Add logout and role UI. 

Stretch task Handle expired sessions globally. 

# **Day 29: React testing** 

_Test behaviour from a user’s perspective._ 

Today’s goal Write resilient component and integration tests. 

## **What you should know by the end of today** 

- Use accessible queries. 

- Simulate realistic user actions. 

- Mock network boundaries. 

## **Resources to use** 

- <u>React Testing Library</u> — Read the introduction. 

- <u>Testing Library queries</u> — Follow query priority. 

## **Main hands-on task** 

Test login, filtering, issue form, empty/error states, retry, protected routes and navigation. 

### **Functional requirements** 

- At least ten meaningful tests. 

### **Engineering expectations** 

- Prefer getByRole/getByLabelText. 

- Avoid testing internal state or component implementation details. 

### **Suggested implementation order** 

1. Configure test environment. 

2. Test one simple component. 

3. Test user interaction. 

4. Mock API responses. 

5. Add failure cases. 

#### Stretch task 

Add a reusable render helper with router and auth providers. 

# **Core reference library** 

- <u>Node.js Learn</u> 

- <u>Express guide</u> 

- <u>TypeScript Handbook</u> 

- <u>Jest documentation</u> 

- <u>PostgreSQL tutorial</u> 

- <u>Prisma documentation</u> 

- <u>React Learn</u> 

- <u>Vite guide</u> 

- <u>React Router</u> 

- <u>React Testing Library</u> 

