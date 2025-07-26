import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/jenny.gif";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/cvent.gif";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/coach.gif";
import canteen from "../../Assets/Projects/canteen.png";
import JiraImage from "../../Assets/Projects/Jira.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card rounded">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Cvent Marketing Website Redesign"
              description="Led the frontend development for the Cvent.com redesign around 60 components, focusing on accessibility, performance, and responsive design. Implemented lazy loading, async JS, and design tokenization for scalable, maintainable code."
              ghLink="https://cvent.com"
              demoLink="https://cvent.com"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Social Tables (Cvent Event Diagramming) web development"
              description="I developed Social Tables (Cvent Event Diagramming) to empower planners and venues to collaborate in real time on interactive, to-scale event layouts. My work enabled photo-realistic 3D walkthroughs, visual seating management, live commenting, and streamlined workflows—transforming event planning into a faster, more creative, and connected digital experience"
              ghLink="https://www.socialtables.com/"
              demoLink="https://www.socialtables.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Coach Luxury Ecommerce"
              description="Developed a comprehensive design system for Coach.com, implemented various form validations and handling states around PLP, PDP, cart and checkout. Focused on accessibility, performance, and responsive design to enhance user experience across devices"
              ghLink="https://www.coach.com/"
              demoLink="https://www.coach.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="jennycraig web development"
              description="I developed the cart and checkout interfaces for JennyCraig.com, crafting seamless, user-friendly forms and integrating secure payment gateways. My work ensures a smooth shopping experience for customers—allowing them to manage their carts, complete purchases effortlessly, and trust their personal information is handled safely at every transaction step"
              ghLink="https://www.jennycraig.com/"
              demoLink="https://www.jennycraig.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Splashthat website development"
              description="I developed intuitive and accessible event registration forms, dynamic ticketing and attendee flows, and responsive UIs for SplashThat.com. My work ensures ARIA-compliant focus management and real-time validation, empowering every user to easily create, customize, and participate in branded events across devices."
              ghLink="https://splashthat.com/"
              demoLink="https://splashthat.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Katespade Ecommerce"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://www.katespade.com/"
              demoLink="https://www.katespade.com/"
            />
          </Col>
        </Row>
      </Container>

            <Container>
        <h1 className="project-heading">
          My Personal <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          These projects are before the era of AI.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={canteen}
              isBlog={false}
              title="Canteen Sync webapp development"
              description="One of my real problem solution idea, I developed this whole project by my own. CanteenSync is an automated cafeteria management system that streamlines menu, orders, and payments, reducing queues and food waste. Available on-premise and on-cloud, it ensures accuracy, efficiency, and enhanced service quality."
              ghLink="https://canteensync.in"
              demoLink="https://canteensync.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JiraImage}
              isBlog={false}
              title="Jira Clone web development"
              description="I developed a Jira clone just for practicing, you can navigate using guest visit button, It has feature like user authentication, task creation, and real-time updates. The app allows users to create, assign, and track tasks efficiently, enhancing team collaboration and productivity."
              ghLink="https://jira-software.vercel.app/"
              demoLink="https://jira-software.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Social Tables (Cvent Event Diagramming) web development"
              description="I developed Social Tables (Cvent Event Diagramming) to empower planners and venues to collaborate in real time on interactive, to-scale event layouts. My work enabled photo-realistic 3D walkthroughs, visual seating management, live commenting, and streamlined workflows—transforming event planning into a faster, more creative, and connected digital experience"
              ghLink="https://www.socialtables.com/"
              demoLink="https://www.socialtables.com/"              
            />
          </Col>

     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
