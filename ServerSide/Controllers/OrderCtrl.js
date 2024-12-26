const OrderModel = require("../Models/OrderModel.js");
const UserModel = require("../Models/user.js");
const Stripe = require("stripe");
const dotenv = require("dotenv");
dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const PlaceOrder = async (req, res) => {
  const frontEnd_url = "http://localhost:5173";
  try {
    const newOrder = new OrderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await UserModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.title },

        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: { name: "Delivery Charges" },
        unit_amount: 300, // 3 USD in cents
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontEnd_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontEnd_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.status(200).json({ success: true, session_url: session.url });
  } catch (error) {
    console.log("Error in PlaceOrder:", error.message);
    res.status(500).json({
      success: false,
      message: "Product Order has been Failed",
      error: error.message,
    });
  }
};

const verifyOrder = async (req, res) => {
  try {
    const { orderId, success } = req.body;
    if (success == true) {
      await OrderModel.findByIdAndUpdate(orderId, { payment: true });
      res
        .status(200)
        .json({ success: true, message: "Payment Successful Paid" });
    } else {
      await OrderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment Not Paid" });
    }
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: "Payment verify error>>",
      error: error.message,
    });
  }
};

module.exports = { PlaceOrder, verifyOrder };
