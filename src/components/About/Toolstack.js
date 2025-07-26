import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiJirasoftware,
  SiGithub,
  SiOpenai,
  SiAdobe,
  SiFigma,

} from "react-icons/si";
import {
  DiGoogleAnalytics,
    DiDrupal,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleAnalytics /><div className="icon-text">Glean AI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware /><div className="icon-text">Jira</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai /><div className="icon-text">ChatGPT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDrupal /><div className="icon-text">Drupal</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /><div className="icon-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe /><div className="icon-text">Adobe Laun.</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /><div className="icon-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><div className="icon-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><div className="icon-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack /><div className="icon-text">Slack</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /><div className="icon-text">Vercel</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
