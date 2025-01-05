import axios from "axios";
import React, { useContext, useEffect,  } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

const VerifyOrderSpinner = () => {
    const { backend_url } = useContext(StoreContext);
    const navigate = useNavigate();

  const [searchParams, setsearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  console.log(success, orderId);

  const verifyOrder = async (req, res) => {
    const response = await axios.post(`${backend_url}/api/order/verify-order`, {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/account-page");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyOrder();
  }, []);

  return (
    <>
      <div className="verify h-8 my-7  grid">
        <div className="spinner w-12 h-12    place-self-center border-2 border-gray-200 rounded-full border-t-black animate-spin"></div>
      </div>
    </>
  );
};

export default VerifyOrderSpinner;
