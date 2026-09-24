# Description

A Support Ticket API from a written requirement.

## Functional Requirements

●​ Create, list, view, update status, assign and delete tickets.<br>
●​ Validate title, description, priority, status and assignee.<br>
●​ Provide API examples in the README.

## Ticket data structure

**A json object of the following data type**

```typescript
type ticket= {
    "title":string,                             // Unique title
    "description":string,                       // Description with minimum 10 characters
    "status": "open" | "working" | "closed",    //  Only these status
    "priority":"high" | "medium" | "low",       //  Only these priority
    "assigne":"Jacob" | "Jude" | "N/A"          //  Only these assigne
}
```

## API Points

### List Ticket Names

**Route**   :   http://localhost:7000/list<br>
**Method**  :   GET<br>
**Body**    :   ---<br>

### View Ticket Details

**Route**   :   http://localhost:7000/view/:id<br>
**Method**  :   GET<br>
**Body**    :   ---<br>
> Replace :id with the required title name

### Create a Ticket 

**Route**   :   http://localhost:7000/list<br>
**Method**  :   POST<br>
**Body**    :   A object following type ticket<br>
**Header**  :   application/json <br>
**Sample**
```json
{
  "title": "Check2",
  "description": "AC is Complaint , Fix Fast",
  "status": "open",
  "priority": "high",
  "assigne": "Jacob"
}
```
### Update Status of a Ticket 

**Route**   :   http://localhost:7000/status <br>
**Method**  :   PATCH<br>
**Body**    :   A object with title and valid status mentioned in ticket<br>
**Header**  :   application/json <br>
**Sample**
```json
{
  "title": "Check2",
  "status": "Jude"
}
```

### Update Assigne of a Ticket 

**Route**   :   http://localhost:7000/assign<br>
**Method**  :   PATCH<br>
**Body**    :   A object with title and valid assigne mentioned in ticket<br>
**Header**  :   application/json <br>
**Sample**
```json
{
  "title": "Check2",
  "assigne": "open"
}
```

### Delete a Ticket 

**Route**   :   http://localhost:7000/status<br>
**Method**  :   DELETE<br>
**Body**    :   A object with title<br>
**Header**  :   application/json <br>
**Sample**
```json
{
  "title": "Check2"
}
```

## Testing

> All tests are done using the API Client POSTMAN
> Invalid Routes are routed back with status 400 and err message

