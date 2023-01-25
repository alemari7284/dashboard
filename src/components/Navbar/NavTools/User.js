import rick from "../../../assets/rick.jpg";

export const User = () => {
  return (
    <div className="user">
      <img
        src={rick}
        width="50px"
        height="50px"
        style={{ borderRadius: "40px" }}
      ></img>
      <div className="info">
        <div style={{ fontWeight: "bold" }}>Rick Sanchez</div>
        <div style={{ color: "gray" }}>Designer</div>
      </div>
    </div>
  );
};
