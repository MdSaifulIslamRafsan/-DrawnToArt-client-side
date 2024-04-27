import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import Lottie from "lottie-react";
import registerAnimation from "../assets/register.json";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase.config";
import Swal from "sweetalert2";

const Register = () => {
  const [isPassword , SetIsPassword] = useState(true);
  const {createAccount ,  user} = useContext(AuthContext);
console.log(user);
  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    const {name, email , photoURL , password} = data;

    if (!/^[a-zA-Z\-\'\s]+$/.test(name)){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid name containing only letters, spaces, hyphens, and apostrophes",
      });
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email format. Please use the format: example@example.com",
      });
    }
    if (!/^https?:\/\/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^/?]+)+\.(?:jpg|jpeg|png|gif)$/.test(photoURL)){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid URL format. Please ensure the URL starts with 'http://' or 'https://' and ends with a supported image file extension (.jpg, .jpeg, .png, .gif).",
      });
    }
    if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text:  "Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.",
      });
    }
    

    createAccount(email, password)
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      })
      Swal.fire({
        title: "Good job!",
        text:  "Congratulations! Your account has been successfully created.",
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
    <>
      {/* source: https://gist.github.com/nraloux/bce10c4148380061781b928cdab9b193 */}
      {/* I have added support for dark mode and improved UI */}
      <div className="h-full bg-gray-400 dark:bg-gray-900">
        {/* Container */}
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            {/* Row */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex flex-col lg:flex-row">
              {/* Col */}
              <Lottie animationData={registerAnimation} loop={true} />
              {/* Col */}
              <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                  Create an Account!
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                    {...register("name")}
                      className="w-full px-3 py-3 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                    {...register("email")}
                      className="w-full px-3 py-3 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="photoURL"
                    >
                      PhotoURL
                    </label>
                    <input
                    {...register("photoURL")}
                      className="w-full px-3 py-3 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="photoURL"
                      type="text"
                      name="photoURL"
                      placeholder="photoURL"
                    />
                  </div>
                  <div className="mb-4 relative">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                    {...register("password")}
                      className="w-full px-3 py-3 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type={isPassword ? "password" : "text "}
                      name="password"
                      placeholder="Password"
                    />
                     <span onClick={()=> SetIsPassword(!isPassword)} className="absolute top-1/2 right-2 ">
                    {isPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
                  </div>

                  <div className="mb-6 text-center">
                    <button
                      className="bg-[#002D74] px-8 text-white py-3 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                      type="submit"
                    >
                     Register Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />

                  <div className="text-center">
                    <p>
                      Already have an account?{" "}
                      <Link className="btn-link" to={"/login"}>
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
