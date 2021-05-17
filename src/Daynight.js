import React from "react";

const Daynight = () => {
  const currTimes = new Date().toLocaleTimeString();
  let currtime = new Date(2020, 10, 20, 13);
  currtime = currtime.getHours();
  let message = " ";
  let style = {};

  if (currtime >= 6 && currtime < 12) {
    message = "Good morning 🌅";
    style.color = "blue";
  } else if (currtime >= 12 && 16 > currtime) {
    message = "Good afternoon 🥵";
    style.color = "Orange";
  } else if (currtime >= 16 && 20 > currtime) {
    message = `Good Evening 🌆 `;
    style.color = "Green";
  } else {
    message = "Good Night 🦉";
    style.color = "maroon";
  }
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        marginTop: "400px",
      }}
    >
      <h1>
        hello sir,<span style={style}>{message} </span>
        time now is <span>{currTimes}</span>
      </h1>
    </div>
  );
};

export default Daynight;
