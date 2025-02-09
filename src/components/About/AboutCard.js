import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Deshawn Mitchell </span>
            from <span className="purple"> Linden, Guyana</span>
            <br />
            I am currently employed as a interim M.I.S Officer at an Electricity distribution company in my home town 
            <br />
            I have completed Computer Science at the Diplumacy Level at the Linden Technical Institution & pursuing additional growth
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic designs & Animattion
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be the |KEY| on the |BOARD| game called life!!"{" "}
          </p>
          <footer className="blockquote-footer">Deshawn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
