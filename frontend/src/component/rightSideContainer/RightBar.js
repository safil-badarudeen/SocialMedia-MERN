import React from "react";
import frndImage from "../images/friendImage.jpg";
import addFrnd from "../images/addFriend.png";
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
       
      </div>
      
      {/* container at right bottom
      -------------------------------------------------------- */}

        
      <div className="RightContainer2">
        <h3 style={{textAlign:'start', marginLeft:'20px'}}>Suggested for you</h3>
        <div style={{ marginTop:'10px '}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${frndImage}`} className="ProfileImage" alt="" />
              <div>
              <p style={{ marginLeft: "20px" }}>Sanam</p>
              <p style={{marginLeft:'20px',textAlign:'start',marginTop:'-17px',fontSize:'13px',color:'#aaa'}}>follows you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa",borderRadius:'35%' ,marginRight:'10px',cursor:'pointer'}}>
              <img src={`${addFrnd}`} className="AddFrndImage" alt="" />
            </div>
          </div>
        </div>
        {/* -------------------- */}
        <div style={{ marginTop:'10px '}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${frndImage}`} className="ProfileImage" alt="" />
              <div>
              <p style={{ marginLeft: "20px" }}>Sanam</p>
              <p style={{marginLeft:'20px',textAlign:'start',marginTop:'-17px',fontSize:'13px',color:'#aaa'}}>follows you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa",borderRadius:'35%' ,marginRight:'10px',cursor:'pointer'}}>
              <img src={`${addFrnd}`} className="AddFrndImage" alt="" />
            </div>
          </div>
        </div>
        {/* ----------------------- */}
        <div style={{ marginTop:'10px '}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${frndImage}`} className="ProfileImage" alt="" />
              <div>
              <p style={{ marginLeft: "20px" }}>Sanam</p>
              <p style={{marginLeft:'20px',textAlign:'start',marginTop:'-17px',fontSize:'13px',color:'#aaa'}}>follows you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa",borderRadius:'35%' ,marginRight:'10px',cursor:'pointer'}}>
              <img src={`${addFrnd}`} className="AddFrndImage" alt="" />
            </div>
          </div>
        </div>
        {/* ------------------------- */}
        <div style={{ marginTop:'10px '}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${frndImage}`} className="ProfileImage" alt="" />
              <div>
              <p style={{ marginLeft: "20px" }}>Sanam</p>
              <p style={{marginLeft:'20px',textAlign:'start',marginTop:'-17px',fontSize:'13px',color:'#aaa'}}>follows you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa",borderRadius:'35%' ,marginRight:'10px',cursor:'pointer'}}>
              <img src={`${addFrnd}`} className="AddFrndImage" alt="" />
            </div>
          </div>
        </div>
        {/* ------------------------ */}
        <div style={{ marginTop:'10px '}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${frndImage}`} className="ProfileImage" alt="" />
              <div>
              <p style={{ marginLeft: "20px" }}>Sanam</p>
              <p style={{marginLeft:'20px',textAlign:'start',marginTop:'-17px',fontSize:'13px',color:'#aaa'}}>follows you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa",borderRadius:'35%' ,marginRight:'10px',cursor:'pointer'}}>
              <img src={`${addFrnd}`} className="AddFrndImage" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;