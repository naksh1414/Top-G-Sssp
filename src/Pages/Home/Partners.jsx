import logo from "../../assets/react.svg";
const Partners = () => {
  return (
    <main className=" h-full my-14 py-10">
      <div className="flex justify-center">
        <h1 className="text-center text-3xl lg:text-5xl font-bold ">
          Our Certified Partners
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center my-10 space-y-8 md:space-y-0 md:space-x-10">
        <img className="h-[60px]" src={logo} alt="LOgoImage" />
        <img className="h-[60px]" src={logo} alt="LOgoImage" />
        <img className="h-[60px]" src={logo} alt="LOgoImage" />
        <img className="h-[60px]" src={logo} alt="LOgoImage" />
      </div>
    </main>
  );
};

export default Partners;
