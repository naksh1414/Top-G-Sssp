import mic from "../../assets/live-music.svg";
import "./WhyUs.css";
function WhyUs() {
  const cards = [
    {
      image: mic,
      main_text: "WE'RE Quick",
      hidden_text:
        "Get your music live everywhere easily and get your royalties rolling as soon as the music is made live with our super lightening service.",
    },
    {
      image: mic,
      main_text: "100% RIGHTS",
      hidden_text: "All the rights to your song remain yours.",
    },
    {
      image: mic,
      main_text: "REPORTING",
      hidden_text: "Get monthly analytics reports with all the statistics.",
    },
    {
      image: mic,
      main_text: "NO HIDDEN COSTS",
      hidden_text: "Free UPC and ISRC code for every release.",
    },
  ];
  return (
    <div className="bg-[#1883AA] text-white flex flex-col justify-center items-center py-10">
      <h1 className=" font-extrabold mb-5 text-3xl lg:text-5xl">Why Top-G?</h1>
      <p className="text-sm lg:text-lg w-[90%] lg:w-[60%] text-center mb-5 font-medium">
        GK Digital has been established for labels and artists worldwide for
        over a decade. Since 2017, we have always made it our mission to make
        our artists reach the top of the game.
      </p>
      <h3 className="text-lg lg:text-xl  lg:w-[60%] text-center mb-10 font-medium">
        Don&apos;t have a label? No problem.
      </h3>
      <div className="flex flex-wrap justify-center gap-20">
        {cards.map((card, index) => (
          <div key={index} className="flip-card cursor-pointer rounded-xl">
            <div className="flip-card-inner rounded-xl">
              <div className="flip-card-front flex justify-center flex-col items-center rounded-xl">
                <img src={card.image} alt="Avatar" className="w-28" />
                <p className="font-semibold text-2xl mt-2">{card.main_text}</p>
              </div>
              <div className="flip-card-back flex justify-center items-center text-center px-4 rounded-xl font-medium text-gray-600">
                <p>{card.hidden_text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
