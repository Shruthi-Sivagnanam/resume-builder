import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function SocialMedia() {
  const [linkedIn, setLinkedIn] = useState(
    sessionStorage.getItem("socialMedia")
      ? JSON.parse(sessionStorage.getItem("socialMedia")).linkedIn
      : ""
  );
  const [github, setGithub] = useState(
    sessionStorage.getItem("socialMedia")
      ? JSON.parse(sessionStorage.getItem("socialMedia")).github
      : ""
  );
  const [facebook, setFacebook] = useState(
    sessionStorage.getItem("socialMedia")
      ? JSON.parse(sessionStorage.getItem("socialMedia")).facebook
      : ""
  );
  const [insta, setInsta] = useState(
    sessionStorage.getItem("socialMedia")
      ? JSON.parse(sessionStorage.getItem("socialMedia")).insta
      : ""
  );
  function submitHandler() {
    if (linkedIn !== "") {
      const socialMedia = {
        linkedIn: linkedIn,
        github: github,
        facebook: facebook,
        insta: insta,
      };
      console.log(socialMedia);
      sessionStorage.setItem("socialMedia", JSON.stringify(socialMedia));
      alert("Saved successfully! You can go for the next step");
    } else {
      alert("Fill all the neccessary details");
    }
  }
  return (
    <div className="m-3 shadow-lg p-3 bg-white rounded">
      <h1>Further Contact Details</h1>
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              placeholder="LinkedIn"
              className="form-control mb-3"
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
            />
            <input
              type="text"
              placeholder="Github"
              className="form-control mb-3"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
            <input
              type="text"
              placeholder="Facebook"
              className="form-control mb-3"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
            <input
              type="text"
              placeholder="Instagram"
              className="form-control mb-3"
              value={insta}
              onChange={(e) => setInsta(e.target.value)}
            />
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
