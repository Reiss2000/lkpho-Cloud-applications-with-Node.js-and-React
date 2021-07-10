// Run npm install, to install dependencies
// In the terminal run the command 'node expressServer.js' to start the server
// Open another terminal and run 'curl localhost:3333' to show "Welcome to the express server"
// Run 'curl -X POST http://localhost:3333/login/Jason' to show "Jason, You are logged in!"
// Run 'curl http://localhost:3333/Jason' to show "Hello Jason"
// Run 'curl http://localhost:3333/loginDetails' to show "[{"name":"Jason","login_time":"..."}]"
// Run 'curl http://localhost:3333/fetch/num' replacing {num} with a number 1-12 to get the corresponding month of the year "The month is ..."

const express = require('express');
const app = new express();

let loginDetails = [];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

app.post("/fetch/:num",(req,res)=>{
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    res.send("The month is " + months[req.params.num - 1])
})


