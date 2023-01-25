import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const Record = ({ faMain, title, project, desc, schedule, time }) => {
  const colors = ["blue", "green", "orange", "purple"];
  return (
    <div className="record">
      <FontAwesomeIcon
        style={{
          color: colors[Math.floor(Math.random() * 4)],
          borderRadius: "15px",
          border: "1px solid",
        }}
        icon={faMain}
      />
      <div style={{ fontWeight: "bold" }}>{title}</div>
      <div>
        <FontAwesomeIcon icon={faDollarSign} />
        {"  "}
        {desc}
      </div>
      <div>
        <FontAwesomeIcon
          icon={faClock}
          style={{
            color: colors[Math.floor(Math.random() * 4)],
          }}
        />
        {"  "}
        {schedule}
      </div>
      <div>{time}</div>
      <FontAwesomeIcon
        icon={faCirclePlay}
        style={{
          color: colors[Math.floor(Math.random() * 4)],
        }}
      />
      <FontAwesomeIcon
        icon={faEllipsis}
        style={{
          color: colors[Math.floor(Math.random() * 4)],
          borderRadius: "25px",
          border: "1px solid",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "14px",
          left: "87px",
          color: "grey",
        }}
      >
        {project}
      </div>
    </div>
  );
};
