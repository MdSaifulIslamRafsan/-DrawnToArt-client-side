import { Outlet } from "react-router-dom";
import Navbar from "../SharedPage/Navbar";
import Footer from "../SharedPage/Footer";


const Root = () => {
    return (

        <>
        <header>
        <nav className="fixed top-0  w-full z-50">
          <Navbar></Navbar>
         </nav>
        </header>
         <main className="mt-20">
            <Outlet></Outlet>
         </main>
          <Footer></Footer>
        </>
    );
};

export default Root;