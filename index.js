const express = require("express")

const app = express()

app.get("/", (req, res)=> {
    res.send("Hello World!")
})

app.get("/student", (req, res)=> {
    res.send("Hello Student!")
})

app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})