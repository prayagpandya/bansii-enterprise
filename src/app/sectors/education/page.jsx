const Education = lazy(() =>
  import("@/components/pages/Sectors/Education/Education")
);
import React, { lazy } from "react";

const page = () => {
  return (
    <>
      <Education />
    </>
  );
};

export default page;
