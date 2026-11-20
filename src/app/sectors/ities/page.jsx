// import Ities from "@/components/pages/Sectors/ities/ities";
const Ities = lazy(() => import("@/components/pages/Sectors/ities/ities"));
import React, { lazy } from "react";

const page = () => {
  return (
    <>
      <Ities />
    </>
  );
};

export default page;
