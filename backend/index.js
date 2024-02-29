const express  = require("express")
const {chats}=require("./data/data")
const dotenv = require("dotenv");


dotenv.config()
const app=express();
const port=process.env.PORT || 4001


app.get("/",(req,res)=>{
    res.send("api")
})
app.get("/api/chat",(req,res)=>{
    res.send(chats)
})

app.listen(port,console.log(`server start ${port}`))