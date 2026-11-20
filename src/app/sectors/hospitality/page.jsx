import React, { lazy } from "react";
const Hospitality = lazy(() =>
  import("@/components/pages/Sectors/hospitality/hospitality")
);
const page = () => {
  return (
    <>
      <Hospitality />
    </>
  );
};

export default page;
