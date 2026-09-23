# Description

A HTTP based Task Manager with GET, POST , PATCH and DELETE METHODS.
Express.js is not used

# How to use

1. Click on this link : https://vscode.dev/github/christojose-vonnue/Phase2/tree/master/Day3
2. Download the folder Day3
3. Run these following commands in your terminal to set up node modules
4. Run `npm --version` , if a valid version number exist, follow next step
5. Run `npm install -D @types/node@^26.6.2 typescript@^7.0.2 vitest@^5.0.1` to download dependencies 
6. Run `npm link`
7. On one terminal Run ` node dist/server.js` , And in another terminal run `curl` commands

# Sample curl commands


* `curl -X GET http://localhost:8000/tasks`
* ` curl -X POST http://localhost:8000/tasks   -H "Content-Type: application/json"   -d '{"name":"Check5","status":"Completed"}'`
* `curl -X POST http://localhost:8000/tasks   -H "Content-Type: application/json"   -d '{"name":"Check5","status":"Completed"}'`
* `curl -X PATCH http://localhost:8000/tasks   -H "Content-Type: application/json"   -d '{"name":"Check6","status":"In-progress"}'`
* ` curl -X DELETE http://localhost:8000 -d Check5`
* `curl -X GET http://localhost:8000/tasksSS`


