import React from "react";
import Logo from "../../assets/Cards/image-gallery-spotify-logo-21.png";
import Btn from "../Buttons/Btn";
import apple from "../../assets/Cards/OIP.jpeg";
import insta from "../../assets/Cards/instagram-logo-transparent-background-2.png";
import Face from "../../assets/Cards/Facebook_logo_36x36.svg.png";
import Gaana from "../../assets/Cards/gaana.png";
import Sound from "../../assets/Cards/sound.jpeg";
const Card = () => {
  const Data = [
    {
      img: Logo,
      title: "Spotify",
      desc: "Spotify is the world’s leading music streaming service with more than 500 million users. Get paid every time someone listens to your music on Spotify. We assist you in reaching millions of people by getting your song uploaded on Spotify with ease.",
      btn: "Learn More",
    },
    {
      img: apple,
      title: "Apple Music & iTunes",
      desc: "With over 80 million subscribers, Apple Music is the second largest music streaming service in the world and its a free App to manage your music. Upload you music in over 100 countries through apple music ",
      btn: "Learn More",
    },
    {
      img: insta,
      title: "Instagram",
      desc: "Instagram is most trending social media platforms. Add your music to Instagram stories, reel and posts sounds. Social focus & reach to attract more audience. Your music can reach around the world and users can add your music to their stories and Reels.",
      btn: "Learn More",
    },
    {
      img: Face,
      title: "Facebook",
      desc: "Facebook is most used social platforms. Add your music to Facebook stories. Strength: Social focus & reach. Your music can reach around the world and users can add your music to their stories.",
      btn: "Learn More",
    },
    {
      img: Gaana,
      title: "Gaana",
      desc: "India's largest commercial music streaming service over 200 million users. It provides both Indian and international music content. Get your song added to the largest Indian music catalog which is available to all users.",
      btn: "Learn More",
    },
    {
      img: Sound,
      title: "Sound Cloud",
      desc: "SoundCloud is a European online audio distribution platform and music sharing website with millions of users. We help you upload, promote, and share your audio on SoundCloud and reach a wider range of audience.",
      btn: "Learn More",
    },
  ];
  return (
    <main className="h-full flex flex-wrap justify-center my-10 md:space-x-4">
      {Data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col space-y-4 h-[450px] w-[300px] md:w-[400px] justify-center items-center my-10 border-2 hover:shadow-xl rounded-md"
        >
          <img className="h-20 w-20 mt-4" src={item.img} alt={item.title} />
          <h1 className="text-[1.5rem] font-bold">{item.title}</h1>
          <p className="text-[1.1rem] h-[200px] text-black/55 text-center px-2">
            {item.desc}
          </p>
          <div className="pb-4">
            <Btn data={item.btn} />
          </div>
        </div>
      ))}
    </main>
  );
};

export default Card;
