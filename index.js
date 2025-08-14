const express=require("express");
let app=express();
let port=3000;
app.listen(port,()=>{
    console.log(`App is listening to port ${port}`);
})
app.get("/",(req,res)=>{
    res.send("hello,this is home path.");
})
// app.get("/:username/:id",(req,res)=>{
//     let {username,id}= req.params;
//     res.send(`<h1>hello,Welcome to page of @${username}</h1>`);
// })
app.get("/search",(req,res)=>{
    let {q,color}=req.query;
    res.send(`<h1>search results for:${q} and color is:${color}</h1>`);
})



// app.get("/*",(req,res)=>{
//     res.send("page does not exist!");
// })


// app.use((req,res)=>{
//     console.log("request received");
//     // let code="<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li></ul>";
//     res.send({
//         name:"nikhila",
//         age:18,
//         city:"hyderabad"
//     });
// })