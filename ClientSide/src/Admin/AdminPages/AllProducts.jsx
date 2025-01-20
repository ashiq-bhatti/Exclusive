import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function AllProducts() {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const nPage = Math.ceil(products.length / productsPerPage);
  const paginationNumbers = [...Array(nPage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchProducts = async () => {
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
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/product/delete-product-by-id/${id}`
      );
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchProducts();
    
  }, [handleDelete]);
  return (
    <>
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Index
          </th>
          <th scope="col" className="px-6 py-3">
            Image
          </th>
          <th scope="col" className="px-6 py-3">
            Product Name
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Quantity
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {currentProducts.length > 0 ? (
          currentProducts.map((product, index) => (
            <tr key={product.id || index}>
              <td className="px-6 py-4">
                {index + 1 + (currentPage - 1) * productsPerPage}
              </td>
              <td className="px-6 py-4">
                <img
                  src={`http://localhost:8000/public/images/${product.image}`}
                  alt=""
                  className="h-10 w-10"
                />
              </td>
              <td className="px-6 py-4">{product.title}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">${product.price}</td>
              <td className="px-6 py-4">{product.quantity}</td>
              <td className="px-6 py-4">
                <a href="#" className="text-blue-600 hover:underline">
                  Edit
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="#"
                  onClick={() => handleDelete(product._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="text-center py-4">
              No Products Available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

  {products.length > 0 && (
    <div className="flex justify-center items-center gap-2 mt-12">
      <button
        className="px-3 py-1 bg-gray-300 rounded"
        onClick={prePage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {paginationNumbers.map((number) => (
        <button
          key={number}
          className={`px-3 py-1 rounded ${
            currentPage === number ? "bg-customRed text-white" : "bg-gray-300"
          }`}
          onClick={() => changeNumber(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="px-3 py-1 bg-gray-300 rounded"
        onClick={nextPage}
        disabled={currentPage === nPage}
      >
        Next
      </button>
    </div>
  )}
</>

  );
}

export default AllProducts;
