import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./styles.css";

const Layout = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className="text-center content">
          <Outlet />
        </div>
      </div>
        <Footer />
    </>
  );
}
export default Layout;