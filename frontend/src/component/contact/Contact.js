import React from "react";
import ChatContainer from "../ChatContainer/ChatContainer";
import "./contact.css";
import profileImage from "../images/profilePic.jpg";

function Contact() {
  return (
    <div className='OpeningContainer'>
      <div className="mainContactContainer">
        <div>
          <div className="contactSearchBarContainer">
            <input
              type="search"
              placeholder="Search Your Friends"
              ClassName="searchForcontact"
            />
          </div>
          <div>
            <div className="ContactUserContainer">
              <img src={`${profileImage}`} className="chatUserImage" alt="" />
              <div className="ContactNameText">
                <p className="UserNameText">safil</p>
                <p className="OpenText"> Open Your message</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ChatContainer />
      </div>
    </div>
  );
}

export default Contact;
