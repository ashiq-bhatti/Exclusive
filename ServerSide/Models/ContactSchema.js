const mongoose = require('mongoose');

const ContactSchema = new  mongoose.Schema(
{
    name: {type : String, required: true},
    email: {type : String, required: true},
    phone: {type : Number, required: true},
    message: {type : String, required: true},
},
{
    timestamps: true,
}
);

const ContactModel = mongoose.model('Contact-Message',ContactSchema);

module.exports = ContactModel;

