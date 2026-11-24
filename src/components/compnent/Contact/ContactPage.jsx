"use client";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

import img2 from "./assets/01.webp";
import img1 from "./assets/contactpng.webp";
import ContactHero from "./sector private/ContactHero";
import submitContact from "./action";

const WHATSAPP_NUMBER = "917890000076";

const NAME_REGEX = /^[A-Za-z][A-Za-z\s.'-]{1,79}$/;
const PHONE_INPUT_REGEX = /^\d{0,10}$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
const MESSAGE_REGEX = /^[\s\S]{5,1000}$/;

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "number" && !PHONE_INPUT_REGEX.test(value)) {
      return;
    }

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const validateForm = ({ name, number, email, message }) => {
    const nextErrors = {};

    if (!NAME_REGEX.test(name.trim())) {
      nextErrors.name =
        "Enter a valid name (letters and spaces only, min 2 characters).";
    }
    if (!PHONE_REGEX.test(number.trim())) {
      nextErrors.number =
        "Enter a valid 10-digit Indian mobile number starting with 6–9.";
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      nextErrors.email = "Enter a valid email address (e.g. name@example.com).";
    }
    if (!MESSAGE_REGEX.test(message.trim())) {
      nextErrors.message = "Please enter a message (5–1000 characters).";
    }

    return nextErrors;
  };

  const buildWhatsAppMessage = ({ name, number, email, message }) => {
    return [
      "Hello Bansi Enterprise,",
      "",
      "I would like to connect with the following inquiry details:",
      `Name: ${name.trim()}`,
      `Mobile: +91 ${number.trim()}`,
      `Email: ${email.trim()}`,
      `Message: ${message.trim()}`,
    ].join("\n");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(inputValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      const firstError = Object.values(validationErrors)[0];
      toast.error(firstError);
      return;
    }

    const trimmedName = inputValues.name.trim();
    const trimmedNumber = inputValues.number.trim();
    const trimmedEmail = inputValues.email.trim();
    const trimmedMessage = inputValues.message.trim();

    const whatsappText = buildWhatsAppMessage({
      name: trimmedName,
      number: trimmedNumber,
      email: trimmedEmail,
      message: trimmedMessage,
    });

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappText
    )}`;

    const openedWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
    if (!openedWindow) {
      window.location.href = whatsappUrl;
    }

    // Best-effort optional backend persistence without blocking WhatsApp launch.
    submitContact({
      name: trimmedName,
      email: trimmedEmail,
      number: trimmedNumber,
      message: trimmedMessage,
    }).catch(() => {});

    setStatus("success");
    setErrors({});
    setInputValues({
      name: "",
      email: "",
      number: "",
      message: "",
    });
    toast.success("Opening WhatsApp with your message...");
  };

  return (
    <div>
      <ContactHero
        img={img2}
        title="Contact Us"
        classnameContainer="bg-cover bg-center"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="hidden lg:flex lg:col-span-6 flex-col items-center space-y-6">
            <h2 className="text-3xl font-bold text-[#0C2C69] uppercase tracking-wide text-center">
              How Can We Help You?
            </h2>
            <Image
              className="w-4/5 max-w-md h-auto object-contain"
              width={500}
              height={500}
              src={img1}
              alt="Contact Bansi Enterprise"
            />
          </div>

          <div className="lg:col-span-6 w-full">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white border border-slate-200 shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 space-y-5"
            >
              <div className="space-y-1">
                <h2 className="text-3xl sm:text-4xl text-[#0C2C69] font-bold">
                  Get in Touch
                </h2>
                <p className="text-sm text-slate-500">
                  Fill out the form below and send your inquiry directly via
                  WhatsApp.
                </p>
              </div>

              <div>
                <div className="relative flex">
                  <input
                    name="name"
                    className={`border-2 rounded-lg peer py-3.5 px-3.5 bg-white w-full focus:outline-none focus:ring-0 ${
                      errors.name
                        ? "border-red-500 focus:border-red-600"
                        : "border-slate-200 focus:border-[#0C2C69]"
                    }`}
                    id="name"
                    type="text"
                    required
                    value={inputValues.name}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="name"
                    className={`absolute cursor-text left-3.5 top-4 ${
                      inputValues.name
                        ? "hidden"
                        : "peer-focus:text-xs peer-focus:-top-2.5 peer-focus:uppercase peer-focus:tracking-wider peer-focus:bg-[#0C2C69] peer-focus:px-1.5 peer-focus:py-0.5 peer-focus:rounded peer-focus:text-white text-slate-400 transition-all duration-150"
                    }`}
                  >
                    Name
                  </label>
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <div
                  className={`flex items-stretch rounded-lg border-2 bg-white transition-colors ${
                    errors.number
                      ? "border-red-500 focus-within:border-red-600"
                      : "border-slate-200 focus-within:border-[#0C2C69]"
                  }`}
                >
                  <span className="inline-flex items-center px-3.5 bg-slate-50 border-r border-slate-200 text-slate-700 font-semibold text-sm rounded-l-md select-none">
                    +91
                  </span>
                  <div className="relative flex-1">
                    <input
                      name="number"
                      className="peer py-3.5 px-3.5 bg-transparent w-full border-0 focus:outline-none focus:ring-0 shadow-none rounded-r-md"
                      id="number"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      required
                      value={inputValues.number}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="number"
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
                {errors.number && (
                  <p className="mt-1 text-xs text-red-600">{errors.number}</p>
                )}
              </div>

              <div>
                <div className="relative flex">
                  <input
                    name="email"
                    className={`border-2 rounded-lg peer py-3.5 px-3.5 bg-white w-full focus:outline-none focus:ring-0 ${
                      errors.email
                        ? "border-red-500 focus:border-red-600"
                        : "border-slate-200 focus:border-[#0C2C69]"
                    }`}
                    id="email"
                    type="email"
                    required
                    value={inputValues.email}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute cursor-text left-3.5 top-4 ${
                      inputValues.email
                        ? "hidden"
                        : "peer-focus:text-xs peer-focus:-top-2.5 peer-focus:uppercase peer-focus:tracking-wider peer-focus:bg-[#0C2C69] peer-focus:px-1.5 peer-focus:py-0.5 peer-focus:rounded peer-focus:text-white text-slate-400 transition-all duration-150"
                    }`}
                  >
                    Email
                  </label>
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="relative flex">
                  <textarea
                    name="message"
                    className={`border-2 rounded-lg peer p-3.5 bg-white w-full focus:outline-none focus:ring-0 ${
                      errors.message
                        ? "border-red-500 focus:border-red-600"
                        : "border-slate-200 focus:border-[#0C2C69]"
                    }`}
                    id="message"
                    rows={5}
                    required
                    value={inputValues.message}
                    onChange={handleInputChange}
                  />
                  <label
                    className={`absolute cursor-text left-3.5 top-4 ${
                      inputValues.message
                        ? "hidden"
                        : "peer-focus:text-xs peer-focus:-top-2.5 peer-focus:uppercase peer-focus:tracking-wider peer-focus:bg-[#0C2C69] peer-focus:px-1.5 peer-focus:py-0.5 peer-focus:rounded peer-focus:text-white text-slate-400 transition-all duration-150"
                    }`}
                    htmlFor="message"
                  >
                    Message
                  </label>
                </div>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  className="w-full bg-[#0C2C69] hover:bg-[#0d9cd4] text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-lg"
                  type="submit"
                >
                  Send Message
                </button>
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Please check your details and try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
