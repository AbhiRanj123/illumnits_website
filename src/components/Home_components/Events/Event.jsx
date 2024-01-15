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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis
          quod possimus quaerat facilis! Eos fuga velit eius dolorum, iste quod
          exercitationem veniam sunt at saepe minima dolore commodi fugiat?
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
