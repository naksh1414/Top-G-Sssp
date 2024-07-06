import "./Footer.css";

import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../../assets/Navbar/Logo Png.png";
// import greaterThanDark from "../../assets/footer/greaterthandark.svg";
// import greaterThanLight from "../../assets/footer/greaterthanlight.svg";
// import useTheme from "../../context/theme";

export default function Foot() {
  // const history = useNavigate();
  // const { themeMode } = useTheme();
  return (
    <>
      <div
        id="footer"
        className="footer z-10 border-white/65 bg-white dark:bg-black text-black dark:text-white border-t-[1px] border-t-[rgba(177,177,177,0.49)] px-16 w-full"
      >
        <div className="upperfoot bg-white dark:bg-black z-10 py-5 lg:p-8 border-b-[1px] border-b-[#8a8a8a92] flex justify-between w-full">
          <div className="box flex flex-col lg:flex-col items-start w-[90%] lg:w-[33%]">
            <img src={logo} className="w-20 h-20" alt="" />
            <p className="text-md mb-2 font-medium dark:font-light my-5">
              Gk Digital provides Services such as, Digital Content Management
              Distribution, Online Marketing and Brand Building Marketing.
            </p>

            <div className="handle flex flex-row items-center mt-5 justify-between w-[70%] lg:w-[50%] ">
              <a href="" target="_blank" rel="noreferrer">
                <FaInstagram className=" h-8 w-8 test-black dark:text-white hover:text-[#4d55ba] cursor-pointer transition-all duration-150" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaFacebook className=" h-7 w-7 test-black dark:text-white hover:text-[#4d55ba] cursor-pointer transition-all duration-150" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaTelegram className=" h-7 w-7 test-black dark:text-white hover:text-[#4d55ba] cursor-pointer transition-all duration-150" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <FaLinkedinIn className=" h-7 w-7 test-black dark:text-white hover:text-[#4d55ba] cursor-pointer transition-all duration-150" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <FaYoutube className=" h-7 w-7 test-black dark:text-white hover:text-[#4d55ba] cursor-pointer transition-all duration-150" />
              </a>
            </div>
          </div>

          <div className="footbox mt-6 lg:mt-0 w-full  ">
            <div className="box w-1/2">
              <h4 className="text-lg font-bold mb-5">Important Links</h4>
              <div className="upper flex flex-row justify-between items-start w-[80%]">
                <div className="inner ">
                  <a
                    // onClick={() => history("/discover")}
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                  >
                    {">"} Jobs
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                    rel="noreferrer"
                  >
                    {">"} Services
                  </a>
                  <a
                    // onClick={() => history("/gallery")}
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                  >
                    {">"} Contact
                  </a>

                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                  >
                    {">"} Our Clients
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                  >
                    {">"} Digital Marketing
                  </a>
                </div>
              </div>
            </div>
            <div className="box mr-8 flex mt-5 md:mt-0 flex-col md:items-center lg:items-start w-1/2">
              <h4 className="text-lg mb-5 font-bold">Get In Touch</h4>
              <p className="mb-3 font-medium dark:font-light flex lg:w-[80%]">
                <span>📍</span>
                <p>
                  GK DIGITAL, SCO 43, 2nd Floor Jubilee Square, Block E, Gmada
                  Aerocity, Sahibzada Ajit Singh Nagar, Punjab 160055
                </p>
              </p>
              <p className="mb-4 font-semibold dark:font-medium">
                <span>📞 </span>{" "}
                <span className="font-medium dark:font-light">
                  +91 9876558205
                </span>
              </p>
              <p className="font-semibold flex dark:font-medium">
                <span>✉️ </span>
                <p className="font-medium flex flex-col dark:font-light">
                  <span className="ml-1">gurioye@gk.digital</span>
                  <span className="ml-1">aman@gk.digital</span>
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="lowerfoot bg-white dark:bg-black z-10 text-center font-medium text-xs md:text-sm dark:font-medium flex flex-col lg:flex-row justify-between items-center lg:px-20 pb-1">
          <h3 className="w-1/2 lg:text-start">
            &copy;Top-G | All sight reserved
          </h3>
          <h3 className="w-1/2 md:text-end">
            <a href="">Privacy Policy</a> | <a href="">Terms of use</a>
          </h3>
        </div>
      </div>
    </>
  );
}
