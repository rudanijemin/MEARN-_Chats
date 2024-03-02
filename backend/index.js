const express  = require("express")
const {chats}=require("./data/data")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoute = require("./router/userRoute");
const chatRoute = require("./router/chatRoute")
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

connectDB()
dotenv.config()
const app=express();
const port=process.env.PORT || 4001

//this middlware compulsry added
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("api")
})
app.use("/api/user",userRoute)
app.use("/api/chat", chatRoute);


// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port,console.log(`server start ${port}`))