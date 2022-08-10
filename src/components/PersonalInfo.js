import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function PersonalInfo() {
  const [name, setName] = useState(
    sessionStorage.getItem("firstPage")
      ? JSON.parse(sessionStorage.getItem("firstPage")).firstname
      : ""
  );
  const [lastname, setLastname] = useState(
    sessionStorage.getItem("firstPage")
      ? JSON.parse(sessionStorage.getItem("firstPage")).lastname
      : ""
  );
  const [fathername, setFathername] = useState(
    sessionStorage.getItem("firstPage")
      ? JSON.parse(sessionStorage.getItem("firstPage")).fathername
      : ""
  );
  const [mothername, setMothername] = useState(
    sessionStorage.getItem("firstPage")
      ? JSON.parse(sessionStorage.getItem("firstPage")).mothername
      : ""
  );
  const [phno, setPhno] = useState(
    sessionStorage.getItem("firstPage")
      ? JSON.parse(sessionStorage.getItem("firstPage")).phno
      : ""
  );
  const [email, setEmail] = useState(
    sessionStorage.getItem("firstPage")
      ? JSON.parse(sessionStorage.getItem("firstPage")).email
      : ""
  );
  const [city, setCity] = useState(
    sessionStorage.getItem("firstPage")
      ? JSON.parse(sessionStorage.getItem("firstPage")).city
      : ""
  );
  const [dob, setDob] = useState(
    sessionStorage.getItem("firstPage")
      ? JSON.parse(sessionStorage.getItem("firstPage")).dob
      : ""
  );
  function submitHandler() {
    if (
      name !== "" &&
      fathername !== "" &&
      mothername !== "" &&
      email !== "" &&
      phno !== "" &&
      city !== "" &&
      dob !== ""
    ) {
      const personal = {
        firstname: name,
        lastname: lastname,
        fathername: fathername,
        mothername: mothername,
        phno: phno,
        email: email,
        city: city,
        dob: dob,
      };
      console.log(personal);
      sessionStorage.setItem("firstPage", JSON.stringify(personal));
      alert("Saved successfully! You can go for the next step");
    } else {
      alert("Fill all the neccessary details");
    }
  }

  return (
    <div>
      <div className="m-3 shadow-lg p-3 bg-white rounded">
        <h1>Personal Information</h1>
        <Container>
          <Row>
            <Col>
              <input
                type="text"
                placeholder="First Name"
                className="form-control mb-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-control mb-3"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </Col>
            <Col>
              <input
                type="text"
                placeholder="Father's Name"
                className="form-control mb-3"
                value={fathername}
                onChange={(e) => setFathername(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Mother's Name"
                className="form-control mb-3"
                value={mothername}
                onChange={(e) => setMothername(e.target.value)}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                type="date"
                placeholder="DOB"
                className="form-control mb-3"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                type="email"
                placeholder="Email Id"
                className="form-control mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Phone number"
                className="form-control mb-3"
                value={phno}
                onChange={(e) => setPhno(e.target.value)}
                required
              />
              <input
                type="link"
                placeholder="City"
                className="form-control mb-3"
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
    </div>
  );
}
