const mongoose = require("mongoose");
const  DB_NAME = require('./constants.js');


const DbConnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`);
    console.log("Mongoose Connected successfully!");
  } catch (error) {
    console.log("Error  occore in connecting Db >>> " + error);
  }
};

module.exports = DbConnection;
