import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import { toast } from "react-hot-toast";

const VerifyOrderSpinner = () => {
  const { backend_url } = useContext(StoreContext); 
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const success = searchParams.get("success") === "true"; 
  const orderId = searchParams.get("orderId");
  console.log("Order Verification:", { success, orderId });

  const verifyOrder = async () => {
    try {
      const response = await axios.post(`${backend_url}/api/order/verify-order`, {
        success,
        orderId,
      });

      if (response.data.success) {
        navigate("/my-order-page"); 
        toast.success("Order Created successful");

      } else {
        navigate("/"); 
        toast.error("Failed to verify order");
      }
    } catch (error) {
      console.error("Error verifying order:", error.message);
      navigate("/"); 
    }
  };

  useEffect(() => {
    if (success !== null && orderId) {
      verifyOrder(); 
    }
  }, [success, orderId]); 

  return (
    <div className="verify h-8 my-7 grid">
      <div className="spinner w-12 h-12 place-self-center border-2 border-gray-200 rounded-full border-t-black animate-spin"></div>
    </div>
  );
};

export default VerifyOrderSpinner;
