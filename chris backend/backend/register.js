import express from "express"
import mongoose from "mongoose"
import cors  from "cors"
import UserModel from "./model/Users.js"
 
const app = express()
 

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/dbconnect");

app.post('/register',(req,res)=>{
UserModel.create(req.body)
.then(dbconnect => res.json(dbconnect))
.catch(err => res.json(err))

})

app.listen(3001, () => {
console.log("server is running")
})