import { lazy } from "react";

const Home = lazy(() => import("@/components/pages/home/Home"));
export default function page() {
  return (
    <>
      <Home data-scroll data-scroll-speed="2" />
    </>
  );
}
