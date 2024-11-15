const express = require("express");
const app = express();
const dotenv =require('dotenv');
const DbConnection = require("./Utils/db.js");
const cors = require("cors");
const AuthRoutes = require("./Routes/AuthRoutes.js");
const AdminRoute = require("./Routes/AdminRoutes.js");
const ProductRoute = require("./Routes/ProductRoutes.js");


const PORT = process.env.PORT || 4000;

dotenv.config();
app.use(cors());
app.use(express.json());
DbConnection();
 

app.use('/api/auth',AuthRoutes);
app.use('/api/admin',AdminRoute);
app.use('/api/admin', ProductRoute);


app.get("/", (req, res) => {
  res.send("Welcome to Server Home Page");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
