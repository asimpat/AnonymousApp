import express from "express";
import dotenv from "dotenv";

const app = express()

dotenv.config({ path: '.env' });

app.use(express.json({ limit: '10kb' }));

// // MOUNTING THE ROUTER
// app.use('/api/v1/users', userRouter);

export default app;