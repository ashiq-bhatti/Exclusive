const ProductModel = require("../Models/Product.js");

const ListProduct = async (req, res) => {
  try {
    const {
      category,
      subcategory,
      title,
      description,
      price,
      quantity,
      image,
      rating,
      reviews,
      discount_percent,
      discount_price,
    } = req.body;

    const ExistsProduct = await ProductModel.findOne({ title });
    if (ExistsProduct) {
      return res
        .status(401)
        .json({ status: false, message: "Product Already Exists" });
    }

    
    const newProduct = new ProductModel({
      category,
      subcategory,
      title,
      description,
      price,
      quantity,
      image,
      rating,
      reviews,
      discount_percent,
      discount_price,
    });

    await newProduct.save();

    res
      .status(200)
      .json({ success: true, message: "Product Added Successfully" });

  } catch (error) {
    console.log("Error in AddProduct>>>", error);
    res.status(500).json({ success: false, message: "Server Internel Error" });
  }
};


module.exports = { ListProduct };
