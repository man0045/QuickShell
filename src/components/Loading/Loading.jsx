import React from "react";
const Loading = ({ size = 80, color = "#4fa94d", text = "Loading", textColor = "green", textStyle = {} }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div className="spinner" style={{ width: size, height: size, border: `5px solid ${color}`, borderTop: `5px solid transparent`, borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
      <span
        style={{
          fontSize: "30px",
          color: textColor,
          fontWeight: "bolder",
          letterSpacing: "2px",
          ...textStyle,
        }}
      >
        {text}
      </span>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
export default Loading;
