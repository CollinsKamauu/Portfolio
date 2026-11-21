import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const app = express(); //creates an express app

const allowedOrigins = [
  'https://collinskamauu.github.io',
  'http://localhost:5173',
];

//Routes declaration
app.use(
    cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use(express.json());

//Mount contact routes
app.use("/api/contact", contactRoutes);

//Example route: http://localhost:4000/api/contact

export default app;