import React, { useState } from "react";
import { SlCallEnd } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="flashSales-section-outer flex justify-center mb-24">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex items-center space-x-1 my-14">
            <h1 className="text-gray-500">
              <Link to="/">Home /</Link>{" "}
            </h1>
            <span>Contact</span>
          </div>

          {/* call to us and text boxes */}
          <div className="md:flex md:flex-row-reverse gap-10">

          <div className="rightTextboxes rounded shadow-md p-8">
              <div>
                <form className="" onSubmit={handleSubmit}>
                <div className="md:flex  gap-3">
                  <input
                    type="text"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Your Name"
                    className="rounded border-0 bg-customGray w-full"
                  />
                  <input
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Your Email"
                    name=""
                    id=""
                    className="rounded  border-0 bg-customGray w-full my-5 md:my-0"
                  />
                  <input
                    type="number"
                    onChange={handleChange}
                    value={formData.number}
                    placeholder="Your Phone"
                    name=""
                    id=""
                    className="rounded border-0 bg-customGray w-full"
                  />
                  </div>
                  <textarea
                    onChange={handleChange}
                    value={formData.message}
                    name=""
                    id=""
                    placeholder="Your Message"
                  
                    rows={8}
                    className="mt-6 rounded border-0 bg-customGray w-full"
                  ></textarea>
                </form>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className=" mt-5 text-white  bg-customRed py-2 px-3 md:py-3 md:px-10   rounded-md "
                >
                  Send Message
                </button>
              </div>
            </div>

            <div className="leftCall rounded shadow-md p-8">
              <div className="flex items-center space-x-4 mb-5">
                <div className="bg-customRed h-11 w-11  rounded-full flex items-center justify-center">
                  <div className="flex ">
                    <SlCallEnd className="text-white  h-6 w-6 -rotate-90" />
                  </div>
                </div>
                <p className="font-semibold">Call To Us</p>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p className=" mt-2">Phone: +923029047292</p>
              <div className="border-t w-full bg-gray-900 my-8"></div>

              <div className="flex items-center space-x-4 mb-5">
                <div className="bg-customRed h-11 w-11  rounded-full flex items-center justify-center">
                  <div className="flex ">
                    <MdOutlineMail className="text-white  h-6 w-6" />
                  </div>
                </div>
                <p className="font-semibold">Write To Us</p>
              </div>
              <p>
                Fill out our form and we will contact <br /> you within 24
                hours.
              </p>
              <p className=" mt-2">Emails: customer@exclusive.com</p>
              <p className=" mt-2">Emails: support@exclusive.com</p>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
