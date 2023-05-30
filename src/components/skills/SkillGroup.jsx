import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import {
  FaStar,
  FaLightbulb,
  FaBookOpen,
  FaCrown,
  FaTrophy,
} from "react-icons/fa";
import "./SkillGroup.css";

export function SkillGroup({ proficiency, skills }) {
  const getSkillIcon = (proficiency) => {
    //eslint-disable-line no-unused-vars
    switch (proficiency) {
      case "no-experience-interested":
        return <FaLightbulb />;
      case "proficient":
        return <FaStar />;
      case "novice":
        return <FaBookOpen />;
      case "expert":
        return <FaTrophy />;
      case "master":
        return <FaCrown />;
      default:
        return null;
    }
  };
  const getTitleByProficiency = (proficiency) => {
    switch (proficiency) {
      case "no-experience-interested":
        return "No Experience, but Interested";
      case "proficient":
        return "Proficient";
      case "novice":
        return "Novice";
      case "expert":
        return "Expert";
      case "master":
        return "Master";
      default:
        return "";
    }
  };
  return (
    <div className="skill-group">
      <h4>
        {getSkillIcon(proficiency)}
        {getTitleByProficiency (proficiency)}
      </h4>

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
  return (
    <div className="skill">
      <button className={`skill-button ${proficiency}`}>{name}</button>
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
