import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import { FaStar, FaCode, FaCogs } from "react-icons/fa";
import "./SkillGroup.css";

export function SkillGroup({ proficiency, skills }) {
  return (
    <div className="skill-group">
      <h4>{proficiency}</h4>
      {skills.map((skill, index) => (
        <Skill
          key={index}
          proficiency={skill?.proficiency}
          name={skill?.name}
        />
      ))}
    </div>
  );
}

function Skill({ proficiency, name }) {
  const getSkillIcon = (proficiency) => {
    //eslint-disable-line no-unused-vars
    switch (proficiency) {
      case "no-experience-interested":
        return <FaStar />;
      case "proficient":
        return <FaCode />;
      case "novice":
        return <FaCogs />;
      default:
        return null;
    }
  };
  return (
    <div className="skill">
      <button className={`skill-button ${proficiency}`}>
        {getSkillIcon(proficiency)}
        {name}
      </button>
    </div>
  );
}

SkillGroup.propTypes = {
  proficiency: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};
Skill.propTypes = {
  proficiency: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Skill;
