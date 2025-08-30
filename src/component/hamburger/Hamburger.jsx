import "./Hamburger.css";

const Hamburger = ({ open, setOpen }) => {
  return (
    <div
      className={`hamburger ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
