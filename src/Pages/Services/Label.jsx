// import React from 'react'
import img from "../../assets/Hero/WhatsApp Image 2024-07-05 at 1.00.56 AM.jpeg";
function Label() {
  return (
    <section className="flex h-full w-full">
      <main className="relative flex justify-center items-center bg-black/40 w-full">
        <img
          className="absolute h-full w-full object-cover brightness-[0.3]"
          src={img}
          alt="bgimg"
        />
        <div className="flex flex-col items-center w-full">
          <h1 className="text-white   text-[2rem] md:text-[2.3rem] mt-10 z-10 font-bold relative justify-center items-center flex text-center w-full">
            Personalised Label & Artist Management
          </h1>
          <p className="z-10 text-white mb-4 px-1 md:px-32 text-center flex flex-col gap-7 mt-8">
            TopG specialises in professional Services for Artist, Labels &
            Public figures to represent them on all digital & social platforms.
            TopG creates limitless opportunities for singers, artists, and
            influencers who shape popular culture across music, film, digital
            media, marketing and beyond. We represent thousands of the world’s
            leading musical artists, actors, directors, producers, influencers
            and more.{" "}
            <span>
              In service of them, we are committed to remaining the strongest,
              most vibrant, and most innovative service company in the world.
              Since our establishment in 2018, TopG has continued to
              deliver on its promise that every client is represented by the
              whole agency. This collaborative approach benefits our clients now
              more than ever, as they look to build their careers and their
              brands across multiple disciplines and platforms.
            </span>
            <span>
              With a vast network of employees and strategic partners, we ensure
              that our clients achieve their goals.
            </span>
          </p>
        </div>
      </main>
    </section>
  );
}

export default Label;
