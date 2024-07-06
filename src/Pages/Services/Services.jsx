// import React from "react";
import Service from "./Service";
import Global from "./Global";
import Card from "../../components/Cards/card";
import Label from "./Label";
function Services() {
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
