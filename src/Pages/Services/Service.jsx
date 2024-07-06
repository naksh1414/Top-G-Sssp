// import React from "react";
import img from "../../assets/Hero/WhatsApp Image 2024-07-05 at 1.00.56 AM.jpeg";
function Service() {
  return (
    <section>
      <main>
        <div className="h-full">
          <img
            className="absolute h-[500px] md:h-[700px] w-full object-cover brightness-[0.5]"
            src={img}
            alt="bgimg"
          />
          <h1 className="text-white bg-black/40 h-[500px] md:h-[700px] text-[2rem] md:text-[3rem] z-10 font-bold relative justify-center items-center flex text-center pt-[50px]">
            UPLOAD YOUR MUSIC TO THE WORLD
          </h1>
        </div>
      </main>
    </section>
  );
}

export default Service;
