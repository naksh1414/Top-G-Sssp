// import React from "react";
import { NavLink } from "react-router-dom";
import NavLogo from "../../assets/Navbar/Logo Png.png";
import Btn from "../Buttons/Btn";
// import { HiOutlineMenuAlt2 } from "react-icons/hi";
import NavDrawer from "../Drawer/NavDrawer";
const Navbar = () => {
  return (
    <section className="bg-transparent fixed z-50 w-[100vw] flex justify-center">
      <nav className="bg-[#392a2a] h-20 flex items-center justify-between m-3 w-[90%] rounded-md px-5">
        {/* navbar for larger screens like tablets and laptops */}
        <div className="hidden md:flex justify-between items-center w-full px-4">
          {/* Nav options */}
          <div className="w-full  text-white font-semibold">
            <ul className="w-full flex flex-row justify-between">
              <li className=" flex w-[65%] justify-between items-center space-x-4 text-[1rem]">
                <NavLink to={"/"}>
                  <a href="">Home</a>
                </NavLink>
                <NavLink to={"/services"}>
                  <a href="">Services</a>
                </NavLink>
                <a href="#footer">Contact</a>
                {/* <a href="#">+9999999999</a> */}
              </li>
            </ul>
          </div>
          {/* Logo div  */}
          <div className="w-full">
            <NavLink to={"/"}>
              <img className="h-[60px]" src={NavLogo} alt="Nav-Logo" />
            </NavLink>
          </div>
          {/* Login signup buttons  */}
          <div className="">
            <Btn data={"Join Now"} />
          </div>
        </div>
        {/* navbar for smaller screens like mobiles  */}
        <div className="flex md:hidden w-full">
          <div className="flex justify-between items-center w-full px-2">
            <NavLink to={"/"}>
              <img className=" h-12 w-12" src={NavLogo} alt="logo" />
            </NavLink>
            <NavDrawer />
            {/* <a href="">
              <HiOutlineMenuAlt2 className="text-white h-12 w-12" />
            </a> */}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
