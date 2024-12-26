
const ContactModel = require("../Models/ContactSchema");

const Contact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const newContact = new ContactModel({name, email, phone, message});
 
    await newContact.save();
    res.status(200).json({
      success: true,
      message: "Contact information successfully sent",
      contact: newContact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};

const FetchContact = async (req, res) => {
  try {
    const contact = await ContactModel.find();
    if (!contact) {
      res.status(404).json({ success: false, message: "Contact messages not found" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Contact messages get successfully",
        contact,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server internal error" });
  }
};

module.exports = { Contact, FetchContact };
