import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const app = express(); //creates an express app


//Routes declaration
app.use(cors());
app.use(express.json());

//Mount contact routes
app.use("/api/contact", contactRoutes);

//Example route: http://localhost:4000/api/contact

export default app;