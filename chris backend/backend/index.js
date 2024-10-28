// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors')

// const app = express()
// app.use(cors())

// const db = mysql.createConnection({
//     host: "127.0.0.1:",
//     user: 'christopher',
//     password: '',
//     database: 'students'
//     })

// app.get('/',(re,res)=>{
// return res.json('from backend')
// });

// app.get('/students', (req, res) => {
//     const sql = "  select * from Student where StudentName = 'ram';";
//     db.query(sql, (err, data) =>{
//     if(err) return res.json(err); 
//     return res.json(data);
// })
// })



// app.listen(3306, () => {
//     console.log(`Server Started at ${10000}`)
// })

import express from "express"
import mongoose from "mongoose"
// import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoutes.js"

const app = express();

// app.use(bodyParser.json());
dotenv.config(); 
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose
.connect(MONGOURL)
.then(() => {
console.log("Database connected successful.");
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});I
})
.catch((error) => console.log(error));

app.use("/api/user", route);