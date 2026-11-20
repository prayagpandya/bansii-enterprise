"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "./assets/contactpng.webp";
import { toast } from "react-toastify";
import { SlCloudUpload } from "react-icons/sl";
const FindJob = () => {
  const [status, setStatus] = useState(null);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    number: "",
    pdf: null, // Change to null to handle file
    message: "",
  });
  const [isPhoneFieldTouched, setIsPhoneFieldTouched] = useState(false); // Define isPhoneFieldTouched state

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === "number") {
      setIsPhoneFieldTouched(true); // Set isPhoneFieldTouched to true when number input is changed
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setInputValues((prevValues) => ({
      ...prevValues,
      pdf: file, // Set pdf to the selected file
    }));
  };
  const toastSuccess = () => {
    toast.success("Form submitted successfully");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!inputValues.pdf) {
      toast.error("Please upload your resume PDF");
      return;
    }

    const formData = new FormData();
    formData.append("name", inputValues.name);
    formData.append("email", inputValues.email);
    formData.append("number", inputValues.number);
    formData.append("pdf", inputValues.pdf);
    formData.append("message", inputValues.message);

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      console.log("response", result);

      if (result.status === 200) {
        setInputValues({
          name: "",
          email: "",
          number: "",
          pdf: null,
          message: "",
        });
        const fileInput = document.getElementById("pdf");
        if (fileInput) {
          fileInput.value = ""; // Clear file input value
        }
        setIsPhoneFieldTouched(false);
        setStatus("success");
        toast.success(result.message || "Form submitted successfully");
      } else {
        setStatus("error");
        toast.error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      toast.error("Failed to submit form");
    }
  };
  return (
    <div className="mt-20 grid grid-cols-1 px-3 md:grid-cols-2">
      <div className="md:block hidden col-span-1">
        <h2 className="text-3xl xl:text-5xl bg-transparent pt-16 text-center text-gray-900">
          Find Opportunities
        </h2>
        <Image
          className="bg-transparent mix-blend-multiply w-4/5 mt-10"
          width={500}
          height={500}
          src={img1}
          alt="image1"
        />
      </div>
      <div className="col-span-1 md:mt-28 md:mr-28">
        <div className="py-12">
          <div className="w-full px-4 py-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white bg-transparent shadow-[rgb(0,116,230)] rounded-lg px-6 py-8 shadow-md"
            >
              <h1 className="text-3xl md:text-5xl mb-5 text-[rgb(0,116,230)] bg-transparent font-[700]">
                Apply For Jobs
              </h1>
              <div className="mb-4 bg-white relative flex">
                <input
                  name="name"
                  className="border-2 rounded-md peer py-4 px-2 bg-transparent w-full focus:border-[rgb(0,116,230)] focus:outline-none"
                  id="name"
                  type="text"
                  required
                  value={inputValues.name}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="name"
                  className={`absolute cursor-text bg-transparent top-5 ${
                    inputValues.name
                      ? "hidden"
                      : "peer-focus:text-xs peer-focus:-top-2 peer-focus:uppercase peer-focus:tracking-[2px] peer-focus:bg-[rgb(0,116,230)] peer-focus:px-1 peer-focus:text-white left-2 text-gray-400 transition-all duration-150"
                  }`}
                >
                  Name
                </label>
              </div>
              <div className="mb-4 relative flex bg-transparent">
                <input
                  name="number"
                  className="border-2 pl-10 rounded-md peer py-4 px-2 bg-transparent w-full focus:border-[rgb(0,116,230)] focus:outline-none"
                  id="number"
                  type="number"
                  required
                  value={inputValues.number}
                  onChange={handleInputChange}
                />
                <p
                  className={`absolute top-[28%] bg-transparent peer-focus-visible:block left-2 ${
                    isPhoneFieldTouched || inputValues.number
                      ? "peer-focus:block"
                      : "hidden"
                  }`}
                >
                  +91
                </p>
                <label
                  htmlFor="number"
                  className={`absolute cursor-text bg-transparent top-[17px] ${
                    inputValues.number
                      ? "hidden"
                      : "peer-focus:text-xs peer-focus:-top-2 peer-focus:uppercase peer-focus:tracking-[2px] peer-focus:bg-[rgb(0,116,230)] peer-focus:px-1 peer-focus:text-white left-2 text-gray-400 transition-all duration-150"
                  }`}
                >
                  Mobile Number
                </label>
              </div>
              <div className="mb-4 bg-transparent relative flex">
                <input
                  name="email"
                  className="border-2 rounded-md peer py-4 bg-transparent px-2 w-full focus:border-[rgb(0,116,230)] focus:outline-none"
                  id="email"
                  type="email"
                  required
                  value={inputValues.email}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="email"
                  className={`absolute cursor-text bg-transparent top-5 ${
                    inputValues.email
                      ? "hidden"
                      : "peer-focus:text-xs peer-focus:-top-2 peer-focus:uppercase peer-focus:tracking-[2px] peer-focus:bg-[rgb(0,116,230)] peer-focus:px-1 peer-focus:text-white left-2 text-gray-400 transition-all duration-150"
                  }`}
                >
                  Email
                </label>
              </div>
              <div className="mb-4 bg-transparent relative flex">
                <label
                  htmlFor="pdf"
                  className="border-2 border-gray-500 rounded-md py-4 px-2 text-center bg-transparent w-full focus:border-[rgb(0,116,230)] focus:outline-none cursor-pointer"
                >
                  {inputValues.pdf ? (
                    inputValues.pdf.name
                  ) : (
                    <span className="flex flex-col items-center justify-center w-full bg-transparent">
                      <SlCloudUpload className="scale-150 bg-transparent text-blue-600" />
                      upload resume only pdf acceptable
                    </span>
                  )}
                </label>
                <input
                  name="pdf"
                  id="pdf"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              <div className="mb-4 bg-transparent relative flex">
                <textarea
                  name="message"
                  className="border-2 rounded-md peer p-2 bg-transparent w-full focus:border-[rgb(0,116,230)] focus:outline-none"
                  id="message"
                  rows="6"
                  value={inputValues.message}
                  onChange={handleInputChange}
                ></textarea>
                <label
                  className={`absolute cursor-text bg-transparent top-5 ${
                    inputValues.message
                      ? "hidden"
                      : "peer-focus:text-xs peer-focus:-top-2 peer-focus:uppercase peer-focus:tracking-[2px] peer-focus:bg-[rgb(0,116,230)] peer-focus:px-1 peer-focus:text-white left-2 text-gray-400 transition-all duration-150"
                  }`}
                  htmlFor="message"
                >
                  Message
                </label>
              </div>
              <div className="flex bg-transparent justify-center">
                <button
                  className="bg-[rgb(0,116,230)] hover:text-[rgb(0,116,230)] hover:border-[rgb(0,116,230)] hover:border hover:bg-[rgb(172,213,255)] text-white font-bold py-2 xl:px-44 rounded px-24 focus:outline-none focus:shadow-outline text-xl"
                  type="submit"
                >
                  Send
                </button>
              </div>
              {status === "success" && (
                <p className="text-green-500 text-center mt-4">
                  Your message has been sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center mt-4">
                  There was an error sending your message.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJob;
