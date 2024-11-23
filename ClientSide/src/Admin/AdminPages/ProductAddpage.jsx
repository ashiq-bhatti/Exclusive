import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
function ProductAddpage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subcategory: "",
    price: "",
    off_percent: "",
    discount_price: "",
    quantity: "",
    rating: "",
    reviews: "",
    description: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const {
      title,
      category,
      subcategory,
      price,
      off_percent,
      discount_price,
      quantity,
      rating,
      reviews,
      description,
      image,
    } = formData;

    try {
      const request = await axios.post(
        "http://localhost:4000/api/admin/add-product",
        {
          title,
          category,
          subcategory,
          price,
          off_percent,
          discount_price,
          quantity,
          rating,
          reviews,
          description,
          image,
        }
      );
      const response = request.data;
      if (response.status === 200) {
        toast.success("Product added successfully");
        toast.success(response.message);
      }

      console.log(response);
    } catch (error) {
      toast(error.message);
      console.log(error.message);
    }
  };
  return (
    <>
      {/* Add product form */}
      <div>
        <form onSubmit={handleSubmit}  enctype="multipart/form-data">
          <div className="w-[80%]  m-auto bg-slate-50  p-6 md:space-y-6 ">
            <div className="w-full flex flex-col sm:flex-row md:flex-flex-row space-x-6 space-y-3 justify-center items-center   ">
              <div className="w-full space-y-2">
                <label className="text-lg">Product Name:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-2  rounded-md"
                />
              </div>
              <div className="w-full space-y-2">
                <label className="text-lg">Category:</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-2   rounded-md"
                />
              </div>
              <div className="w-full space-y-2">
                <label className="text-lg">Sub-category:</label>
                <input
                  type="text"
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-2   rounded-md"
                />
              </div>
            </div>

            <div className=" w-full flex flex-col sm:flex-row md:flex-flex-row space-x-6 space-y-3 justify-center items-center ">
              <div className="w-full space-y-2">
                <label className="text-lg">Price:</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-2  rounded-md"
                />
              </div>
              <div className="w-full space-y-2 flex flex-col">
                <label className="text-lg">Off :</label>
                <select
                  type="number"
                  name="off_percent"
                  value={formData.off_percent}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-2   rounded-md"
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
              <div className="w-full space-y-2 flex flex-col">
                <label className="text-lg">Quantity :</label>
                <select
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-2  rounded-md"
                >
                  <option value="">Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                </select>
              </div>
              <div className="w-full space-y-2">
                <label className="text-lg">Dicount Price:</label>
                <input
                  type="number"
                  name="discount_price"
                  value={formData.discount_price}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-2   rounded-md"
                />
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row md:flex-flex-row space-x-6 space-y-3 justify-center items-center ">
              <div className="w-full space-y-2">
                <label className="text-lg">Rating:</label>
                <select
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full p-2   rounded-md"
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4">4</option>
                  <option value="4">4.5</option>
                  <option value="5">5</option>
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
                  className="w-full p-2   rounded-md"
                />
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row md:flex-flex-row space-x-6 space-y-3 justify-center items-center ">
              <div className="w-full space-y-2">
                <label className="text-lg">Description:</label>
                <textarea
                  type="number"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  className="w-full p-2  rounded-md"
                  cols={5}
                  rows={5}
                ></textarea>
              </div>
              <div className="w-full space-y-2">
                <label className="text-lg">Image:</label>
                <input
                  type="file"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full   bg-slate-800  rounded-md"
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
