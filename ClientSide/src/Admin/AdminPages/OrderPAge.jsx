import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderPage = () => {
  const [productOrder, setProductOrder] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/order/product-order"
      );

      if (response.data.success) {
        setProductOrder(response.data.order);
      } else {
        console.error("Failed to fetch orders:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    }
  };
  const OrderStatusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/order/order-status-update",
        { orderId, status: event.target.value }
      );
      if (response.data.success) {
        fetchProducts();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto w-full mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3 md:px-6 md:py-3">
                Index No
              </th>
              <th scope="col" className="px-4 py-3 md:px-6 md:py-3">
                Image
              </th>
              <th scope="col" className="px-4 py-3 md:px-6 md:py-3">
                Product Name
              </th>
              <th scope="col" className="px-4 py-3 md:px-6 md:py-3">
                Address
              </th>
              <th scope="col" className="px-4 py-3 md:px-6 md:py-3">
                Items Count
              </th>
              <th scope="col" className="px-4 py-3 md:px-6 md:py-3">
                Amount
              </th>
              <th scope="col" className="px-4 py-3 md:px-6 md:py-3">
                Update Status
              </th>
            </tr>
          </thead>
          <tbody>
            {productOrder.length > 0 ? (
              productOrder.map((order, index) => (
                <tr
                  key={order._id || index}
                  className="bg-white dark:bg-gray-800 border-b border-gray-400"
                >
                  <td className="px-4 py-4 md:px-6 md:py-4">{index + 1}</td>
                  <td className="px-4 py-4 md:px-6 md:py-4">
                    <img
                      src={
                        order.image ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrn_80I-lMAa0pVBNmFmQ7VI6l4rr74JW-eQ&s"
                      }
                      alt="Product"
                      className="w-12 h-12 md:w-16 md:h-16 object-cover"
                    />
                  </td>
                  <td className="px-4 py-4 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {order.items && order.items.length > 0
                      ? order.items.map((item, index) => (
                          <span key={item.title}>
                            {item.title} x {item.quantity}
                            {index < order.items.length - 1 && ","}{" "}
                            <br />
                          </span>
                        ))
                      : "N/A"}
                  </td>

                  <td className="px-4 py-4 md:px-6 md:py-4">
                    {`${order.address.fname || "N/A"}, ${
                      order.address.streetAddress || "N/A"
                    }, ${order.address.city || "N/A"}, ${
                      order.address.phone || "N/A"
                    }`}
                  </td>
                  <td className="px-4 py-4 md:px-6 md:py-4">
                    {order.items.length || 0}
                  </td>
                  <td className="px-4 py-4 md:px-6 md:py-4">
                    {order.amount || "N/A"}
                  </td>
                  <td className="px-4 py-4 md:px-6 md:py-4">
                    <select
                      onChange={(event) => OrderStatusHandler(event, order._id)}
                      value={order.status}
                      className="p-2 rounded-md"
                    >
                      <option value="Product Processing">
                        Product Processing
                      </option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="On the way">On the way</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-10">
                  No Products Ordered
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
