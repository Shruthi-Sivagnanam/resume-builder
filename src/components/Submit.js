import React from "react";
import { Button } from "react-bootstrap";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export default function Submit() {
  function generatePDF() {
    if (
      !(
        sessionStorage.getItem("firstPage") ||
        sessionStorage.getItem("socialMedia") ||
        sessionStorage.getItem("secondPage") ||
        sessionStorage.getItem("thirdPage") ||
        sessionStorage.getItem("fourthPage")
      )
    ) {
      alert("Please fill the neccessary form to generate the resume");
    }
    const firstPage = JSON.parse(sessionStorage.getItem("firstPage"));
    const socialMedia = JSON.parse(sessionStorage.getItem("socialMedia"));
    const education = JSON.parse(sessionStorage.getItem("secondPage"));
    const job = JSON.parse(sessionStorage.getItem("thirdPage"));
    const skills = JSON.parse(sessionStorage.getItem("fourthPage")).split(",");
    const doc = new jsPDF();
    var loc = 0;
    doc.text("Personal Information", 20, 20);
    doc.setFontSize(12);
    doc.text("Name :" + firstPage.firstname + " " + firstPage.lastname, 20, 30);
    doc.text("Father name: " + firstPage.fathername, 20, 35);
    doc.text("Mother name: " + firstPage.mothername, 20, 40);
    doc.text("DOB : " + firstPage.dob, 20, 45);
    doc.text("Contact Info: ", 20, 50);
    doc.text("Email : " + firstPage.email, 30, 55);
    doc.text("Phno : " + firstPage.phno, 30, 60);
    doc.text("City : " + firstPage.city, 20, 65);
    doc.text("LinkedIn: " + socialMedia.linkedIn, 20, 70);
    if (socialMedia.github !== "") {
      doc.text("Github : " + socialMedia.github, 20, 75);
      loc = 75;
    }
    if (socialMedia.facebook !== "") {
      doc.text("Facebook : " + socialMedia.facebook, 20, loc + 5);
      loc = loc + 5;
    }
    if (socialMedia.insta !== "") {
      doc.text("Instagram : " + socialMedia.insta, 20, loc + 5);
      loc = loc + 5;
    }
    doc.setFontSize(16);
    doc.text("Educational background", 20, loc + 10);
    loc = loc + 10;
    autoTable(doc, {
      startY: loc + 5,
      head: [["Qualification", "Board", "Insitute Name", "Percentage"]],
      body: [
        [
          "SSLC",
          education.sslc.board,
          education.sslc.schoolname,
          education.sslc.percentage,
        ],
        [
          "HSC/Diploma",
          education.hsc.board,
          education.hsc.insitutename,
          education.hsc.percentage,
        ],
        [
          "Degree",
          education.degree.board,
          education.hsc.insitutename,
          education.degree.percentage,
        ],
      ],
    });
    loc = loc + 40;
    doc.setFontSize(16);
    if (job.work1.position !== "") {
      doc.text("Work Exprience", 20, loc + 10);
      loc = loc + 10;
      const head = [["Designation", "Company Name", "Year"]];
      var body = [];
      if (job.work2.position !== "") {
        body = [
          [job.work1.position, job.work1.company, job.work1.year],
          [job.work2.position, job.work2.company, job.work2.year],
        ];
      } else {
        body = [[job.work1.position, job.work1.company, job.work1.year]];
      }
      autoTable(doc, { startY: loc + 5, head: head, body: body });
      loc = loc + 30;
    }
    doc.setFontSize(16);
    doc.text("Objective and skills", 20, loc + 10);
    loc = loc + 15;
    doc.setFontSize(12);
    var i = 0;
    var page = 1;
    skills.map((skill) => {
      i += 5;
      if (i % 100 === 0 && page === 1) {
        doc.addPage();
        loc = 20;
        i = 0;
        page = 0;
      } else if (i % 250 === 0 && page === 0) {
        doc.addPage();
        loc = 20;
        i = 0;
      }
      return doc.text(skill, 30, loc + i);
    });
    doc.setFontSize(16);
    doc.save("resume.pdf");
  }
  return (
    <div className="m-3 shadow-lg p-3 bg-white rounded">
      <p>Before clicking the button. Please check the filled information.</p>
      <Button onClick={generatePDF}>Generate The Resume</Button>
    </div>
  );
}
