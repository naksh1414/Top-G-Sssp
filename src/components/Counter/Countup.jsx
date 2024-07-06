import CountUp from "react-countup";
const Counter = ({ count }) => {
  return (
    <div className="text-white my-2">
      <CountUp
        start={0}
        end={count}
        duration={2.75}
        separator=""
        decimals={0}
        decimal=""
        prefix="+"
        suffix=""
        onEnd={() => console.log("Ended! 👏")}
        onStart={() => console.log("Started! 💨")}
        className="text-[0.6rem] md:text-[1.5rem] font-bold"
      ></CountUp>
    </div>
  );
};

export default Counter;
