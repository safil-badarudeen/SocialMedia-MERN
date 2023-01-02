import React from "react";
import profileImage from "../images/friendprofile.jpg";
import "./contentPost.css";

function ContentPost() {
  return (
    <div>
      <div className="ContentUploadContainer">
        <div style={{display:'flex',justifyContent:'center'}}>
          <img src={`${profileImage}`} className='ProfileImageContentTab' alt="" />
          <input type="" className="ContentWritingPart" placeholder="Write your real thought"/>
        </div>
      </div>
    </div>
  );
}

export default ContentPost;
