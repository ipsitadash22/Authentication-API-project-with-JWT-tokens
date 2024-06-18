const express=require('express');
const routes=require("./routes");
const bodyParser=require("body-parser")
const app=express();
require("dotenv").config();
require('./config/db');
//if u want to access the env file use process.env
const PORT=process.env.PORT||8000;
app.use(bodyParser.json())//it helps to pass everything in json format
app.use('/api/v1',routes)
app.listen(PORT,()=>{
    console.log(`Server is up and running on PORT: ${PORT}`)
})