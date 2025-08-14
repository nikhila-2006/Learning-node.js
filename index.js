const express=require("express");
const app=express();
let port=8080;
let path=require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("home.ejs",{diceVal});
})
app.get("/ig/:username",(req,res)=>{
    let followers=["akshitha_challa","sumanth_05","nikhila__01","sunandha_06","shradhakhapra"]
    let {username}=req.params;
    res.render("instagram",{username,followers});
})