const express = require("express");

const app = express();

    app.get("/rend",(req,res)=>{
        res.send("hello render 2")
    })
    app.get("/log",(req,res)=>{
        res.send("hello render 2 log")
    })
    app.get("/a",(req,res)=>{
        res.send("hello render 2 a")
    })
    app.get("/b",(req,res)=>{
        res.send("hello render 2 b")
    })
    app.get("/c",(req,res)=>{
        res.send("hello render 2 c")
    })



app.listen(5003, ()=>{
    console.log("server running port 1000");
})