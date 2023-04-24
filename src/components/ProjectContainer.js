import React, { useState } from "react";
import PageTop from './pagetop/pagetop'
import About from "./about/About";
import Footer from "./footer/footer";
import WorkSamples from "./worksamples/worksamples";
import Skills from "./skills/skills";
import Contact from "./contact/contact";

export default function ProjectContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
   if (currentPage === "Skills") {
      return <Skills />;
    }
    if (currentPage === "Web Apps") {
      return <WorkSamples />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    } 
  };


  const handlePageChange = (page) => setCurrentPage(page);

  return (

       <div>
          <PageTop currentPage={currentPage} handlePageChange={handlePageChange} />
          
          
          {renderPage()}          
         
      
          <Footer />
      </div>
      
        );
  


}
