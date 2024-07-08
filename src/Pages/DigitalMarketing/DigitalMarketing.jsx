import img from "../../assets/Services/digital_bann_er.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import Card4 from "../../components/Card/Card4";
import sharingMusing from "../../assets/digitalMarketing/sharing-music.png";
import community from "../../assets/digitalMarketing/community.png";
import influencer from "../../assets/digitalMarketing/influencer.png";
import music from "../../assets/digitalMarketing/music.png";
import playlist from "../../assets/digitalMarketing/playlist.png";
import event from "../../assets/digitalMarketing/event.png";
import meme from "../../assets/digitalMarketing/meme.png";
import management from "../../assets/digitalMarketing/management.png";
import content from "../../assets/digitalMarketing/content.png";
import campaign from "../../assets/digitalMarketing/campaigns.png";

function DigitalMarketing() {
  const card1Data = [
    {
      img: sharingMusing,
      heading: "Artist Music Sharing",
      para: "This is the process of promoting and selling music. There are many ways like including sharing it with potential listeners. One way to share music is through artist music sharing platforms, which allow artists to upload and share their music with listeners. These platforms can be a useful tool to promote music and reach a wider audience.",
      color: "ed1d3a",
    },
    {
      img: community,
      heading: "Community Development",
      para: "Building and cultivating a community around your music can be an important aspect of music marketing. A strong community of fans can help to promote and support your music, and can also provide valuable feedback and insights that can help you to improve and grow as an artist.",
      color: "5d5ad7",
    },
    {
      img: influencer,
      heading: "Influencer Marketing",
      para: "It involves working with social media influencers or other influential individuals to promote your music. This can be an effective way to reach a larger audience and build buzz around your music. It's important to choose influencers who are relevant to your target audience and have a strong following in your genre.",
      color: "07ace7",
    },
    {
      img: music,
      heading: "Music Licensing",
      para: "Music licensing is the process of obtaining permission to use a specific piece of music in a specific context, such as in a film, TV show, commercial, or video game. It can be a useful tool for music marketing because it can expose your music to a wider audience and help to build buzz around your music.",
      color: "f5811a",
    },
  ];
  const card2Data = [
    {
      img: playlist,
      heading: "Spotify Playlist",
      para: "Spotify playlists are curated collections of songs that are organized around a specific theme or mood. These playlists can be a useful tool for music marketing because they can expose your music to a large and diverse audience and help to build buzz around your music.",
      color: "ed1d3a",
    },
    {
      img: event,
      heading: "Events",
      para: "Events can be a useful tool for music marketing because they provide a platform for you to showcase your music and connect with your audience in a more personal and immersive way. There are different types of events which helps to promote your music:Live shows, Listening parties, Meet-and-greets, Workshops and panels",
      color: "5d5ad7",
    },
    {
      img: meme,
      heading: "Meme Marketing",
      para: "Meme marketing can be an effective way to promote music because memes are often shared widely and can help to create a sense of connection and relatability with your audience. To use meme marketing effectively for your music, it's important to choose memes that are relevant to your music and audience.",
      color: "07ace7",
    },
  ];
  const card3Data = [
    {
      img: management,
      heading: "Management",
      para: "Management is the process of planning, implementing, and monitoring social media marketing campaigns to achieve specific marketing and business goals. It involves creating and sharing content on social media platforms, engaging with followers, and analyzing and tracking the results of your efforts",
      color: "ed1d3a",
    },
    {
      img: content,
      heading: "Content Creation",
      para: "Content creation is the process of producing and sharing written, visual, or multimedia content as part of a marketing strategy. Creating and sharing high-quality content can help you to build a strong online presence, engage with your audience, and increase brand awareness.",
      color: "5d5ad7",
    },
    {
      img: campaign,
      heading: "Instagram & Facebook Campaigns",
      para: "Instagram and Facebook campaigns are marketing campaigns that are specifically designed to promote a product or service on the Instagram or Facebook platforms. These campaigns can be an effective way to reach a large and diverse audience and build buzz around your music or business.",
      color: "07ace7",
    },
  ];
  return (
    <div className="bg-gray-100">
      <section>
        <main>
          <div className="h-full relative">
            <img
              className="absolute h-[550px] md:h-[600px] w-full object-cover"
              src={img}
              alt="bgimg"
            />
            {/* <h1 className="">
              UPLOAD YOUR MUSIC TO THE WORLD
            </h1> */}
            <div className="flex-col justify-center text-white  h-[400px] md:h-[600px] text-[2rem] md:text-[3rem] z-10 font-bold relative  items-center flex text-center pt-[230px] md:pt-[230px]">
              {/* <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#07ace7] w-[33%] h-[150%]  z-[-1] -rotate-[5deg]"></div> */}
              <h2 className="text-2xl w-[60%] md:w-[40%] lg:w-[25%] bg-[#ffffff] font-extrabold text-center text-black -rotate-[2deg] -mb-2 py-2">
                The Most Trusted
              </h2>
              <h2 className="text-3xl md:text-4xl w-[80%] md:w-[70%] lg:w-[40%] bg-[#ff0054] font-extrabold text-center text-white py-3">
                MUSIC MARKET AGENCY
              </h2>
            </div>

            <a
              className="py-2 absolute -bottom-24 md:bottom-10 left-1/2 translate-x-[-50%] px-4 md:px-8 rounded-full bg-[#d7ff55] text-black flex items-center pointer-events-auto cursor-pointer z-10"
              href="tel:918013930002"
            >
              <FaPhoneAlt className="mr-2 md:mr-3" />
              Schedule a Call
            </a>
          </div>
        </main>
      </section>
      <div>
        <div className="relative mt-48 md:mt-16 z-[5] flex justify-center">
          {/* <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#07ace7] w-[33%] h-[150%]  z-[-1] -rotate-[5deg]"></div> */}
          <h2 className=" text-2xl md:text-4xl w-[45%] md:w-[50%] lg:w-[30%] bg-[#2abdf2] font-bold text-center text-white -rotate-[3deg]  py-2">
            What Do You Get?
          </h2>
        </div>
        <h2 className="text-3xl font-bold text-center mb-10 mt-4">
          Music Marketing
        </h2>
        <div className="flex flex-wrap px-10 lg::px-20 justify-center gap-10">
          {card1Data.map((card, index) => (
            <Card4
              key={index}
              number={index}
              img={card.img}
              heading={card.heading}
              para={card.para}
              color={card.color}
            />
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center my-10">
          Media & Playlists
        </h2>
        <div className="flex flex-wrap px-10 lg:px-20 justify-center gap-10">
          {card2Data.map((card, index) => (
            <Card4
              key={index}
              number={index}
              img={card.img}
              heading={card.heading}
              para={card.para}
              color={card.color}
            />
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center my-10">Social Media</h2>
        <div className="flex flex-wrap px-10 lg:px-20 justify-center gap-10 pb-10">
          {card3Data.map((card, index) => (
            <Card4
              key={index}
              number={index}
              img={card.img}
              heading={card.heading}
              para={card.para}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketing;
