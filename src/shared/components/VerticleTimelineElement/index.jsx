import React from "react";
// import { Avatar } from "native-base";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
export const VerticleTimelineElement = ({ data }) => {
    return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work timeline-card"
      // date={data.date}
      dateClassName="date-class"
      contentStyle={{
        background: "white",
        color: "#000",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
      contentArrowStyle={{ borderRight: "7px solid" }}
      iconStyle={{
        background: "rgb(109, 40, 217)",
        color: "#fff",
        borderColor: "black",
      }}
    >
      <h3 className="vertical-timeline-element-title">{data.name}</h3>
      <h4 className="vertical-timeline-element-subtitle">{data.type}</h4>
      <p>email: {data.email}</p>
      <a className="link" style={{ color: "black" }} href="#">
        #42345295dn..3535
      </a>
      <p>{data.date}</p>

    </VerticalTimelineElement>
    )
}