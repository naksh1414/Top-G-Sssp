function Card4({ number, img, heading, para, color }) {
  return (
    <div
      className={`group bg-white drop-shadow-lg hover:bg-[#${color}] transition-all duration-100 cursor-pointer px-6 py-8 md:w-[40%] rounded-2xl hover:text-white`}
    >
      <div className="flex justify-between items-center overflow-hidden">
        <div
          className={`bg-[#${color}] overflow-hidden drop-shadow-md rounded-full`}
        >
          <img className={`w-8 h-8 m-4`} src={img} alt="" />
        </div>
        <h2 className="text-5xl font-semibold group-hover:text-white text-gray-300">
          0{number + 1}
        </h2>
      </div>
      <h3 className="mt-5 font-semibold text-xl ">{heading}</h3>
      <p className="text-md hover:text-white font-light mt-3">{para}</p>
    </div>
  );
}

export default Card4;
