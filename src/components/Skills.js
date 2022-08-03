import React from "react";
import '../App.css';
import { FaBootstrap, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiCsswizardry, SiCypress, SiExpress, SiHeroku, SiJavascript, SiJest, SiJira, SiNetlify, SiPostgresql, SiRedux, SiVercel, SiVisualstudiocode } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { AiOutlineConsoleSql } from "react-icons/ai";
import { VscDebugAlt } from 'react-icons/vsc';
import { GrDeploy } from 'react-icons/gr';

const Skills = () => {
  return (
    <section id="skills" className="skill-section">
      <h3>Skills</h3>
      <div className="skill-1">
        <div className="skill-2">
          <h4>Frontend</h4>
          <p>
            <FaReact />
            <SiRedux />
            <TbApi />
            <SiJest />
            <SiCypress />
            <SiJavascript />
            <FaHtml5 />
            <SiCsswizardry />
            <FaBootstrap />
          </p>
        </div>
        <div className="skill-2">
          <h4>Backend</h4>
          <p>
            <SiExpress />
            <FaNodeJs />
            <FaGitAlt />
            <FaGithub />
            <AiOutlineConsoleSql />
            <SiPostgresql />
            <SiVisualstudiocode />
            <SiVercel />
            <SiHeroku />
            <SiNetlify />
          </p>
        </div>
        <div className="skill-2">
          <h4>Additional Skills</h4>
          <p>
            <VscDebugAlt />
            <GrDeploy />
            <SiJira />
            <FaFigma />
          </p>
        </div>
      </div>
    </section >
  );
};

export default Skills;