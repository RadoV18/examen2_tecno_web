const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactUsFormSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String
}, { collection: 'contact-us-form' });

contactUsFormSchema.set('toJSON', {
    transform: ( document, returnedObject ) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('contactUsForm', contactUsFormSchema);