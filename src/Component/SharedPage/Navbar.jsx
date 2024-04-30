import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user  , handleLogout } = useContext(AuthContext);
  const [isDark , setDarkMode] = useState(localStorage.getItem("theme") || "light")

  useEffect(()=>{
    localStorage.setItem("theme", isDark);
    const getLocalStorage = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme" , getLocalStorage);
  },[isDark]);

  const handelIsDarkMoodBtn = e => {
    if (e.target.checked) {
      setDarkMode("dark");
    }else{
      setDarkMode("light");
    }
  }



  const NavbarLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/AllArt&craftItems"}>All Art & craft Items</NavLink>
      </li>
      <li>
        <NavLink to={"/AddCraftItem"}>Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to={"/MyArt&CraftList"}>My Art&Craft List</NavLink>
      </li>
    </>
  );

  return (
    <div className="mx-auto max-w-[1440px]  lg:w-10/12">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavbarLink}
            </ul>
          </div>
          <span className="text-sm lg:text-2xl bg-300% font-bold bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">
            DrawnToArt
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavbarLink}</ul>
        </div>
        
          {user ? (
            <div className="avatar navbar-end">
              <label className="flex mr-5 cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
               {
                isDark === 'light' ?  <input
                onClick={(e) => handelIsDarkMoodBtn(e)}
                  type="checkbox"
                  className="toggle theme-controller"
                /> :  <input
                onClick={(e) => handelIsDarkMoodBtn(e)}
                  type="checkbox"
                  checked
                  className="toggle theme-controller"
                />
               }
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
              <div  className="w-10 cursor-pointer rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img id="clickable" src={user?.photoURL} />
                <Tooltip anchorSelect="#clickable" clickable place="bottom">
                <p>{user?.email}</p>
                <button onClick={handleLogout}
                className="rounded mt-4 px-5 py-2 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Logout</span>
              </button>
              </Tooltip>
              </div>
             
            </div>
          ) : (
            <div className="lg:space-x-2 space-x-1 navbar-end">
              <label className="flex cursor-pointer gap-2">
                
               {
                isDark === 'light' ?  <input
                onClick={(e) => handelIsDarkMoodBtn(e)}
                  type="checkbox"
                  className="toggle theme-controller"
                /> :  <input
                onClick={(e) => handelIsDarkMoodBtn(e)}
                  type="checkbox"
                  checked
                  className="toggle theme-controller"
                />
               }
                
              </label>
              <Link
                to={"/login"}
                className="text-[10px] px-3 sm:text-base sm:px-4 btn bg-green-500 text-white"
              >Login
              </Link>

              <Link
                to={"/register"}
                className="btn sm:text-base sm:px-4  px-3 text-[10px] bg-green-500 text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
  );
};

export default Navbar;
