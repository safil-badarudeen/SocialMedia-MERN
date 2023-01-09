import React from "react";
import Image from "../images/friendprofile.jpg";
import "./leftbar.css";

function Leftbar() {
  return (
    <div className="Leftbar">
      <div className="NotificationContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginLeft: "-20px" }}> Notifications </p>
          <p style={{ color: "#aaaa" }}> See All</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            width: "240px",
            marginTop: "-10px",
          }}
        >
          <img
            src={`${Image}`}
            className="NotificationImage"
            alt="notificationImage"
          />
          <p style={{ marginLeft: "10px", color: "#aaa", fontSize: "16px" }}>
            Mubashir liked your post of profile
          </p>
          <img src={`${Image}`} className="LikedImage" alt="Liked" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            width: "240px",
            marginTop: "-10px",
          }}
        >
          <img
            src={`${Image}`}
            className="NotificationImage"
            alt="notificationImage"
          />
          <p style={{ marginLeft: "10px", color: "#aaa", fontSize: "16px" }}>
            mubashir started following you{" "}
          </p>
          <img
            src={`${Image}`}
            className="FollowingUserImage"
            alt="followingUser"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            width: "240px",
            marginTop: "-10px",
          }}
        >
          <img
            src={`${Image}`}
            className="NotificationImage"
            alt="notificationImage"
          />
          <p style={{ marginLeft: "10px", color: "#aaa", fontSize: "16px" }}>
            Mubashir liked your post of profile
          </p>
          <img src={`${Image}`} className="LikedImage" alt="Liked " />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            width: "240px",
            marginTop: "-10px",
          }}
        >
          <img
            src={`${Image}`}
            className="NotificationImage"
            alt="notificationImage"
          />
          <p style={{ marginLeft: "10px", color: "#aaa", fontSize: "16px" }}>
            mubashir started following you
          </p>
          <img src={`${Image}`} className="FollowingUserImage" alt="Liked " />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            width: "240px",
            marginTop: "-10px",
          }}
        >
          <img
            src={`${Image}`}
            className="NotificationImage"
            alt="notificationImage"
          />
          <p style={{ marginLeft: "10px", color: "#aaa", fontSize: "16px" }}>
            Mubashir liked your post of profile
          </p>
          <img src={`${Image}`} className="LikedImage" alt="Liked " />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            width: "240px",
            marginTop: "-10px",
          }}
        >
          <img
            src={`${Image}`}
            className="NotificationImage"
            alt="notificationImage"
          />
          <p style={{ marginLeft: "10px", color: "#aaa", fontSize: "16px" }}>
            Mubashir liked your post of profile
          </p>
          <img src={`${Image}`} className="LikedImage" alt="Liked " />
        </div>
      </div>
      <div className="ExploreContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginLeft: "-20px" }}>Explore </p>
          <p style={{ color: "#aaaa", marginLeft: "30px" }}> See All</p>
        </div>
        <div>
          <img src={`${Image}`} className="ExploreImage" alt="explore" />
          <img src={`${Image}`} className="ExploreImage" alt="explore" />
          <img src={`${Image}`} className="ExploreImage" alt="explore" />
          <img src={`${Image}`} className="ExploreImage" alt="explore" />
          <img src={`${Image}`} className="ExploreImage" alt="explore" />
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
