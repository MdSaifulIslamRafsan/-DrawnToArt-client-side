import { Outlet } from "react-router-dom";
import Navbar from "../SharedPage/Navbar";
import Footer from "../SharedPage/Footer";


const Root = () => {
    return (
        
        <>
         <nav className="fixed top-0 w-full z-50">
          <Navbar></Navbar>
         </nav>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
    );
};

export default Root;