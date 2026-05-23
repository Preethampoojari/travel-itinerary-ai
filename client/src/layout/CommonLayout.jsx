import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <>
      {/* Header */}
      <Navbar />
      {/* Main Content */}
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default CommonLayout;
