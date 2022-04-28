const serviceFormsRouter = require('express').Router();
const ServiceForm = require('../models/serviceForm');

serviceFormsRouter.get('/', async (req, res) => {
    const serviceForms = await ServiceForm.find({});
    res.json(serviceForms);
});

serviceFormsRouter.post('/', async (req, res) => {
    const data = req.body;
    
    const newServiceForm = new ServiceForm({
        companyName: data.companyName,
        email: data.email,
        date: data.date,
        title: data.title,
        description: data.description
    });

    newServiceForm.save();
    res.status(201).end();
});

module.exports = serviceFormsRouter;
