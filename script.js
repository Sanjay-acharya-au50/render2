const express = require("express");

const app = express();

    app.get("/rend",(req,res)=>{
        res.send("hello render 2")
    })
    app.get("/log",(req,res)=>{
        res.send("hello render 2 log")
    })


app.listen(5003, ()=>{
    console.log("server running port 1000");
})