const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContacts = async (req, res) => {
    res.status(200).json({ message: "get all contacts" });
};

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `${req.params.id}` });
});

// const createContact = async (req,res)=>{
//     console.log("the request body is:",req.body);
//     res.status(200).json({message:"add a contact"});
// };

const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});

const updateContact = async (req, res) => {
    res.status(200).json({ message: "update contact" });
};

const deleteContact = async (req, res) => {
    res.status(200).json({ message: "delete contact" });
};

module.exports = {
    getContacts, getContact, createContact,
    updateContact, deleteContact
};
