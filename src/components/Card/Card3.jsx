// import { NavLink } from "react-router-dom";
import client1 from "../../assets/wahwah.jpg";
const Card3 = () => {
  //   const card = [];

  return (
    <div className="bg-white rounded-full my-3 mx-4  shadow-md shadow-gray-300 bg-custom-gradient">
      <div className="rounded-full overflow-hidden">
        <img src={client1} className="" alt="" />
      </div>
      {/* <div className="bg-black text-center h-16 flex justify-center flex-col text-white rounded-br-3xl rounded-bl-3xl">
        <h1 className="font-bold">T Series</h1>
        <p className="text-sm ">231M+ Subscribers</p>
      </div> */}
    </div>
  );
};

export default Card3;
