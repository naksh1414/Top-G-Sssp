// import { NavLink } from "react-router-dom";
import client1 from "../../assets/ShreySinghal.jpg";
const Card = () => {
  //   const card = [];

  return (
    <div className="bg-white rounded-3xl my-3 mx-4  shadow-md shadow-gray-300 bg-custom-gradient">
      <div className="rounded-tl-3xl rounded-tr-3xl overflow-hidden">
        <img src={client1} className="" alt="" />
      </div>
      <div className="bg-black text-center h-16 flex justify-center flex-col text-white rounded-br-3xl rounded-bl-3xl">
        <h1 className="font-bold">T Series</h1>
        <p className="text-xs lg:text-sm ">231M+ Subscribers</p>
      </div>
    </div>
  );
};

export default Card;
