import React, { lazy } from "react";

const IntegratedFacilityManagement = lazy(() =>
  import(
    "@/components/pages/services/Integrated Facility Management/Integrated Facility Management"
  )
);

const page = () => {
  return (
    <>
      <IntegratedFacilityManagement />
    </>
  );
};

export default page;
