import React, { useState, useEffect } from "react";
import Image from "../images/friendprofile.jpg";
import axios from "axios";
import "./leftbar.css";
import { useSelector } from "react-redux";

function Leftbar() {
  const userDetails = useSelector((state) => state.user);
  const user = userDetails.user;
  
  let id = user?.other?._id;
  
  const accesstoken = user?.accessToken;

  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/post/user/followingPost/${id}`,
          {
            headers: {
              token: accesstoken,
            },
          }
        );
        setPost(res.data);
      } catch (error) {}
    };
    getPost();
  }, []);
  // console.log(post)
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
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {post.map((item) => [
            item.image === "" ? (
              ""
            ) : (
              <div>
                <img
                  src={`${item.image}`}
                  className="ExploreImage"
                  alt="explore"
                />
              </div>
            ),
          ])}
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
