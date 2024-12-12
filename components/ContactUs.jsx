"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // To show success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when input changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate input fields
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form data to Formspree
      try {
        const response = await fetch("https://formspree.io/f/manyzarb", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", phone: "", message: "" }); // Clear the form
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setStatus("error");
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="assets/bg2.jpg"
          alt="Background Texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 max-w-4xl">
        <h1 className="text-white text-4xl font-bold mb-6">
          Let’s <span className="text-[#ffc300]">talk</span>
        </h1>
        <p className="text-gray-300 mb-10 leading-relaxed">
          At Web Builders Studio, we transform ideas into reality. Our team of
          experienced professionals specializes in creating modern,
          user-friendly websites that help businesses thrive. From responsive
          designs to seamless functionality, we deliver premium solutions
          tailored to your needs. Let’s collaborate to build something
          extraordinary and take your business to the next level.
        </p>

        {/* Form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
          onSubmit={handleSubmit}
        >
          {/* First Column */}
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-2 border-b border-gray-600 bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-2 border-b border-gray-600 bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full py-2 border-b border-gray-600 bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-20">
            <div>
              <textarea
                name="message"
                placeholder="Tell us about your project."
                value={formData.message}
                onChange={handleChange}
                className="w-full py-2 border-b border-gray-600 bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400 leading-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-2 text-[#ffc300] border border-[#ffc300] hover:border-white font-semibold rounded-md hover:text-white transition-all"
              >
                Send{" "}
                <span className="ml-2">
                  <IoIosArrowRoundForward className="text-2xl" />
                </span>
              </button>
            </div>
          </div>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-500 mt-10">
            Your message has been sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-10">
            Oops! Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
