import React, { useEffect, useState } from "react";
import ContentPost from "../contentPostContainer/ContentPost";
import CoverImage from "../../component/images/coverimagejpg.jpg";
import { ProfilePost } from "../ProfilePostContainer/ProfilePost";

import "./profilemainPost.css";
import axios from "axios";

function ProfileMainPost() {
  const [post, setPost] = useState([]);
  const accesstoken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmJkOTBhMzVmYWU2NWUzZTM3YjlmNCIsInVzZXJuYW1lIjoic2FmaWwiLCJpYXQiOjE2NzMyNTUzNTV9.JSi3ffNctkFjAaPipjNgUfAimAlZ2Pg-E_Ccrg53eKA";

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/post/user/getMypost",
          { headers: { token: accesstoken } }
        );
        setPost(res.data);
      } catch (error) {}
    };
    getPost();
  }, []);
 
  return (
    <div className="ProfileMainPostContainer">
      <div className="ProfileCoverImageContainer">
        <img src={`${CoverImage}`} className="coverImage" alt="" />
        <h3 className="profilemainh3style">Your Profile</h3>
      </div>
      <ContentPost />
      {post.map((item)=>(
      <ProfilePost posts={item}/>
      ))}
    </div>
  );
}

export default ProfileMainPost;
