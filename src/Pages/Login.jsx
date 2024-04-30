import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/login.json";
import Lottie from "lottie-react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const [isPassword , SetIsPassword] = useState(true);
    const {loginAccount , handleGoogleLogin , handleGithubLogin} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = (data) => {
    reset();
    const {email , password} = data;

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email format. Please use the format: example@example.com",
      });
    }

    if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text:  "Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.",
      });
    }
    

    loginAccount(email, password)
    .then(() => {
      navigate(location?.state ? location?.state : '/' );
      Swal.fire({
        title: "Good job!",
        text:  "You've successfully logged in. Let's get started!",
        icon: "success"
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
   

  }

  return (
    <section className="min-h-screen  flex box-border justify-center items-center">
      <div className="bg-gray-900  rounded-2xl flex flex-col-reverse md:flex-row w-10/12 p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-white text-3xl ">Login</h2>
          <p className="text-sm text-white mt-4 ">
            If you already a member, easily log in now.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              {...register("email")}
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={isPassword ? "password" : "text "}
                name="password"
                {...register("password")}
                id="password"
                placeholder="Password"
              />
                <span onClick={()=> SetIsPassword(!isPassword)} className="absolute top-1/2 right-2 -translate-y-1/2">
                    {isPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
            </div>
            <button
              className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="mt-6 items-center">
            <hr className="border-gray-300" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-300" />
          </div>
          <button
          onClick={()=>handleGoogleLogin(navigate , location)}
          type="button"
          className="py-4 text-white text-sm lg:text-base hover:animate__animated hover:animate__headShake  px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"
        >
          <svg
            viewBox="-0.5 0 48 48"
            version="1.1"
            className="w-5 inline-block mr-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#000000"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>Google-color</title> <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    ></path>
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          Continue with Google
        </button>
        <button
        onClick={()=>handleGithubLogin(navigate , location)}
          type="button"
          className="py-4 flex text-white text-sm lg:text-base hover:animate__animated hover:animate__headShake  px-5 mb-4 mt-8 mx-auto item-center gap-2  shadow-lg border rounded-md border-black"
        >
          <FaGithub className="text-2xl"></FaGithub>
          Continue with Github
        </button>
          <div className="text-sm text-white py-5 playfair tooltip">
            Forget password?
          </div>
          <div className="mt-4 text-sm flex items-center">
            <p className="mr-3 md:mr-0 text-white">If you don't have an account..</p>
           <Link className="btn-link" to={"/register"}>Register</Link>
          </div>
        </div>
        <div className="w-1/2">
        <Lottie className="h-72" animationData={login} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Login;
