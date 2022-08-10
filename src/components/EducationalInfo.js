import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function EducationalInfo() {
  const [sslcboard, setSslcboard] = useState(
    sessionStorage.getItem("secondPage")
      ? JSON.parse(sessionStorage.getItem("secondPage")).sslc.board
      : "state"
  );
  const [sslcschool, setSslcschool] = useState(
    sessionStorage.getItem("secondPage")
      ? JSON.parse(sessionStorage.getItem("secondPage")).sslc.schoolname
      : ""
  );
  const [sslcpercentage, setSslcpercentage] = useState(
    sessionStorage.getItem("secondPage")
      ? JSON.parse(sessionStorage.getItem("secondPage")).sslc.percentage
      : ""
  );
  const [hscboard, setHscboard] = useState(
    sessionStorage.getItem("secondPage")
      ? JSON.parse(sessionStorage.getItem("secondPage")).hsc.board
      : "state"
  );
  const [hscschool, setHscschool] = useState(
    sessionStorage.getItem("secondPage")
      ? JSON.parse(sessionStorage.getItem("secondPage")).hsc.insitutename
      : ""
  );
  const [hscpercentage, setHscpercentage] = useState(
    sessionStorage.getItem("secondPage")
      ? JSON.parse(sessionStorage.getItem("secondPage")).hsc.percentage
      : ""
  );
  const [degreeboard, setDegreeboard] = useState(
    sessionStorage.getItem("secondPage")
      ? JSON.parse(sessionStorage.getItem("secondPage")).degree.board
      : "university"
  );
  const [degreeschool, setDegreeschool] = useState(
    sessionStorage.getItem("secondPage")
      ? JSON.parse(sessionStorage.getItem("secondPage")).degree.insitutename
      : ""
  );
  const [degreepercentage, setDegreepercentage] = useState(
    sessionStorage.getItem("secondPage")
      ? JSON.parse(sessionStorage.getItem("secondPage")).degree.percentage
      : ""
  );
  function submitHandler() {
    if (
      sslcschool !== "" &&
      sslcpercentage !== "" &&
      hscschool !== "" &&
      hscpercentage !== "" &&
      degreeschool !== ""
    ) {
      const education = {
        sslc: {
          board: sslcboard,
          schoolname: sslcschool,
          percentage: sslcpercentage,
        },
        hsc: {
          board: hscboard,
          insitutename: hscschool,
          percentage: hscpercentage,
        },
        degree: {
          board: degreeboard,
          insitutename: degreeschool,
          percentage: degreepercentage,
        },
      };
      console.log(education);
      sessionStorage.setItem("secondPage", JSON.stringify(education));
      alert("Saved successfully! You can go for the next step");
    } else {
      alert("Please fill all the neccessary details!");
    }
  }
  return (
    <div className="m-3 shadow-lg p-3 bg-white rounded">
      <h1>Educational Information</h1>
      <p style={{ textAlign: "left" }}>
        Enter the passout year with school/insitute name
      </p>
      <Container>
        <Row className="mb-4">
          <h2 style={{ textAlign: "left" }}>SSLC</h2>
          <Col>
            <select
              className="form-select"
              value={sslcboard}
              onChange={(e) => setSslcboard(e.target.value)}
            >
              <option value="state">State Board</option>
              <option value="cbse">CBSE</option>
              <option value="icse">ICSE</option>
            </select>
          </Col>
          <Col xs={6}>
            <input
              type="text"
              placeholder="School Name"
              className="form-control"
              value={sslcschool}
              onChange={(e) => setSslcschool(e.target.value)}
              required
            />
          </Col>
          <Col>
            <input
              type="text"
              placeholder="Percentage scored"
              className="form-control"
              value={sslcpercentage}
              onChange={(e) => setSslcpercentage(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <h2 style={{ textAlign: "left" }}>HSC or Diploma</h2>
          <Col>
            <select
              className="form-select"
              value={hscboard}
              onChange={(e) => setHscboard(e.target.value)}
            >
              <option value="state">State Board</option>
              <option value="cbse">CBSE</option>
              <option value="icse">ICSE</option>
              <option value="diploma">Diploma</option>
            </select>
          </Col>
          <Col xs={6}>
            <input
              type="text"
              placeholder="School or institute Name"
              className="form-control"
              value={hscschool}
              onChange={(e) => setHscschool(e.target.value)}
              required
            />
          </Col>
          <Col>
            <input
              type="text"
              placeholder="Percentage scored"
              className="form-control"
              value={hscpercentage}
              onChange={(e) => setHscpercentage(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <h2 style={{ textAlign: "left" }}>Degree</h2>
          <Col>
            <select
              className="form-select"
              value={degreeboard}
              onChange={(e) => setDegreeboard(e.target.value)}
            >
              <option value="university">University</option>
              <option value="autonomus">Autonomus</option>
            </select>
          </Col>
          <Col xs={6}>
            <input
              type="text"
              placeholder="University or institute Name"
              className="form-control"
              value={degreeschool}
              onChange={(e) => setDegreeschool(e.target.value)}
              required
            />
          </Col>
          <Col>
            <input
              type="text"
              placeholder="Percentage scored"
              className="form-control"
              value={degreepercentage}
              onChange={(e) => setDegreepercentage(e.target.value)}
              required
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
