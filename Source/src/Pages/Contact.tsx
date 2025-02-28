import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { JSONtoFormData } from "../Utils/Array";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

function Contact() {
  const [formData, setFormData] = useState({
    Email: "",
    Phone: "",
    Message: "",
  });

  const [errors, setErrors] = useState({
    Email: "",
    Phone: "",
    Message: "",
  });

  const [isRequested, setIsRequested] = useState(false);

  // Updated phone regex to allow international formats
  const phoneRegex =
    /^\+?[1-9]\d{0,2}?[ -]?(\(\d{1,4}\)|\d{1,4})[ -]?\d{1,4}[ -]?\d{1,4}[ -]?\d{0,9}$/;

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate Inputs
    let errorMsg = "";
    if (name === "Email" && !value.includes("@")) {
      errorMsg = "Invalid Email format";
    } else if (name === "Phone" && !phoneRegex.test(value)) {
      errorMsg = "Invalid phone number format";
    } else if (name === "Message" && value.length < 5) {
      errorMsg = "Message must be at least 5 characters long";
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  function Submit() {
    setIsRequested(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbznL2PsaH4_TRkJSYAH4wI7UNQDZpGcFipcalnf8e-eT8fPHwTNpXbWyIg2GTRv-2Ea/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: JSONtoFormData(formData),
      }
    )
      .then((data: Response) => {
        console.log(data);
      })
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "Message Sent",
          theme: "dark",
        });
        setIsRequested(false);
      });
  }
  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="absolute inset-0 bg-gray-900">
        <iframe
          title="map"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271698.654867447!2d76.13531975709974!3d9.976539116790994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1740770832068!5m2!1sen!2sin"
          style={{
            filter: "grayscale(1) contrast(1.2) opacity(0.4)",
            border: "none",
            margin: "0",
            overflow: "hidden",
          }}
        ></iframe>
      </div>
      <div className="container px-5 py-5 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            Send me a message and I will get back to you as soon as possible.
            You will also find me on social media platforms (I have linked them
            below in the Footer).
          </p>
          <div className="relative mb-4">
            <label htmlFor="Email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              onChange={handleChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.Email && (
              <p className="text-red-500 text-xs mt-1">{errors.Email}</p>
            )}
          </div>
          <div className="relative mb-4">
            <label htmlFor="Phone" className="leading-7 text-sm text-gray-400">
              Phone
            </label>
            <input
              type="string"
              id="Phone"
              onChange={handleChange}
              name="Phone"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.Phone && (
              <p className="text-red-500 text-xs mt-1">{errors.Phone}</p>
            )}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="Message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="Message"
              name="Message"
              onChange={handleChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            className={`text-white ${
              isRequested ? "bg-grey-700" : "bg-indigo-500"
            } border-0 py-2 px-6 focus:outline-none ${
              isRequested ? "" : "hover:bg-indigo-600"
            } rounded text-lg`}
            onClick={Submit}
            disabled={isRequested}
          >
            {isRequested ? <CircularProgress /> : "Send"}
          </button>
          <p className="text-xs text-gray-400 text-opacity-90 mt-3">
            Please wait till a pop says "Message Sent" before clicking it again.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
