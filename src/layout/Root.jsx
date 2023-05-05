import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Header2 from "./Header/Header2";

const Root = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <Header2 />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
