const HealthCareAndLifeServices = lazy(() =>
  import(
    "@/components/pages/Sectors/HealthcareAndLifeServices/HealthcareAndLifeServices"
  )
);
import React, { lazy } from "react";

const page = () => {
  return (
    <>
      <HealthCareAndLifeServices />
    </>
  );
};

export default page;
