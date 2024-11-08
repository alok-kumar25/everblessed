import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/connectdb.js';
import userRoute from './route/user.route.js';
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
//this comment is from alok
connectDB();
app.use(express.json());
app.use(cors());
app.use('/api/user',userRoute);
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});