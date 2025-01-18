import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "../Context/StoreContext";
import HOC from "../Components/HOC";
const MyorderPage = () => {
  const { token } = useContext(StoreContext);
  const [userOrder, setUserOrder] = useState([]);

  const fetchUserOrder = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/order/fetch-user-order",{ },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        setUserOrder(response.data.orders);
        console.log('response',response.data.orders);
    } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching user orders:", error.response?.data || error.message);
    }
  };
    useEffect(() => {
      if (token) {
        fetchUserOrder();
      }
    }, [token]);
    
  return (
    <>
      <div className="relative overflow-x-auto h-96 w-[80%] m-auto my-14">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Index No
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
               Status
              </th>
            </tr>
          </thead>
          <tbody>
            {userOrder.length > 0 ? (
              userOrder.map((order, index) => (
                <tr
                  key={order._id || index}
                  className="bg-white dark:bg-gray-800 border-b border-gray-400  border-gry-100 "
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">
                    <img
                      src={
                        order.image ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrn_80I-lMAa0pVBNmFmQ7VI6l4rr74JW-eQ&s"
                      }
                      alt="Product"
                      className="w-16 h-16 object-cover"
                    />
                  </td>{" "}
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {order.items.map(
                      (item) => item.title + " x " + item.quantity + " , "
                    ) || "N/A"}
                  </td>
                  <td className="px-6 py-4">
                    {`${order.address.fname || "N/A"}, ${
                      order.address.streetAddress || "N/A"
                    }, ${order.address.city || "N/A"}, ${
                      order.address.phone || "N/A"
                    }`}
                  </td>
                  <td className="px-6 py-4">{item.quantity || 0 }</td>
                  <td className="px-6 py-4">{order.amount || "N/A"}</td>
                  <td className="px-6 py-4">
                    {order.status || "N/A"}</td>
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-10">
                  No Products Ordered
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HOC(MyorderPage);
