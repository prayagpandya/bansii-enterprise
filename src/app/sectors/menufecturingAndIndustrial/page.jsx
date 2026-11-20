const Manufacturing = lazy(() =>
  import("@/components/pages/Sectors/Manufacturing/Manufacturing")
);
import React, { lazy } from "react";

const page = () => {
  return (
    <>
      <Manufacturing />
    </>
  );
};

export default page;
