import { Outlet } from "react-router-dom";
import Navbar from "../SharedPage/Navbar";
import Footer from "../SharedPage/Footer";


const Root = () => {
    return (
        <>
         <nav className="mx-auto w-[95%] lg:w-10/12 max-w-[1440px]">
          <Navbar></Navbar>
         </nav>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
    );
};

export default Root;