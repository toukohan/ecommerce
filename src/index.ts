require('dotenv').config();
import express from 'express';
import cors from 'cors';

import authRouter from './routes/authRoutes';
import userRouter from './routes/userRoutes';
import productRouter from './routes/productRoutes';
import orderRouter from './routes/orderRoutes';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true
}));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

