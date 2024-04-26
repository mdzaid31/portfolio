"use client";
import React, { useState, useRef, useEffect } from "react";

const Chatbot: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const handleClose = () => {
    setClicked(false);
  };

  return (
    <>
      {!clicked && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "1000", // Ensure the button is above other content
          }}
        >
          <button
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[50px]"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",

              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <center>
              <img
                src="/chatbot2.png" // Assuming the icon is placed in the public directory
                alt="Chatbot"
                style={{ height: "30px" }}
              />
            </center>
          </button>
        </div>
      )}
      {clicked && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "1000", // Ensure the chatbot is above other content
          }}
        >
          <div className="streamlit-app">
            <iframe
              src="https://mychatfolio.streamlit.app/?embedded=true"
              width="500px"
              height="600px" // Adjust the height as needed
              frameBorder="0"
              scrolling="no"
              title="Streamlit App"
              allowFullScreen
            ></iframe>
          </div>
          <button
            className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[230px]"
            onClick={handleClose}
            style={{
              marginTop: "10px",
            }}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Chatbot;
