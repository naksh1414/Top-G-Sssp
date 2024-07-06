import React from "react";
import NavLogo from "../../assets/Navbar/Logo Png.png";
import Btn from "../Buttons/Btn";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import NavDrawer from "../Drawer/NavDrawer"
const Nav = () => {
  return (
    <section>
      <nav className="bg-[#000] h-20 flex items-center justify-between m-5 rounded-md">
        {/* navbar for larger screens like tablets and laptops */}
        <div className="hidden md:flex justify-between items-center w-full px-4">
          {/* Nav options */}
          <div className=" text-white">
            <ul>
              <li className=" justify-center items-center space-x-4 text-[1.3rem]">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
                <a href="#">+9999999999</a>
              </li>
            </ul>
          </div>
          {/* Logo div  */}
          <div className="">
            <img className="h-[60px]" src={NavLogo} alt="Nav-Logo" />
          </div>
          {/* Login signup buttons  */}
          <div className="!z-20">
            <Btn data={"Join Now"} />
          </div>
        </div>
        {/* navbar for smaller screens like mobiles  */}
        <div className="flex md:hidden w-full">
          <div className="flex justify-between w-full px-2">
            <img className=" h-12 w-12" src={NavLogo} alt="logo" />
            <NavDrawer/>
            {/* <a href="">
              <HiOutlineMenuAlt2 className="text-white h-12 w-12" />
            </a> */}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
