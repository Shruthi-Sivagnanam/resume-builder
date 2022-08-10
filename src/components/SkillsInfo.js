import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function SkillsInfo() {
  const [profile, setProfile] = useState(
    sessionStorage.getItem("fourthPage")
      ? JSON.parse(sessionStorage.getItem("fourthPage"))
      : ""
  );
  function submitHandler() {
    console.log(profile);
    sessionStorage.setItem("fourthPage", JSON.stringify(profile));
    alert("Successfully saved! check all the page before going to next step");
  }
  return (
    <div className="m-3 shadow-lg p-3 bg-white rounded">
      <h1>Skills</h1>
      <Container>
        <Row className="mb-4">
          <p style={{ textAlign: "left" }}>
            Enter your skills separated with commas.
          </p>
          <p style={{ textAlign: "left" }}>
            Example: "html,css,software developing"
          </p>
          <Col>
            <textarea
              className="form-control"
              style={{ minHeight: "200px" }}
              placeholder="skills...."
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={submitHandler}>Submit</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
