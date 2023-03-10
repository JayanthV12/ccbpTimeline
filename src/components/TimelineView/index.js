// Write your code here
import {Chrono} from 'react-chrono'
import {Component} from 'react'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  getChroneTimeline = () => {
    const {timelineItemsList} = this.props
    timelineItemsList.map(each => {
      if (each.categoryId === 'COURSE') {
        return <CourseTimelineCard courseList={each} />
      }
      return <ProjectTimelineCard projectsList={each} />
    })
  }

  render() {
    const {timelineItemsList} = this.props
    const courseList = timelineItemsList.filter(
      each => each.categoryId === 'COURSE',
    )
    const projectsList = timelineItemsList.filter(
      each => each.categoryId === 'PROJECT',
    )

    return (
      <div className="timeline-container">
        <h1 className="head">
          My Journey of <br /> CCBP 4.0
        </h1>

        <div>
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {courseList.map(each => (
              <CourseTimelineCard courseList={each} key={each.categoryId} />
            ))}
            {projectsList.map(each => (
              <ProjectTimelineCard projectsList={each} key={each.categoryId} />
            ))}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
