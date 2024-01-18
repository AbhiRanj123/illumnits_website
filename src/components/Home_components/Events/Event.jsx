import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import data from "../../../data/mainGalley.json";

import "./Event.scss";

function Events() {
  // console.log(data);
  return (
    <div className="events">
      <div className="event-intro">
        <h2>Events</h2>
        <p>
        Welcome to the vibrant world of creativity and expression, where words come to life, ideas find their voice, and artistic talents flourish. The Literary, Publications, and Fine Arts Society of NIT Silchar is a dynamic hub that celebrates the diverse realms of literature, publications, and fine arts on our campus. Committed to fostering a culture of intellectual and artistic exploration, our club serves as a platform for students to unleash their creativity and share their unique perspectives with the world.<br></br><br></br>Join us in our journey of self-expression, where literature meets art, and ideas converge to create a tapestry of inspiration.<br></br><br></br>Here are the various events carried out by ILLUMINITS throughout the year.
        </p>
      </div>
      <VerticalTimeline lineColor="#785140">
        {data.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work timeline-box"
            iconClassName="timeline-icon"
            textClassName="timeline-text"
            icon={<>{item.id < 10 ? `0${item.id}` : `${item.id}`}</>}
          >
            <h3 className="vertical-timeline-element-title">{item.name}</h3>
            <p>
              {item.desc}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Events;
