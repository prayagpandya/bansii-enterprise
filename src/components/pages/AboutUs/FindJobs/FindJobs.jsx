"use client";
import React, { useState } from "react";
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
    pdf: null,
    message: "",
  });
  const [isPhoneFieldTouched, setIsPhoneFieldTouched] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === "number") {
      setIsPhoneFieldTouched(true);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setInputValues((prevValues) => ({
      ...prevValues,
      pdf: file,
    }));
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
          fileInput.value = "";
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="hidden lg:flex lg:col-span-6 flex-col items-center space-y-6">
          <h2 className="text-3xl xl:text-4xl font-bold text-[#0E2E71] text-center">
            Find Opportunities
          </h2>
          <Image
            className="w-4/5 max-w-md h-auto object-contain"
            width={500}
            height={500}
            src={img1}
            alt="Careers at Bansi Enterprise"
          />
        </div>

        <div className="lg:col-span-6 w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 space-y-5"
          >
            <h2 className="text-3xl sm:text-4xl text-[#0C2C69] font-bold">
              Apply For Jobs
            </h2>

            <div className="relative flex">
              <input
                name="name"
                className="border-2 border-slate-200 rounded-lg peer py-3.5 px-3.5 bg-white w-full focus:border-[#0C2C69] focus:outline-none"
                id="job-name"
                type="text"
                required
                value={inputValues.name}
                onChange={handleInputChange}
              />
              <label
                htmlFor="job-name"
                className={`absolute cursor-text left-3.5 top-4 ${
                  inputValues.name
                    ? "hidden"
                    : "peer-focus:text-xs peer-focus:-top-2.5 peer-focus:uppercase peer-focus:tracking-wider peer-focus:bg-[#0C2C69] peer-focus:px-1.5 peer-focus:py-0.5 peer-focus:rounded peer-focus:text-white text-slate-400 transition-all duration-150"
                }`}
              >
                Name
              </label>
            </div>

            <div className="flex items-stretch rounded-lg border-2 border-slate-200 bg-white focus-within:border-[#0C2C69]">
              <span className="inline-flex items-center px-3.5 bg-slate-50 border-r border-slate-200 text-slate-700 font-semibold text-sm rounded-l-md select-none">
                +91
              </span>
              <div className="relative flex-1">
                <input
                  name="number"
                  className="peer py-3.5 px-3.5 bg-transparent w-full border-0 focus:outline-none focus:ring-0 shadow-none rounded-r-md"
                  id="job-number"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  required
                  value={inputValues.number}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="job-number"
                  className={`absolute cursor-text left-3.5 top-3.5 ${
                    inputValues.number
                      ? "hidden"
                      : "peer-focus:text-xs peer-focus:-top-2.5 peer-focus:uppercase peer-focus:tracking-wider peer-focus:bg-[#0C2C69] peer-focus:px-1.5 peer-focus:py-0.5 peer-focus:rounded peer-focus:text-white text-slate-400 transition-all duration-150"
                  }`}
                >
                  Mobile Number
                </label>
              </div>
            </div>

            <div className="relative flex">
              <input
                name="email"
                className="border-2 border-slate-200 rounded-lg peer py-3.5 px-3.5 bg-white w-full focus:border-[#0C2C69] focus:outline-none"
                id="job-email"
                type="email"
                required
                value={inputValues.email}
                onChange={handleInputChange}
              />
              <label
                htmlFor="job-email"
                className={`absolute cursor-text left-3.5 top-4 ${
                  inputValues.email
                    ? "hidden"
                    : "peer-focus:text-xs peer-focus:-top-2.5 peer-focus:uppercase peer-focus:tracking-wider peer-focus:bg-[#0C2C69] peer-focus:px-1.5 peer-focus:py-0.5 peer-focus:rounded peer-focus:text-white text-slate-400 transition-all duration-150"
                }`}
              >
                Email
              </label>
            </div>

            <div className="flex">
              <label
                htmlFor="pdf"
                className="border-2 border-dashed border-slate-300 hover:border-[#0C2C69] rounded-lg py-5 px-4 text-center bg-slate-50 w-full cursor-pointer transition-colors"
              >
                {inputValues.pdf ? (
                  <span className="text-sm font-medium text-[#0C2C69]">
                    {inputValues.pdf.name}
                  </span>
                ) : (
                  <span className="flex flex-col items-center justify-center gap-2 text-sm text-slate-600">
                    <SlCloudUpload className="w-6 h-6 text-[#0C2C69]" />
                    <span>Upload resume (PDF only)</span>
                  </span>
                )}
              </label>
              <input
                name="pdf"
                id="pdf"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            <div className="relative flex">
              <textarea
                name="message"
                className="border-2 border-slate-200 rounded-lg peer p-3.5 bg-white w-full focus:border-[#0C2C69] focus:outline-none"
                id="job-message"
                rows={5}
                value={inputValues.message}
                onChange={handleInputChange}
              />
              <label
                className={`absolute cursor-text left-3.5 top-4 ${
                  inputValues.message
                    ? "hidden"
                    : "peer-focus:text-xs peer-focus:-top-2.5 peer-focus:uppercase peer-focus:tracking-wider peer-focus:bg-[#0C2C69] peer-focus:px-1.5 peer-focus:py-0.5 peer-focus:rounded peer-focus:text-white text-slate-400 transition-all duration-150"
                }`}
                htmlFor="job-message"
              >
                Message
              </label>
            </div>

            <button
              className="w-full bg-[#0C2C69] hover:bg-[#0d9cd4] text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-lg"
              type="submit"
            >
              Submit Application
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm text-center">
                Your application has been sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm text-center">
                There was an error sending your application.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FindJob;
