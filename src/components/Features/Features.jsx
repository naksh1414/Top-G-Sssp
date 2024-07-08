import feature_pic_1 from "../../assets/home_digital_img.png";
import { NavLink } from "react-router-dom";
function Features() {
  const cards = [
    {
      image: feature_pic_1,
      heading: "Digital MARKETING",
      para: "We have a team of highly trained professionals focused on making the artist reach the right audience and make the song get the recognition it deserves by our selected and well-tested strategies. With our personalised strategies for every artist, we make sure the promotion campaign is a success and makes your fanbase grow bigger and better.",
      button_link: "",
      order1: 1,
      order2: 2,
      link: "/",
    },
    {
      image: feature_pic_1,
      heading: `Fingerprinting & Neighborhood rights`,
      para: "Many of the entitlements slip through the cracks every day and become unclaimed, unattributed, unmatched, copied, and undistributed for many reasons. We, at GK Digital, offer the extensive study of the global music licensing ecosystem.",
      button_link: "",
      order1: 2,
      order2: 1,
      link: "/services",
    },
    {
      image: feature_pic_1,
      heading: "Caller tune Distribution",
      para: "Who doesn’t want their favourite song as their caller tune? Get your song made available for hello tunes and caller tunes with our close association with mobile service operators.",
      button_link: "",
      order1: 1,
      order2: 2,
      link: "/",
    },
  ];

  return (
    <div className="flex flex-col lg:px-20 bg-white pb-16">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex mt-10 flex-col w-full lg:flex-row overflow-hidden items-center"
        >
          <div
            className={`w-full lg:w-1/2 p-10 lg:${
              card.order1 === 1 ? "order-1" : "order-2"
            }`}
          >
            <img src={card.image} alt="" className="w-full lg:w-10/12" />
          </div>
          <div
            className={`w-[90%] lg:w-1/2 lg:${
              card.order2 === 2 ? "order-2" : "order-1"
            }`}
          >
            <h1 className="font-bold text-2xl  lg:text-5xl mb-4">
              {card.heading}
            </h1>
            <p className="text-md lg:text-lg mb-5 text-gray-500 ">
              {card.para}
            </p>
            <NavLink to={card.link}>
              <button className=" text-white py-3 font-semibold bg-blue-500 rounded-full">
                Read More
              </button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
