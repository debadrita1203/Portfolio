import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaCode } from 'react-icons/fa';

function SkillsList() {
    const skills = [
      { icon: <FaHtml5 />, name: 'HTML5' },
      { icon: <FaCss3Alt />, name: 'CSS3' },
      { icon: <FaJs />, name: 'JavaScript' },
      { icon: <FaReact />, name: 'React' },
      { icon: <FaJava />, name: 'Java' },
    ];
  
    return (
      <div className="skills">
        <h1>Skills</h1>
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="icon">{skill.icon}</div>
            <span className="label">{skill.name}</span>
          </div>
        ))}
      </div>
    );
  }

export default SkillsList;
