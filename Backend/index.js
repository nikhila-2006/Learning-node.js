const express=require("express");
const app=express();
let port=8080;
app.use(express.urlencoded({expected:true}));
app.use(express.json());
app.get("/registry",(req,res)=>{
    let {username,password}=req.query;
    res.send(`Form Submitted by GET request, Welcome <b> ${username} </b>`);
})
app.post("/registry",(req,res)=>{
    let {username,password}=req.body;
    res.send(`Form Submitted by POST request, Welcome <b> ${username} </b>`);
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})