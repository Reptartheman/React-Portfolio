import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../footer/footer.css";
import QRCode from "../../assets/QR wlink.png";
import GitHubIcon from "../../assets/github-sign.png";
import LinkedInIcon from "../../assets/linkedin.png";

export default function Footer() {
  return (
    <footer className="pagefooter">
        <div className="footer_container">
    <a href="https://github.com/Reptartheman" target={"_blank"}>
      <img src={GitHubIcon} alt="GitHubLink" width="50" height="50"></img>
    </a>
      <img
        id="footerQR"
        src={QRCode}
        alt="QR code"
        width="100"
        height="100"
      ></img>
      <a href="https://www.linkedin.com/in/jeff-moro-a0651742/" target={"_blank"}>
      <img src={LinkedInIcon} alt="LinkedInLink" width="50" height="50"></img>
      </a>
        </div>
        <p className="footerInfo">
        Webpage built using React by Jeff, 2022-2023.<br /> Email:
        Jeffmoromusic@gmail.com
      </p>
    </footer>
  );
}
