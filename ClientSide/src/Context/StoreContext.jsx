import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { FlashSale } from "../StaticApi";

export const StoreContext = createContext(null);

const backend_url = "http://localhost:8000";
// const backend_url = "https://exclusiveserverside.vercel.app";

const StoreContextProvider = (props) => {

  const [product_List, setProduct_List] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");


  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      try {
        await axios.post(
          `${backend_url}/api/cart/add-to-cart`,
          { itemId },
          {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          }
        );
      } catch (error) {
        console.error(
          "Error adding to cart:",
          error.response?.data || error.message
        );
      }
    } else {
      console.error("Token is missing. User is not authenticated.");
    }
  };

  const removeItemFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        `${backend_url}/api/cart/remove-item-from-cart`,
        { itemId },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
    }
  };
  const loadCartData = async (token) => {
    
      if (!token) {
        console.error("No token provided. User is not authenticated.");
        return;
      } 
      const response = await axios.get(
        `${backend_url}/api/cart/get-item-from-cart`,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
  
      setCartItems(response.data.cartData);
    } 

    const totelAmoutOfCart = () => {
  let totelAmount = 0;
  for (let item in cartItems) {
    if (cartItems[item] > 0) {
      let productInfo = product_List.find((product) => product._id === item);
      if (productInfo) { 
        totelAmount += productInfo.price * cartItems[item];
      }
    }
  }
  return totelAmount;
};

  const fetchProductList = async () => {
    const response = await axios.get(
      `${backend_url}/api/product/fetch-product`
    );
    setProduct_List(response.data.product);
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchProductList();
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        await loadCartData(localStorage.getItem('token'));
      }
    };
    loadData();
  }, []);

  const contextValue = {
    backend_url,
    cartItems,
    setCartItems,
    FlashSale,
    product_List,
    setProduct_List,
    addToCart,
    removeItemFromCart,
    fetchProductList,
    token,
    setToken,
    totelAmoutOfCart
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
