// import React from "react";
import Counter from "../../components/Counter/Countup";
// import BgImg from "../../assets/Footfall/OIP.jpeg";
import { IoFootstepsSharp } from "react-icons/io5";
const FootFall = () => {
  return (
    <main className="h-[20%] bg-black">
      <div className="w-full h-full flex justify-center items-center">
        <img
          className="absolute flex object-cover md:object-fit w-full  h-[13rem] md:h-[20rem]"
          src="https://gk.digital/assets/img/photoArtists.jpg"
          alt="Background"
        />
        <div className="flex flex-row justify-center items-center md:justify-evenly space-y-0 md:space-y-0 md:space-x-16 gap-4">
          <div className="bg-[#ffffff00] h-[7rem] lg:h-[13rem] w-[6rem] lg:w-[23rem] rounded-lg flex flex-col justify-center items-center relative backdrop-blur-md md:p-5">
            <IoFootstepsSharp className="h-6 w-6 md:h-20 md:w-20 -mb-2 text-blue-500" />
            <Counter count={2000} />
            <p className="text-white lg:px-5 px-1 w-full text-[0.6rem] md:text-lg text-center -mt-2">
              Artists & music labels Working With TopG
            </p>
          </div>
          <div className="bg-[#ffffff00] h-[7rem] lg:h-[13rem] w-[6rem] lg:w-[23rem] rounded-lg flex flex-col justify-center items-center relative backdrop-blur-md md:p-5">
            <IoFootstepsSharp className="h-6 w-6 md:h-20 md:w-20 -mb-2 text-blue-500" />
            <Counter count={1000000} />
            <p className="text-white lg:px-5 px-1 w-full text-[0.6rem] md:text-lg text-center -mt-2">
              Streams for each month
            </p>
          </div>
          <div className="bg-[#ffffff00] h-[7rem] lg:h-[13rem] w-[6rem] lg:w-[23rem] rounded-lg flex flex-col justify-center items-center relative backdrop-blur-md md:p-5">
            <IoFootstepsSharp className="h-6 w-6 md:h-20 md:w-20 -mb-2 text-blue-500" />
            <Counter count={10000} />
            <p className="text-white lg:px-5 px-1 w-full text-[0.6rem] md:text-lg text-center -mt-2">
              Music tracks distributed
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FootFall;
