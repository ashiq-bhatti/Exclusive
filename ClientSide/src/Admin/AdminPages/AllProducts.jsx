import React, { useEffect, useState } from "react";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars-2";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const FetchProducts = async () => {
      try {
        const request = await axios.get(
          "http://localhost:8000/api/product/fetch-product"
        );
        const response = request.data;
        if (request.status === 200) {
          setProducts(response.product);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchProducts();
  }, []);
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-96 ">        

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400   ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Index
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>

                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody className="capitalize   ">
              {products && products.length > 0 ? (
                products.map((product, index) => (
                  <tr key={product.id || index}>
                    <td className="px-6 py-4">{index + 1}</td>

                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src={`http://localhost:8000/public/images/${product.image}`}
                        alt=""
                        className="h-10 w-10 m-auto"
                      />
                    </th>
                    <td className="px-6 py-4">{product.title}</td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">${product.price}</td>
                    <td className="px-6 py-4">{product.quantity}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <p className="text-center p-10">Not Product here</p>
              )}
            </tbody>
          </table>
        
      </div>
    </>
  );
}

export default AllProducts;
