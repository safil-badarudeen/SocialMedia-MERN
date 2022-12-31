import React from "react";

import AdImage from "../images/adimage.webp";

import "./rightBar.css";

function RightBar() {
  return (
    <div className="Rightbar">
      <div className="RightContainer">
        <div className="AdsContainer">
          <div>
            <img src={`${AdImage}`} className="AdsImage" alt=""></img>
          </div>
          <div className>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: "-40px",
              }}
            >
              buy udemy course
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "12px",
                marginTop: "-20px",
              }}
            >
              offer will end soon
            </p>
          </div>
        </div>
        <div className="AdsContainer">
          <div>
            <img src={`${AdImage}`} className="AdsImage" alt=""></img>
          </div>
          <div className>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: "-40px",
              }}
            >
              buy udemy course
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "12px",
                marginTop: "-20px",
              }}
            >
              offer will end soon
            </p>
          </div>
        </div>
        <div className="AdsContainer">
          <div>
            <img src={`${AdImage}`} className="AdsImage" alt=""></img>
          </div>
          <div className>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: "-40px",
              }}
            >
              buy udemy course
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "12px",
                marginTop: "-20px",
              }}
            >
              offer will end soon
            </p>
          </div>
        </div>
      </div>
      <div className="RightContainer2">
        
        
      </div>
    </div>
  );
}

export default RightBar;
