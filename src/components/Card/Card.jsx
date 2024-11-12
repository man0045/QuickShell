import React from "react";
import { getInitials } from "../../Actions/DataAction";
import "./Card.css";
import Back from '../../Images/Backlog.svg';
import Cancel from '../../Images/Cancelled.svg';
import Don from '../../Images/Done.svg';
import in_pro from '../../Images/in-progress.svg';
import TODO from '../../Images/To-do.svg';
import SVG_Gray_Urg from '../../Images/SVG-Urgent_Priority_grey.svg'

const Card = ({ id, title, tag, status, priority, name }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const statusOrder = ['Backlog', 'Todo', 'In progress', 'Done'];
  const getStatusIndex = (status) => {
    return statusOrder.indexOf(status);
  };
  const initials = getInitials(name || "Not Available");

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "10px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#4a90e2", // Background color for initials
            color: "#fff", // Text color for initials
            fontWeight: "bold",
            fontSize: "14px"
          }}
        >
          {initials}
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        {!isStatus && (
          status === "Backlog" ? (
            <img src={Back} alt=""/>
          ) : status === "Todo" ? (
            <img src={TODO} alt="" />
          ) : status === "In progress" ? (
            <img src={in_pro} alt="" />
          ) : status === "Done" ? (
            <img src={Don} alt="" />
          ) : (
            <img src={Cancel} alt="" />
          )
        )}
        <span style={{ margin: "0.2px" }}>{title}</span>
      </div>
      <div className="cardTags">
        {!isPriority ? (
          <div className="tags color-grey">
            {priority === 1 || priority === 2 || priority === 3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-signal"
                viewBox="0 0 16 16"
              >
                <rect x="1" y="10" width="3" height="2" />
                <rect
                  x="5"
                  y="7"
                  width="3"
                  height="5"
                  opacity={priority === 2 || priority === 3 ? 1 : 0.25}
                />
                <rect
                  x="9"
                  y="4"
                  width="3"
                  height="8"
                  opacity={priority === 3 ? 1 : 0.25}
                />
              </svg>
            ) : priority === 4 ? (
              <img src={SVG_Gray_Urg} alt=""/>
            ) : (
              <p>...</p>
            )}
          </div>
        ) : null}
        {tag?.map((element, index) => (
          <div key={index} className="tags color-grey">
            {" "}
            <span>•••</span> {element}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
