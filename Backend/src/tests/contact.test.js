//Testing for successful POST for /api/contact ie testing if form submissions are working correctly
import request from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import connectDB from "../config/database.js";


//Connect to DB before running tests

beforeAll(async () => {
    await connectDB();
});

//Close DB connection after all tests finish so Jest exits cleanly

afterAll(async () => {
    await mongoose.connection.close();
});

describe("POST /api/contact", () => {
    
    it("should successfully create a contact form submission with valid data", async () => {
        const response = await request(app)
        .post("/api/contact")
        .send({
            name: "Test User",
            email: "testuser@gmail.com",
            phone: "0712345678",
            message: "Hello, testing automated workflow."
        });

     // Asertions
     expect(response.statusCode).toEqual(201); 
     expect(response.body.success).toBe(true);
     expect(response.body.message).toEqual("Form submitted successfully");
     expect(response.body.data).toHaveProperty("_id");
     expect(response.body.data.email).toEqual("testuser@gmail.com"); 
    }, 15000);

    it("should fail if required fields are missing", async () => {
        const response = await request(app)
        .post("/api/contact")
        .send({
            name: "Incomplete user"
            //Missing email, phone, message
        });
        //If test fails, error 400 or 500 is returns depending on Schema
        expect(response.statusCode).not.toEqual(201);
    });
});
