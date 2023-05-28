import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import { FaStar, FaCode, FaCogs } from 'react-icons/fa';
import "./SkillGroup.css"

function SkillGroup({ proficiency, skills }) {
  const getSkillIcon = (proficiency) => { //eslint-disable-line no-unused-vars
    switch (proficiency) {
      case 'Beginner':
        return <FaStar />;
      case 'Intermediate':
        return <FaCode />;
      case 'Expert':
        return <FaCogs />;
      default:
        return null;
    }};
  return (
    <div className="skill-group">
      <h4>{proficiency}</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>   <button className={`skill-button ${proficiency.toLowerCase()}`}>
          {getSkillIcon(proficiency)}
          {skill}
        </button></li>
        ))}
      </ul>
    </div>
  );
}

SkillGroup.propTypes = {
  proficiency: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  
};
export default SkillGroup;
