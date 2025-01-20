import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

function ContactMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/contact/get-contact-message"
        );
        if (response.data.success) {
          setMessages(response.data.contact);
        } else {
          toast.error("Failed to fetch contact messages.");
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
        toast.error("An error occurred while fetching messages.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="flashSales-section-outer flex justify-center  mb-24">
      <div className="flashSales-section-inner w-[84%] m-auto ">
        <div className="flex   my-14">
          <Link className="text-gray-500" to="/admin">
            Admin /
          </Link>{" "}
          <span>Contact Messages</span>
        </div>

        <div className="contactMessagesSection">
          {loading ? (
            <p>Loading messages...</p>
          ) : messages.length > 0 ? (
            messages.map((message) => (
              <div
                key={message._id}
                className="messageCard  rounded shadow-md p-8 mb-6"
              >
                <h2 className="font-semibold">{message.name}</h2>
                <p ><span className="font-semibold">Email:</span>  {message.email}</p>
                <p >
                  {" "}
                  <span className="font-semibold">Phone:</span> {message.phone}
                </p>
                <p className="mt-3">
                  <span className="font-semibold">Message:</span>{" "}
                  {message.message}
                </p>
                <hr className="my-4" />
                <p className="font-semibold">
                  Received at: {new Date(message.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          ) : (
            <p>No contact messages found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactMessagesPage;
