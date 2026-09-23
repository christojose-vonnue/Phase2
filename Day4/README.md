# Description

A HTTP based Task Manager with GET, POST , PATCH and DELETE METHODS. using Express.js

# How to use

1. On one terminal Run ` node dist/server.js` , And in another terminal run `curl` commands or POSTMAN

# Sample curl commands


* `curl -X GET http://localhost:7000/tasks`
* ` curl -X POST http://localhost:7000/tasks   -H "Content-Type: application/json"   -d '{"name":"Check5","status":"Completed"}'`
* `curl -X POST http://localhost:7000/tasks   -H "Content-Type: application/json"   -d '{"name":"Check5","status":"Completed"}'`
* `curl -X PATCH http://localhost:7000/tasks   -H "Content-Type: application/json"   -d '{"name":"Check6","status":"In-progress"}'`
* ` curl -X DELETE http://localhost:7000 -d Check5`
* `curl -X GET http://localhost:7000/tasksSS`

# References

* https://github.com/anjal-vonnue/Phase2/blob/day-4/day-4
* https://expressjs.com/en/5x/guide/writing-middleware/#middleware-function-validatecookies
* https://expressjs.com/en/5x/guide/routing/

