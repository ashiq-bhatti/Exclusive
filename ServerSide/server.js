const express = require("express");
const dotenv = require("dotenv");
const DbConnection = require("./Utils/db.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const AuthRoutes = require("./Routes/AuthRoutes.js");
const AdminRoute = require("./Routes/AdminRoutes.js");
const ProductRoute = require("./Routes/ProductRoutes.js");
const ContactRoutes = require("./Routes/ContactRoutes.js");
const EdditProfileRoutes = require("./Routes/EditProfileRoutes.js");
const CartRoutes = require("./Routes/CartRoutes.js");
const OrderRoutes = require("./Routes/OrderRoutes.js");
const wishListRoutes = require("./Routes/WishListRoutes.js");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://exclusiveclientside.vercel.app"], 
    credentials: true,  
    methods: "GET,POST,PUT,DELETE",
  })
);

app.use(cookieParser());
app.use(express.json());
DbConnection();

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/auth", AuthRoutes);
app.use("/api/admin", AdminRoute);
app.use("/api/product", ProductRoute);
app.use("/api/contact", ContactRoutes);
app.use("/api/profile", EdditProfileRoutes); 
app.use("/api/cart", CartRoutes);
app.use("/api/order", OrderRoutes);
app.use("/api/wishlist", wishListRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Server Home Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
