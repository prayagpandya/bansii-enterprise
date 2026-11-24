"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationProgress from "@/components/compnent/NavigationProgress/NavigationProgress";

export default function ClientProviders() {
  return (
    <>
      <NavigationProgress />
      <ToastContainer className="bg-transparent" />
    </>
  );
}
