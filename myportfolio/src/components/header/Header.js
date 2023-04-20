import React, { useState } from "react";
import header from "../header/Header.css";
import bassGuitar from "../../assets/bass-guitar.png";
import Speakers from "../../assets/speaker.png";
import Mixer from "../../assets/mixing.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PageTop() {
  return (
    <header className="header">


      <h1 id="speakers">
        <img src={Speakers} alt="bass-guitar" width="75" height="75"></img>
        Jeff Moro: Web Developer, Audio Engineer & Musician.
        <img src={Speakers} alt="bass-guitar" width="75" height="75"></img>
      </h1>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">
          Left
        </button>
        <button type="button" class="btn btn-outline-primary">
          Middle
        </button>
        <button type="button" class="btn btn-outline-primary">
          Right
        </button>
      </div>
    </header>
  );
}
