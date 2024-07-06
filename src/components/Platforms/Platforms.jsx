import spotify from "../../assets/Spotify-Logo-PNG.png";
import "./Platform.css";
function Platforms() {
  return (
    <div className="p-8 pt-20 bg-[#1883aa] flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl lg:text-5xl font-bold mb-8 text-white">
        Upload Your <span className="">Music To The World</span>
      </h1>
      <div className=" flex  flex-row gap-3 flex-wrap justify-center">
        <div className="bg-white py-14 px-16 rounded-2xl cursor-pointer hover:scale-[1.05] transition-all duration-100 ease-in-out">
          <img className="w-44 h-14" src={spotify} alt="" />
        </div>
        <div className="bg-white py-14 px-16 rounded-2xl cursor-pointer hover:scale-[1.05] transition-all duration-100 ease-in-out">
          <img className="w-44 h-14" src={spotify} alt="" />
        </div>
        <div className="bg-white py-14 px-16 rounded-2xl cursor-pointer hover:scale-[1.05] transition-all duration-100 ease-in-out">
          <img className="w-44 h-14" src={spotify} alt="" />
        </div>
        <div className="bg-white py-14 px-16 rounded-2xl cursor-pointer hover:scale-[1.05] transition-all duration-100 ease-in-out">
          <img className="w-44 h-14" src={spotify} alt="" />
        </div>
        <div className="bg-white py-14 px-16 rounded-2xl cursor-pointer hover:scale-[1.05] transition-all duration-100 ease-in-out">
          <img className="w-44 h-14" src={spotify} alt="" />
        </div>
        <div className="bg-white py-14 px-16 rounded-2xl cursor-pointer hover:scale-[1.05] transition-all duration-100 ease-in-out">
          <img className="w-44 h-14" src={spotify} alt="" />
        </div>
        <div className="bg-white py-14 px-16 rounded-2xl cursor-pointer hover:scale-[1.05] transition-all duration-100 ease-in-out">
          <img className="w-44 h-14" src={spotify} alt="" />
        </div>
        <div className="bg-white py-14 px-16 rounded-2xl cursor-pointer hover:scale-[1.05] transition-all duration-100 ease-in-out">
          <img className="w-44 h-14" src={spotify} alt="" />
        </div>
      </div>
      <button className="mt-8 py-2 text-white hover:-translate-y-2 transition-all duration-150 ease-in-out font-semibold bg-blue-500 w-[10%] rounded-full">
        View All
      </button>
    </div>
  );
}

export default Platforms;
