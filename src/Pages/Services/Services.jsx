// import React from "react";
import Service from "./Service";
import Global from "./Global";
import Card from "../../components/Cards/card";
import Label from "./Label";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Services() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className=" bg-gray-100 w-full h-full">
      <Service />
      <Card />
      <Global />
      <Label />
    </div>
  );
}

export default Services;
