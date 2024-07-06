import img from "../../assets/wordwide1.png";
function Services() {
  const services = [
    {
      heading: "Worldwide Distribution",
      para: [
        "Get your music made available worldwide on the go. Release your tracks on 150 + streaming platforms and download services around the world, including iTunes, Saavn, Amazon, Hungama, Gaana, Youtube Music, Wynk Music and Spotify.",
        "Experience an expeditious service with us by going live in just a few hours and get a detailed accounting and trend report so you know all the statistical data of the promotion campaigns in just 3 months.With no third party involved, we offer full discrepancy and deal directly with music stores worldwide.No third party involved means more revenue generations for YOU.",
      ],
      image: img,
    },
    {
      heading: "Music Marketing & Digital Strategy",
      para: [
        "Don’t worry about the technicalities, just focus on being creative with your music and leave the rest to us. We got you. Reach the right kind of audience by well-established network of artists, promotion of the track through Instagram reels by renowned influencers and promotion through YouTube google AdSense ads to drive more traffic.",
        "Get those extra clicks on your profile with our assistance and make your song go viral with our unique promotion strategy.",
      ],
      image: img,
    },
    {
      heading: "Personal Assistant",
      para: [
        "Get in touch with our dedicated customer executives for any issues you might be facing. We Offer 1:1 customer support. Don’t you worry, you won’t be chatting with any bots but real humans who will understand your problems and provide you solutions in real time.",
      ],
      image: img,
    },
    {
      heading: "Protect your music rights",
      para: [
        "Your track’s ready? Let’s get you your music rights and claim royalty from throughout the world. Through our established community, we obtain data about unclaimed music rights and claim royalty from wherever your content is being used. Throughout all TV Stations, Radio and anywhere your music is played.",
      ],
      image: img,
    },
    {
      heading: "Youtube Monetisation",
      para: [
        "Take command of your YouTube marketing plan with our advanced back-end structure allowing you to monetise your content.",
        "We manage all of our artists and label channels through our multi channel network so you don’t have to worry about anything other than your passion.",
      ],
      image: img,
    },
    {
      heading: "Caller tune and CRBT distribution",
      para: [
        "Who doesn’t want their favourite song as their caller tune?",
        "Get your song made available for hello tunes and caller tunes with our close association with mobile service operators.",
        "Get your song made available for hello tunes with our close association with mobile service operators. Make people wait patiently while listening to your song.",
      ],
      image: img,
    },
  ];
  return (
    <div className="py-20 ">
      <h1 className="text-center text-3xl lg:text-5xl font-bold mb-8">
        <span className="">Our Services</span>
      </h1>
      <div className="w-full flex flex-col justify-center items-center gap-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center w-[95%] lg:w-4/5 bg-[#c6e6ff] p-10 rounded-3xl "
          >
            <div className="pr-3 order-2 lg:order-1 mt-5 lg:mt-0">
              <h1 className=" font-bold text-2xl lg:text-3xl mb-5">
                {service.heading}
              </h1>
              {service.para.map((para, index) => (
                <p
                  className="mb-2 text-md lg:text-lg text-gray-500 font-medium"
                  key={index}
                >
                  {para}
                </p>
              ))}
            </div>
            <img className="order-1 lg:order-2" src={service.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
