// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectsList} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = projectsList
  return (
    <div className="projects-container">
      <img src={`${imageUrl}`} alt="project" className="project-image" />
      <div className="title-container">
        <h1>{projectTitle}</h1>
        <div className="calender">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} target="_blank" rel="noreferrer">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
