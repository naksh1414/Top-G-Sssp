// import React from "react";
// import Img from "../../assets/Services/Pasted image.png";
// import Btn from "../../components/Buttons/Btn";
import Img from "../../assets/publishing-payments.png";
import { useState } from "react";
const Global = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full flex md:w-[50%] justify-center items-center">
          <img className="h-[25rem]" src={Img} alt="SideImage" />
        </div>
        <div className="w-full md:w-[50%] justify-center md:items-start md:-ml-28 flex flex-col mb-4">
          <h1 className="text-[1.6rem] md:text-[2rem] font-bold px-4 lg:px-0">
            Global Music Licensing
          </h1>
          <p className=" px-4 pt-4 md:p-0 md:pr-10 text-start md:text-start text-black/55 text-[1rem]  md:text-[1rem]">
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
          <p className="px-4  md:p-0 md:pr-10 text-black/55 text-[1rem] md:text-[1rem] lg:px-0 lg:pr-4">
            We search for, find and act on rights to certain unclaimed royalties
            and music licenses for you.
          </p>
          <div className="mt-5 px-4 md:mt-6 lg:px-0">
            {/* <Btn data={"Read More"}></Btn> */}
            <p
              className="underline underline-offset-2 text-purple-950 font-semibold cursor-pointer"
              onClick={toggleContent}
            >
              Read more
            </p>
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-500 px-10 mb-10 mt-5 lg:px-32 flex flex-col gap-2 font-light ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p>
          The importance of obtaining proper music licensing: It&apos;s
          important to remind your audience that using music without permission
          can result in legal consequences and that obtaining proper music
          licensing is essential for protecting the rights of artists and
          ensuring that they are fairly compensated for their work.
        </p>
        <p>
          The complexities of global music licensing: Explain that obtaining
          music licensing for use in other countries can be complex because of
          differences in copyright laws and licensing practices. Mention that
          working with a music attorney or a professional licensing company can
          help to ensure that the process is handled smoothly and legally.
        </p>
        <p className="mb-10">
          The benefits of obtaining global music licensing: Highlight the
          benefits of obtaining global music licensing for your music, such as
          protecting your rights as an artist and ensuring that you are fairly
          compensated for your work. Explain that obtaining global music
          licensing can also help to increase the reach and exposure of your
          music and potentially generate additional income.
        </p>
      </div>
    </section>
  );
};

export default Global;
