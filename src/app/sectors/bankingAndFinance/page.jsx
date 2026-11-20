const Banking = lazy(() =>
  import("@/components/pages/Sectors/bankingandfinance/bankingandfinance")
);
import React, { lazy } from "react";

const page = () => {
  return (
    <>
      <Banking />
    </>
  );
};

export default page;
