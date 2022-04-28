const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceFormSchema = new Schema({
    companyName: String,
    email: String,
    date: Date,
    title: String,
    description: String
}, { collection: 'service-form' });

serviceFormSchema.set('toJSON', {
    transform: ( _document, returnedObject ) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('serviceForm', serviceFormSchema);
