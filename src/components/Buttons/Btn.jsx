import "./Btn.css";
const Btn = ({ data }) => {
  return (
    <button className="text-black font-semibold">
      <span className="text">{data}</span>
    </button>
  );
};

export default Btn;
