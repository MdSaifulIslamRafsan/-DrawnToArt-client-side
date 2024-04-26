import { Link, useRouteError } from "react-router-dom";
import error from "../assets/Error.json";
import Lottie from "lottie-react";
const Error = () => {
  const errorMessage = useRouteError();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Lottie className="h-72" animationData={error} loop={true} />
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl  mt-7">Page Not Found</p>
        <p className="text-sm md:text-lg lg:text-xl  mt-5">
          Sorry, the page you are looking for{" "}
          {errorMessage.statusText || errorMessage.message}
        </p>
        <Link
          to="/"
          className="relative  mt-7 rounded px-10 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
          <span className="relative">Return Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
