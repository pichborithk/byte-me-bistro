import { Outlet } from "react-router-dom";
import { Footer, Navbar, Notification, ScrollToTop } from "./components";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="mt-24">
        <Outlet />
      </div>
      <ScrollToTop />
      <Notification />
      <Footer />
    </>
  );
};
export default Root;
