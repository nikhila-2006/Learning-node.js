const express=require("express");
let app=express();

app.use((req,res,next)=>{
    console.log("hi,i am middleware.");
    next();
})

app.get("/",(req,res)=>{
    res.send("hello i am root dir.")
})
app.get("/random",(req,res)=>{
    res.send("this is a random page");
})
app.listen(8080,()=>{
    console.log("listening to port on 8080");
})