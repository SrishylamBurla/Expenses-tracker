import express from 'express';
import userRouter from './routes/userRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import transactionRouter from './routes/transactionRouter.js';
import dotenv from 'dotenv';
import { connectDB } from './middlewares/db.js';
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from './middlewares/errorHandler.js';
import cors from 'cors';

dotenv.config();
connectDB();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,                
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/users', userRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/transactions', transactionRouter);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});