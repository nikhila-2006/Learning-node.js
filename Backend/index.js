const express=require("express");
const app=express();
let port=8080;
app.get("/registry",(req,res)=>{
    let {username,password}=req.query;
    res.send(`Form Submitted by GET request, Welcome <b> ${username} </b>`);
})
app.post("/registry",(req,res)=>{
    res.send("<h1>Form Submitted by POST request</h1>");
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})