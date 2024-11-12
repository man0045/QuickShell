import React from "react";
import { useSelector } from "react-redux";

import { DiCodeigniter } from "react-icons/di";
import "./DashBoard.css";
import Card from "../Card/Card";
import plus from '../../Images/add.svg';
import Back from '../../Images/Backlog.svg';
import Cancel from '../../Images/Cancelled.svg';
import Don from '../../Images/Done.svg';
import in_pro from '../../Images/in-progress.svg';
import SVG_Ur from '../../Images/SVG-Urgent_Priority_colour.svg';
import TODO from '../../Images/To-do.svg';

const DashBoard = () => {
  const grouping = localStorage.getItem("group"); // Get grouping value from localStorage
  const isStatus = grouping === "status";
  const isPriority = grouping === "priority";

  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div
        className="dashContainer"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {selectedData.map((element, index) => {
          const cardWidthPercentage = 18.7;
          return (
            <div
              key={index}
              className="dashCardContainer"
              style={{ width: `${cardWidthPercentage}%` }}
            >
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {user ? (
                    <div
                      className="imageContainer relative"
                      style={{
                        width: "10px",
                        height: "15px",
                        display: "inline-block",
                      }}
                    >
                    </div>
                  ) : isStatus ? (
                    <div
                      className="cardTitle"
                      style={{
                        width: "15px",
                        height: "15px",
                        display: "inline-block",
                        fontWeight: 200,
                      }}
                    >
                      {element[index].title === "Backlog" ? (
                        <img src={Back} alt="" />
                      ) : element[index].title === "Todo" ? (
                        <img src={TODO} alt="" />
                      ) : element[index].title === "In progress" ? (
                        <img src={in_pro} alt="" />
                      ) : element[index].title === "Done" ? (
                        <img src={Don} alt="" />
                      ) : (
                        <img src={Cancel} alt="" />
                      )}
                    </div>
                  ) : isPriority ? (
                    <div
                      className="tags color-grey"
                      style={{
                        width: "35px",
                        height: "30px",
                        display: "inline-block",
                      }}
                    >
                      {element[index].title === "Low" ||
                      element[index].title === "Medium" ||
                      element[index].title === "High" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
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
                            opacity={
                              element[index].title === "Medium" ||
                              element[index].title === "High"
                                ? 1
                                : 0.25
                            }
                          />
                          <rect
                            x="9"
                            y="4"
                            width="3"
                            height="8"
                            opacity={element[index].title === "High" ? 1 : 0.25}
                          />
                        </svg>
                      ) : element[index].title === "Urgent" ? (
                        <img src={SVG_Ur} alt="" />
                      ) : (
                        <p></p>
                      )}
                    </div>
                  ) : (
                    <DiCodeigniter />
                  )}
                  <span>
                    {grouping === "user" ? (
                      `${element[index]?.title[0]} ${element[index]?.title} ${element[index].value?.length}`
                    ) :`${element[index]?.title} ${element[index].value?.length}`}
                  </span>
                </div>
                <div className="rightView">
                  <img src={plus} alt="" />
                  <span style={{ letterSpacing: "2px" }}>...</span>
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {element[index]?.value?.map((item, ind) => {
                  return (
                    <Card
                      key={ind}
                      id={item.id}
                      title={item.title}
                      tag={item.tag}
                      status={item.status}
                      priority={item.priority}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        {isStatus && (
          <>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "90px", wordSpacing: "4px" }}>
                <div
                  className="cardTitle"
                  style={{
                    width: "13px",
                    height: "13px",
                    display: "inline-block",
                    fontWeight: 200,
                    marginRight: "8px"
                  }}
                >
                  <img src={Don} alt="" />
                </div>
                <span style={{ fontSize: "13px", fontWeight: "lighter" }}>Done</span>
                <span style={{ fontSize: "13px", color: "#8F9997",marginLeft: "8px" }}>0</span>
              </div>
              <div className="rightView">
                <img src={plus} alt="" />
                <span style={{ letterSpacing: "2px" }}>...</span>
              </div>
            </div>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "60px", wordSpacing: "4px" }}>
                <div
                  className="cardTitle"
                  style={{
                    width: "9px",
                    height: "9px",
                    display: "inline-block",
                    fontWeight: 200,
                    marginRight: "8px",
                  }}
                >
                  <img src={Cancel} alt="" />
                </div>
                <span style={{ fontSize: "13px", fontWeight: "lighter" }}>Canceled</span>
                <span style={{ fontSize: "13px", color: "#8F9997", marginLeft: "8px"}}>0</span>
              </div>
              <div className="rightView">
                <img src={plus} alt="" />
                <span style={{ letterSpacing: "2px" }}>...</span>
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};

export default DashBoard;
