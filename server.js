//! Ejs:-Embedded javaScript
const express =require("express");
const app=express();
const path=require("path");
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    //res.sendFile(path.join(__dirname,"./public/home.html"))
    //res.render("home",{"name":"Abhi Gupta"}); //! render with one value through object
    res.render("home",{"name":"Abhi Gupta",courses:["First","Second","Third","Fourth","Fifth"]});
})

app.listen(3000,(err)=>{
    if(err)
        console.log("Server can't start..");
    else
        console.log("Server Started....");
})