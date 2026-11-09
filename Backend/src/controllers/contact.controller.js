//Handles incoming requests i.e write to MongoDB
import { Contact } from "../models/contact.model.js"

export const submitContactForm = async (req, res) => {
    console.log("Hit contact endpoint successfully. Request body:")
    try {
        const { name, email, phone, message } = req.body;

        //Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
            success: false,
            message: "Please fill in all the required fields."
        });
    }

//Create and save new Collection document
const newContact = await Contact.create({
    name,
    email,
    phone,
    message,
});

return res.status(201).json({
    success: true,
    message: "Form submitted successfully",
    data: newContact,
});
} catch (error) {
    console.error("Error saving contact submission", error);
    return res.status(500).json({
        success: false,
        message: "Sorry, server error. Please try again later."
    });
}
};