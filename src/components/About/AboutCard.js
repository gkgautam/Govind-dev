import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">GOVIND </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I am currently employed as a Senior Frontend developer at Cvent.
            <br />
            I have completed Bachelor of Technology in IT from University School of Information, Communication and Technology(USICT), GGSIPU New Delhi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and Writing Shayaris
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Science-fiction Movies- space movies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike riding and Travelling
            </li>
          </ul>

          <p style={{ color: "#7EC8E3" }}>
            "Build what matters, code what lasts"{" "}
          </p>
          <footer className="blockquote-footer">Govind</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
