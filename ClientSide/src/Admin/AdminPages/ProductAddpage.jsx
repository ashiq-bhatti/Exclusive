import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function ProductAddpage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subcategory: "",
    price: "",
    off_percent: "",
    discount_price: "",
    quantity: "",
    eventCategory: "",
    rating: "",
    reviews: "",
    description: "",
    images: [], 
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      setFormData({ ...formData, [name]: Array.from(files) }); 
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "images") {
        formData[key].forEach((image) => {
          formDataToSend.append("images", image);
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/product/add-product",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        toast.success("Product added successfully");
        navigate("/admin/all-products");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="w-full max-w-4xl m-auto bg-slate-50 p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full space-y-2">
                <label className="text-lg">Product Name:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-0.5 md:p-0.5  rounded-md"
                />
              </div>

              <div className="w-full space-y-2">
                <label className="text-lg">Category:</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-0.5 md:p-1 rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Woman Fashion">Woman Fashion</option>
                  <option value="Men Fashion">Men Fashion</option>
                  <option value="Electric">Electric</option>
                  <option value="Home LifeStyle">Home LifeStyle</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Sport Outdoor">Sport Outdoor</option>
                  <option value="Boy Toys">Boy Toys</option>
                  <option value="Groceries Pets">Groceries Pets</option>
                  <option value="Health Beauty">Health Beauty</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full space-y-2">
                <label className="text-lg">Sub-category:</label>
                <input
                  type="text"
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-0.5 md:p-1 rounded-md"
                />
              </div>
              <div className="w-full space-y-2">
                <label className="text-lg">Quantity:</label>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full p-0.5 md:p-1 rounded-md"
                >
                  <option value="">Select</option>
                  {[...Array(15)].map((_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full space-y-2">
                <label className="text-lg"> Discount Price:</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-0.5 md:p-1 rounded-md"
                />
              </div>

              <div className="w-full space-y-2">
                <label className="text-lg">Off :</label>
                <select
                  name="off_percent"
                  value={formData.off_percent}
                  onChange={handleChange}
                  className="w-full p-0.5 md:p-1 rounded-md"
                >
                  <option value="">Select</option>
                  <option value="20">20%</option>
                  <option value="25">25%</option>
                  <option value="30">30%</option>
                  <option value="35">35%</option>
                  <option value="40">40%</option>
                  <option value="50">50%</option>
                  <option value="60">60%</option>
                  <option value="70">70%</option>
                </select>
              </div>

              <div className="w-full space-y-2">
                <label className="text-lg"> Price:</label>
                <input
                  type="number"
                  name="discount_price"
                  value={formData.discount_price}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-0.5 md:p-1 rounded-md"
                />
              </div>
              <div className="w-full space-y-2">
                <label className="text-lg">Category By Event:</label>
                <select
                  name="eventCategory"
                  value={formData.eventCategory}
                  onChange={handleChange}
                  className="w-full p-0.5 md:p-1 rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Today">Today Sale</option>
                  <option value="This Month">This Month</option>
                  <option value="Our Products">Our Products</option>
                  <option value="NewArrivals">New Arrivals</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full space-y-2">
                <label className="text-lg">Rating:</label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full p-0.5 md:p-1 rounded-md"
                >
                  <option value="">Select</option>
                  {[1, 2, 3, 3.5, 4, 4.5, 5].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full space-y-2">
                <label className="text-lg">Review:</label>
                <input
                  type="number"
                  name="reviews"
                  value={formData.reviews}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-0.5 md:p-1 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full space-y-2">
                <label className="text-lg">Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  className="w-full p-0.5 md:p-1 rounded-md"
                  rows="5"
                ></textarea>
              </div>

              <div className="w-full space-y-2">
                <label className="text-lg">Image:</label>
                <input
                  type="file"
                  name="images"
                  multiple
                  onChange={handleChange}
                  className="w-full bg-slate-800 rounded-md"
                />
              </div>
            </div>

            <div className="flex justify-end my-10 items-center">
              <button
                type="submit"
                className="text-white bg-customRed hover:bg-red-500 px-8 py-2 rounded-md"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductAddpage;
