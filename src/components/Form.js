import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import PersonalInfo from "./PersonalInfo";
import EducationalInfo from "./EducationalInfo";
import SkillsInfo from "./SkillsInfo";
import WorkInfo from "./WorkInfo";
import Submit from "./Submit";
import SocialMedia from "./SocialMedia";

export default function Form() {
  const [page, setPage] = useState(0);
  const pageTitle = [
    "Personal Information",
    "Social media",
    "Educational Information",
    "Work Experience (if any)",
    "Skills",
    "Submit Form",
  ];
  function pageDisplay() {
    switch (page) {
      case 0:
        return <PersonalInfo />;
      case 2:
        return <EducationalInfo />;
      case 1:
        return <SocialMedia />;
      case 3:
        return <WorkInfo />;
      case 4:
        return <SkillsInfo />;
      case 5:
        return <Submit />;
      default:
        return <PersonalInfo />;
    }
  }
  return (
    <div>
      <div className="form">
        <div className="progressbar"></div>
        <div className="form-container">
          <div className="header">
            <h1>Step {page + 1}</h1>
          </div>
          <div className="body row justify-content-center">
            <div className="col-md-8">{pageDisplay()}</div>
          </div>
          <div className="footer">
            <Row>
              <Col>
                <Button
                  className="m-3"
                  disabled={page === 0}
                  onClick={() => setPage(page - 1)}
                >
                  Prev
                </Button>
              </Col>
              <Col>
                <Button
                  className="m-3"
                  disabled={page === pageTitle.length - 1}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
