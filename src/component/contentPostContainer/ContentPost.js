import React from "react";
import profileImage from "../images/friendprofile.jpg";
import imageIcon from "../images/imageIcon.png";
import videoIcon from "../images/videoIcon.png";
import emojiIcon from "../images/emojiIcon.png";
import "./contentPost.css";

function ContentPost() {
  return (
    <div>
      <div className="ContentUploadContainer">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={`${profileImage}`}
            className="ProfileImageContentTab"
            alt=""
          />
          <input
            type=""
            className="ContentWritingPart"
            placeholder="Write your real thought"
          />
        </div>
        <div style={{ display: "flex", marginLeft: "80px" }}>
          <div>
            <img src={`${imageIcon}`} className="Icons" alt="" />
            <img src={`${emojiIcon}`} className="Icons" alt="" />
            <img src={`${videoIcon}`} className="Icons" alt="" />
            <button
              style={{
                marginLeft: "260px",
                paddingRight: "20px",
                paddingTop: "10px",
                paddingLeft: "20px",
                paddingBottom: "5px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "11px",
                cursor:'pointer'
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPost;
