import { FaGithub } from 'react-icons/fa';
import { GrLink } from 'react-icons/gr';

const ProjectCard = ({ proj }) => {
  return (
    <div className='project-card'>
      {/* title */}
      <div className='project-details'>
        <a href={proj.site} target="_blank" rel="noreferrer noopener">
          <h4>{proj.name}</h4>
        </a>

        {/* image */}
        <a href={proj.site} target="_blank" rel="noreferrer noopener">
          <img src={proj.image} alt="project" />
        </a>

        {/* Languages used */}
        <p>Languages: <span className='span-lang'>{proj.icon}</span></p>
        <p>{proj.description}</p>

        {/* links */}
        <span className='span-icons'>
          <a href={proj.github} target="_blank" rel="noreferrer noopener"><FaGithub /></a>
          <a href={proj.site} target="_blank" rel="noreferrer noopener"><GrLink /></a>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;