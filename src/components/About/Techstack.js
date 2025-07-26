import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
} from "react-icons/si";
import { SiHtml5,
  SiTailwindcss,
  SiStorybook,
SiAdobe
 } from "react-icons/si";

 import { FaSalesforce,
  FaAws
  } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><div className="icon-text">Javascript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /><div className="icon-text">HTML5</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><div className="icon-text">MongoDB</div>
      </Col>

            <Col xs={4} md={2} className="tech-icons">
        <DiReact /><div className="icon-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs /><div className="icon-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><div className="icon-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><div className="icon-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiStorybook /><div className="icon-text">Storybook</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss /><div className="icon-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSalesforce /><div className="icon-text">Salesforce</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaAws /><div className="icon-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe /><div className="icon-text">Adobe Laun.</div>
      </Col>
    </Row>
  );
}

export default Techstack;
