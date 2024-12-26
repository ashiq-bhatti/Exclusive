const mongoose = require("mongoose");

const DbConnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGOOSE_URL}/${process.env.DB_NAME}`);
    
    console.log("DataBase Connected successfully!");
  } catch (error) {
    console.log("Error  occore in connecting Db >>> " + error);
  }
};

module.exports = DbConnection;
