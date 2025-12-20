import express from "express";
import dotenv from "dotenv";
import connectDB from "./Models/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import AuthRouter from "./routes/AuthRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

//middleware
app.use(bodyParser.json());

app.use(cors({     //allowing different frontend and backend to each other
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

//test route
app.get('/ping', (req, res) => {
    res.send("PONG");
})


//auth routes
app.use('/auth', AuthRouter);


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    connectDB();
})

