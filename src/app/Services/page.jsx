const IntegratedFacilityManagement = lazy(() =>
  import(
    "@/components/pages/services/Integrated Facility Management/Integrated Facility Management"
  )
);
import React, { lazy } from "react";

const page = () => {
  return (
    <>
      <IntegratedFacilityManagement />
    </>
  );
};

export default page;
