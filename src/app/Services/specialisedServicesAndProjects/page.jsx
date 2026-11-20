const SpecialisedServicesAndProjects = lazy(() =>
  import(
    "@/components/pages/services/specialisedServicesAndProjects/specialisedServicesAndProject"
  )
);
import React, { lazy } from "react";

const page = () => {
  return (
    <>
      <SpecialisedServicesAndProjects />
    </>
  );
};

export default page;
