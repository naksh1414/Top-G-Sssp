// import React from "react";
// import Img from "../../assets/Services/Pasted image.png";
import Btn from "../../components/Buttons/Btn";
import Img from "../../assets/publishing-payments.png";
const Global = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full flex md:w-[50%] justify-center items-center">
          <img className="h-[25rem]" src={Img} alt="SideImage" />
        </div>
        <div className="w-full md:w-[50%] justify-center items-center md:items-start md:-ml-28 flex flex-col mb-4">
          <h1 className="text-[1.6rem] md:text-[2rem] font-bold">
            Global Music Licensing
          </h1>
          <p className=" p-4 md:p-0 md:pr-10 text-center md:text-start text-black/55 text-[1rem]  md:text-[1rem]">
            Many of the entitlements slip through the cracks every day and
            become unclaimed, unattributed, unmatched, and undistributed for
            many reasons. We, at GK Digital offer extensive study of the global
            music licensing ecosystem. Our team uses a variety of sources
            through our established GK community to obtain data about unclaimed
            music rights and claim royalty from throughout the world wherever
            your content is being used: throughout all TV Stations, Radio and
            everywhere your music is played.
          </p>
          <br />
          <p className="p-4 md:p-0 md:pr-10 text-black/55 text-[1rem] md:text-[1rem]">
            We search for, find and act on rights to certain unclaimed royalties
            and music licenses for you.
          </p>
          <div className="mt-6">
            <Btn data={"Read More"}></Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Global;
