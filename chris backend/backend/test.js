import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import route from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import cors from 'cors'

 

const app = express();
dotenv.config();

app.use(bodyParser.json())
app.use(cors())
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
.then(() =>{
console.log("Database is connected successfully")

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    });
    })
    .catch((error) => console.log(error));

    app.use("/api/users",route);
//  --------------------------------------------

app.get('/', (req, res) => {
    res.json({"msg": "hello"})
    })


    // const userSchema = new mongoose.Schema({
    //     name: String,
    //     age: Number,
    //     });

      

        // const UserModel = mongoose.model("users",userSchema)

        // app.get("/getUsers", async (req, res) => {
        //     const userData = await UserModel.find();
        //     res.json(userData);
        //     });

            // localhost:8000/getUsers