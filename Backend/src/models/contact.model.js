//Contact Schema ie defines how contact input is recorded and stored in PortfolioDB
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        message: {
            type: String,
            required: [true, "Leave a message..eg project brief"],
            trim: true,
        },
    },
    { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);