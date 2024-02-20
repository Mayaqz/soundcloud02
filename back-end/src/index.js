
import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import { userRouter } from "./router/user-routes.js";

const app = express();

app.use(cors());
app.use(express.json());


const connectDb = async () => {
    await mongoose.connect('mongodb+srv://hangaibn347:lrW3TDbs6UUSfLem@cluster0.9ecre8t.mongodb.net/')
    console.log('database connected');
}

connectDb();

app.use(userRouter);


app.listen(8000, () => {
    console.log(`Your server running on: http://localhost:8000`)
})