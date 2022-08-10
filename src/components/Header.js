import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        className="shadow-lg p-3 mb-5 bg-white rounded"
      >
        <Container>
          <Navbar.Brand href="#home">About me</Navbar.Brand>
          <Navbar.Text>
            <i>Resume Builder</i>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}
