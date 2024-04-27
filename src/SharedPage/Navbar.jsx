import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user  , handleLogout } = useContext(AuthContext);

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
        <NavLink to={"MyArt&CraftList"}>My Art&Craft List</NavLink>
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
              <div  className="w-10 cursor-pointer rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <a id="clickable"> <img src={user?.photoURL} /></a>
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
            <div className="space-x-3 navbar-end">
              <Link
                to={"/login"}
                className="rounded px-5 py-2 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-8 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Login</span>
              </Link>

              <Link
                to={"/register"}
                className="rounded px-5 py-2 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-8 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Register</span>
              </Link>
            </div>
          )}
        </div>
      </div>
  );
};

export default Navbar;
