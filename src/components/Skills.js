import React from "react";
import '../App.css';
import { skillData } from "./data/skillData";


const Skills = () => {
  return (
    <section id="skills" className="skill-section">
      <h3>Skills</h3>
      <div className="skill-1">
        {
          skillData.map((skill => (
            <div className="tooltip">{skill.icon}
              <span className="tooltiptext">{skill.title}</span>
            </div>
          )))
        }
      </div>
    </section >
  );
};

export default Skills;