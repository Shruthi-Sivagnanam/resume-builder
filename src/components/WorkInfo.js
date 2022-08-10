import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function WorkInfo() {
  const [work1pos, setWork1pos] = useState(
    sessionStorage.getItem("thirdPage")
      ? JSON.parse(sessionStorage.getItem("thirdPage")).work1.position
      : ""
  );
  const [work1company, setWork1company] = useState(
    sessionStorage.getItem("thirdPage")
      ? JSON.parse(sessionStorage.getItem("thirdPage")).work1.company
      : ""
  );
  const [work1year, setWork1year] = useState(
    sessionStorage.getItem("thirdPage")
      ? JSON.parse(sessionStorage.getItem("thirdPage")).work1.year
      : ""
  );
  const [work2pos, setWork2pos] = useState(
    sessionStorage.getItem("thirdPage")
      ? JSON.parse(sessionStorage.getItem("thirdPage")).work2.position
      : ""
  );
  const [work2company, setWork2company] = useState(
    sessionStorage.getItem("thirdPage")
      ? JSON.parse(sessionStorage.getItem("thirdPage")).work2.company
      : ""
  );
  const [work2year, setWork2year] = useState(
    sessionStorage.getItem("thirdPage")
      ? JSON.parse(sessionStorage.getItem("thirdPage")).work2.year
      : ""
  );
  function submitHandler() {
    const work = {
      work1: {
        position: work1pos,
        company: work1company,
        year: work1year,
      },
      work2: {
        position: work2pos,
        company: work2company,
        year: work2year,
      },
    };
    console.log(work);
    sessionStorage.setItem("thirdPage", JSON.stringify(work));
    alert("Saved successfully! You can go for the next step");
  }
  return (
    <div>
      <div className="m-3 shadow-lg p-3 bg-white rounded">
        <h1>Work Experience (if any)</h1>
        <Container>
          <Row className="mb-4">
            <h2 style={{ textAlign: "left" }}>Work 1</h2>
            <Col>
              <input
                type="text"
                placeholder="Position"
                className="form-control"
                value={work1pos}
                onChange={(e) => setWork1pos(e.target.value)}
              />
            </Col>
            <Col xs={6}>
              <input
                type="text"
                placeholder="Company Name"
                className="form-control"
                value={work1company}
                onChange={(e) => setWork1company(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                placeholder="Year"
                className="form-control"
                value={work1year}
                onChange={(e) => setWork1year(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mb-4">
            <h2 style={{ textAlign: "left" }}>Work 2</h2>
            <Col>
              <input
                type="text"
                placeholder="Position"
                className="form-control"
                value={work2pos}
                onChange={(e) => setWork2pos(e.target.value)}
              />
            </Col>
            <Col xs={6}>
              <input
                type="text"
                placeholder="Company Name"
                className="form-control"
                value={work2company}
                onChange={(e) => setWork2company(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                placeholder="Year"
                className="form-control"
                value={work2year}
                onChange={(e) => setWork2year(e.target.value)}
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
    </div>
  );
}
