import React from "react";
import ContentPost from "../contentPostContainer/ContentPost";
import Post from "../postContainer/post";
import CoverImage from "../../component/images/coverimagejpg.jpg";

import "./profilemainPost.css";

function ProfileMainPost() {
  return (
    <div className="ProfileMainPostContainer">
      <div className="ProfileCoverImageContainer">
        <img src={`${CoverImage}`} className="coverImage" alt="" />
        <h3
          style={{
            color: "white",
            marginTop: -35,
            fontSize: 20,
            textAlign: "start",
            marginLeft: 40,
          }}
        >
          Your Profile
        </h3>
      </div>
      <ContentPost />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default ProfileMainPost;
