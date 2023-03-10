// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseList} = props
  const {courseTitle, description, duration, tagsList} = courseList
  return (
    <div className="card-container">
      <div className="heading-container">
        <h1>{courseTitle}</h1>
        <div className="clock">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="list-container">
        {tagsList.map(each => (
          <p className="list-item">{each.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
