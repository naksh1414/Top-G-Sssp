// import React from 'react'
import Clients from "../../components/Clients/Clients";
import Features from "../../components/Features/Features";
// import FootFall from "../../components/FootFall/FootFall";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
// import Partners from "../../components/Partners/Partners";
import Platforms from "../../components/Platforms/Platforms";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import TopRankers from "../../components/TopRankers/TopRankers";
import WhyUs from "../../components/WhyUs/WhyUs";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Partners from "./Partners";
import FootFall from "./FootFall";
function Home() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className=" bg-gray-100 w-full h-full">
      <Navbar />
      <Hero />
      <Platforms />
      <Services />
      <WhyUs />
      <Features />
      <Clients />
      <TopRankers />
      <Testimonials />
      <FootFall />
      <Partners />
    </div>
  );
}

export default Home;
