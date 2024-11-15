const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    off_percent: { type: Number, default: 20 },
    discount_price: { type: Number, default: 40 },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;
