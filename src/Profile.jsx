import { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import SkillGroup from "./SkillGroup";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-picture">
        <img src={reactLogo} alt="profile picture" />
      </div>
      <h2 className="name">Torre User</h2>
      <div className="skills">
        <h3>Skills and interests</h3>
        <div className="skill-group">
          <h4>Master</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="skill-group">
          <h4>Expert</h4>
          <ul>
            <li>React</li>
            <li>C</li>
          </ul>
        </div>
        <div className="skill-group">
          <h4>Proficient</h4>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skill-group">
          <h4>Beginner</h4>
          <ul>
            <li>JavaScript</li>
            <li>C++</li>
          </ul>
        </div>
        <div className="skill-group">
          <h4>No experience, but interested</h4>
          <ul>
            <li>Vue.js</li>
            <li>C#</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
