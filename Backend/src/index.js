import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

// Load environment variables
dotenv.config({
    path: './.env'
});


const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        // Connect to MongoDB
        await connectDB();

        // Express error listener
        app.on("error", (error) => {
            console.error("EXPRESS ERROR: ", error);
            throw error;
        });

        // Start listening on port
        app.listen(PORT, () => {
            console.log(`Server is listening on port : ${PORT}`);
        });

    } catch (error) {
        console.log("MongoDB connection failed!!", error);
    }
};

startServer();