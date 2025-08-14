const express=require("express");
const app=express();
let port=8080;
let path=require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
// app.use(express.static("public"));


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("diceroll.ejs",{diceVal});
})
app.get("/ig/:username",(req,res)=>{
    let instaData=require("./data.json");
    
    let {username}=req.params;
    let data=instaData[username];
    if(data){
        res.render("instagram",{data});
    }else{
        res.render("error");
    }
    
})
app.get(/.*/ ,(req,res)=>{
    res.render("home");
})