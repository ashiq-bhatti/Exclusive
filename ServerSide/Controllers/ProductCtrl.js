const ProductModel = require("../Models/Product.js");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage }).single("image");

const AddProduct = async (req, res) => {
  try {
    const {
      title,
      category,
      subcategory,
      price,
      off_percent,
      discount_price,
      quantity,
      rating,
      reviews,
      description,
    } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!image) {
      return res
        .status(400)
        .json({ status: false, message: "Image is required" });
    }

    const ExistsProduct = await ProductModel.findOne({ title });
    if (ExistsProduct) {
      return res
        .status(401)
        .json({ status: false, message: "Product Already Exists" });
    }

    const newProduct = new ProductModel({
      title,
      category,
      subcategory,
      price,
      off_percent,
      discount_price,
      quantity,
      rating,
      reviews,
      description,
      image,
    });

    await newProduct.save();

    res.status(200).json({
      success: true,
      message: "Product Added Successfully",
      newProduct,
    });
  } catch (error) {
    console.log("Error in AddProduct>>>", error);
    res.status(500).json({ success: false, message: "Server Internal Error" });
  }
};

const FetchProduct = async (req, res) => {
  try {
    const product = await ProductModel.find();
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "No Product Found" });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.log("Error in Fetch Product >>>", error);
    res.status(500).json({ success: false, message: "Server Internel Error" });
  }
};

const UpdateProduct = async (req, res) => {
  const { id: ProductId } = req.params;
  const product = await ProductModel.findByIdAndUpdate(ProductId, req.body, {
    new: true,
  });

  try {
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Product updated successfully",
        product,
      });
  } catch (error) {
    console.log("Error in UpdateProduct >>>", error);
    res.status(500).json({ success: false, message: "Server Internal Error" });
  }
};
const FetchProductById = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "No Product Found" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Product successfully fetch by id",
        product,
      });
  } catch (error) {
    console.log("Error in get product by id >>>", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const RemoveProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error in RemoveProduct >>>", error);
    res.status(500).json({ success: false, message: "Server Internal Error" });
  }
};

module.exports = {
  AddProduct,
  upload,
  FetchProduct,
  FetchProductById,
  RemoveProduct,
  UpdateProduct,
};
