import React, { useState, useEffect } from "react";
import addFrnd from "../images/addFriend.png";
import addedFriend from "../images/addedFriendpng.png";

import "./rightBar.css";

function Follow({ userdetails }) {
  const [Requestimage, setRequestimage] = useState(addFrnd);
  const accesstoken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmJkOTY1MzVmYWU2NWUzZTM3YjlmOCIsInVzZXJuYW1lIjoic2hhaWxhIiwiaWF0IjoxNjczMjU1Mjg0fQ.n-TLoBYZcpR7mi5aWFEMB28vLhpSuGbwJRjDcG6DQ2s";
  const handleRequest = async (e) => {
    // await fetch(
    //   `http://localhost:5000/api/post/user/following/${userdetails._id}`,
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-type": "application/JSON",
    //       token: accesstoken,
    //     },
    //     // body: JSON.stringify({user})
    //   }
    // );
    setRequestimage(addedFriend);
  };

  return (
    <div
      key={userdetails._id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={userdetails.profile} className="ProfileImage" alt="" />
        <div>
          <p style={{ marginLeft: "20px" }}>{userdetails.username}</p>
          <p
            style={{
              marginLeft: "20px",
              textAlign: "start",
              marginTop: "-17px",
              fontSize: "13px",
              color: "#aaa",
            }}
          >
            follows you
          </p>
        </div>
      </div>
      <div
        style={{
          borderRadius: 35,
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        <img
          src={Requestimage}
          className="AddFrndImage"
          onClick={(e) => handleRequest(userdetails._id)}
          alt=""
        />
      </div>
    </div>
  );
}

export default Follow;
