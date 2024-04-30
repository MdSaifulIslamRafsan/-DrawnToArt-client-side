import { Outlet } from "react-router-dom";
import Navbar from "./SharedPage/Navbar";
import Footer from "./SharedPage/Footer";


const Root = () => {
    return (

        <>
        <header>
        <nav className="fixed top-0 shadow-2xl bg-base-100 w-full z-50">
          <Navbar></Navbar>
         </nav>
        </header>
         <main className="mt-28 mx-auto max-w-[1440px] lg:w-10/12">
            <Outlet></Outlet>
         </main>
          <Footer></Footer>
        </>
    );
};

export default Root;