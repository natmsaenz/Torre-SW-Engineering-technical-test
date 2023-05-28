import React from "react";

function SkillGroup({ proficiency, skills }) {
  return (
    <div className="skill-group">
      <h4>{proficiency}</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillGroup;
