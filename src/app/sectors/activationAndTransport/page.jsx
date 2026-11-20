const AviationAndTransport = lazy(() =>
  import("@/components/pages/Sectors/AviationandTransport/Aviation&transport")
);
import React, { lazy } from "react";

const page = () => {
  return (
    <>
      <AviationAndTransport />
    </>
  );
};

export default page;
