import React from "react";
import header from "../header/Header.css";
import Speakers from "../../assets/speaker.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css'

export default function PageTop() {
  return (
    <header className="header">


      <h1 id="speakers">
        <img src={Speakers} alt="bass-guitar" width="75" height="75"></img>
        Jeff Moro: Web Developer, Audio Engineer & Musician.
        <img src={Speakers} alt="bass-guitar" width="75" height="75"></img>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">
          About Me
        </button>
        <button type="button" class="btn btn-outline-primary">
          Portfolio
        </button>
        <button type="button" class="btn btn-outline-primary">
          Contact
        </button>
          <button type="button" class="btn btn-outline-primary">
          Resume
        </button>
      </div>
      </h1>

    </header>
  );
}
