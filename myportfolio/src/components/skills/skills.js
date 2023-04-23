import React from "react";
import "./skills.css";
import Resume from "../../assets/Jeff Moro Resume.docx.pdf";
import "../../App.css";

export default function Skills() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = { Resume };
    link.download = "Jeff Moro Resume.pdf";
    link.click();
  };

  return (
    
    <section className="sectioncontainer">
      <h1>Resume and Skills</h1>
      <div className="parent">
        <div id="education" className="grid-item" aria-label="Education">
            <h2 className="skillsheader">Education</h2>
            <ul>
                <li>UConn Coding Bootcamp</li>
                <li>University of Bridgeport</li>
                <li>Western Connecticut State University</li>                
            </ul>
        </div>
        <div className="grid-item" aria-label="Education">
            <h2 className="skillsheader">Skills</h2>
            <ul>
                <li>Full Stack Web Development</li>
                <li>Audio Engineering</li>
                <li>Music Teaching</li>                
            </ul>
        </div>
        <button className="grid-item" id ="downloadButton" onClick={handleDownload}>Download Jeff's Resume</button>
      </div>
    </section>
  );
}
