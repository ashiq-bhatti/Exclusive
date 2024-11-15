const ProductModel = require("../Models/Product.js");


const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'-'+file.originalname)
  }
});

const upload = multer({ storage });
const uploadmidleware = upload.single('image');


const AddProduct = async (req, res) => {
  try {
    const {
      category,
      subcategory,
      title,
      description,
      price,
      quantity,
      rating,
      reviews,
      off_percent,
      discount_price,
      image,
    } = req.body;

    console.log(req.file)



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
      rating,
      reviews,
      off_percent,
      discount_price,
      image,
    });




    await newProduct.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Product Added Successfully",
        newProduct,
      });
  } catch (error) {
    console.log("Error in AddProduct>>>", error);
    res.status(500).json({ success: false, message: "Server Internel Error" });
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

module.exports = { AddProduct, upload,uploadmidleware, FetchProduct };
