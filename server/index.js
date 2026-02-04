const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const users = require("./models/users");
const router = require("./routes/usersRoutes")
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use("/",router);
app.use("/create",router);
app.use("/getUser",router);
app.use("/update",router);
app.use("/delete",router);



mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("DB connected")
    app.listen(3000,()=>{
    console.log("server on port 3000")})
})
.catch(()=>{console.log("DB faild to connect")})





