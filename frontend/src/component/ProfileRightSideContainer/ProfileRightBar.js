import React, { useState, useEffect } from "react";
import Follow from "../rightSideContainer/Follow";
import axios from "axios";

import "./profilerightbar.css";

function ProfileRightBar() {
  const [followerUser, setFollowerUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/usersfollow/63bbd90a35fae65e3e37b9f4"
        );
        setFollowerUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  //useEffect for rightBottomContainer (for suggestions)


  const [SuggestionUser, setSuggestionUser] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/usersuggestions/63bbd90a35fae65e3e37b9f4"
        );
        setSuggestionUser(res.data);
      } catch (error) {
        console.log(error)
      }
    };
    getPost();
  }, []);

  return (
    <div className="ProfileRightBar">
      <div className="HabitiansRequestContainer">
        <p style={{ fontWeight: "bold" }}>Followers</p>

        {followerUser.map((item) => (
          <div style={{ marginTop: 15 }}>
            <div style={{ display: "flex", marginTop: 1 }}>
              <img
                src={item.profile}
                className="RequestTapProfilePic"
                alt=""
              ></img>
              <p className="followerName">{item.username}</p>
            </div>
          </div>
        ))}
      </div>

      {/* profile Right side bottom container
     ------------------------------- */}

      <div className="profileRightContainer2">
        <h3 className="profilesuggestionheading">Suggested for you</h3>
        {SuggestionUser.map((user) => (
          <Follow userdetails={user} />
        ))}
      </div>
    </div>
  );
}

export default ProfileRightBar;
