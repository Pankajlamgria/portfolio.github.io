const express=require("express");
const path=require("path");

const app=express();
app.use(express.urlencoded());
app.use("/static",express.static("statics"));

// app.set("viewengine","ejs");
// app.set("views",path.join(__dirname,"views"));
const port="2000"; 
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.listen(port,()=>{
    console.log(`network has been created at the port ${port}`);
})