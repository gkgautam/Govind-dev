import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <p className="project-heading" style={{ paddingBottom: "20px" }}>
        I commit daily — just not in public repos, out of <strong className="purple">respect for my employer’s </strong> codebase.
        My GitHub may look quiet, but my <strong className="purple">company’s repo </strong> tells a different story
      </p>
      <GitHubCalendar
        username="gkgautam"
        blockSize={15}
        blockMargin={5}
        color="#20bdfb"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
