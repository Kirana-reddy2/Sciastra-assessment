let cors=require("cors")
let express = require('express');
let bodyparser = require('body-parser');
let app = express();
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.post("/postdata",(req,res)=>{
    res.send(req.body)
})

app.use('/insert',require('./route/register'))     //insert data

app.use('/login',require('./route/Login'))   

app.listen(3000,(req,res)=>{
    console.log("Server Running")
})




