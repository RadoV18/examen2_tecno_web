const config = require('./utils/config');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// router
const serviceFormsRouter = require('./controllers/serviceForms');
const contactUsFormsRouter = require('./controllers/contactUsForms');

const app = express();

const mongooseURI = config.DATABASE_URI;
mongoose.connect(mongooseURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('error connecting to MongoDB', err);
    });

app.use(morgan('tiny'));
app.use(express.json());

// routes
app.use('/api/service-forms', serviceFormsRouter);
app.use('/api/contact-us-forms', contactUsFormsRouter);

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});
