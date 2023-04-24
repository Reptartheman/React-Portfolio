import React from "react";
import "../pagetop/pagetop.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

export default function PageTop({ currentPage, handlePageChange }) {


  return (
    <header className="header">
      <h1>
        Jeff Moro: Full Stack Web Developer, Audio Engineer & Musician.
        <div class="btn-group" role="group" aria-label="Outlined Buttons">
          <a href="#About">
            <button className={currentPage === "About" ? "btn btn-primary" : "btn btn-outline-primary"} onClick= {() => handlePageChange("About")}type="button">
              About Me
            </button>
          </a>
          <a href="#Skills">
            <button className={currentPage === "Skills" ? "btn btn-primary" : "btn btn-outline-primary"} onClick= {() => handlePageChange("Skills")} type="button" class="btn btn-outline-primary">
              Skills
            </button>
          </a>
          <a href="#Web Apps">
            <button className={currentPage === "Web Apps" ? "btn btn-primary" : "btn btn-outline-primary"} onClick= {() => handlePageChange("Web Apps")} type="button" class="btn btn-outline-primary">
              Web Apps
            </button>
          </a>
          <a href="#Contact">
            <button className={currentPage === "Contact" ? "btn btn-primary" : "btn btn-outline-primary"} onClick= {() => handlePageChange("Contact")} type="button" class="btn btn-outline-primary">
              Contact
            </button>
          </a>
        </div>
      </h1>
    </header>
  );
}
