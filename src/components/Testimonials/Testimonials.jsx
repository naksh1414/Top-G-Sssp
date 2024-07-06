import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card3";
import "./Testimonials.css";
function Testimonials() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 bg-white flex flex-col justify- items-center">
      <h1 className="font-extrabold  text-3xl lg:text-5xl text-center">
        Whats Our Artists Say
      </h1>
      <div className="flex flex-col justify-center items-center my-10 md:my-24 relative w-full md:w-[70%]">
        <img
          src="https://gk.digital/assets/img/left-quotes.png"
          alt=""
          className="absolute -top-8 left-0 hidden md:flex"
        />
        <h2 className="text-md lg:text-2xl text-center w-[90%] md:w-[70%]">
          The best music distributor out there! Fast approval time and very
          friendly! The best music distributor out there! Fast approval time and
          very friendly!
        </h2>
        <p className="text-blue-400 mt-8 flex flex-row justify-center items-center font-semibold text-md md:text-xl">
          <span className="w-[25px] md:w-[30px] mr-3 flex bg-blue-400 h-[2px]"></span>{" "}
          Yo Yo Honey Singh
        </p>
        <img
          src="https://gk.digital/assets/img/right-quote.png"
          alt=""
          className="absolute -bottom-8 right-0 hidden md:flex"
        />
      </div>
      <div className="slider-container container mx-auto my-10">
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
