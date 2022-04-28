const contactUsFormsRouter = require('express').Router();
const ContactUsForm = require('../models/contactUsForm');

contactUsFormsRouter.get('/', async ( req, res ) => {
    const forms = await ContactUsForm.find({});
    res.json(forms);
});

contactUsFormsRouter.post('/', ( req, res ) => {
    const data = req.body;

    const newContactUsForm = new ContactUsForm({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message
    });

    newContactUsForm.save();
    res.status(201).end();
});

module.exports = contactUsFormsRouter;
