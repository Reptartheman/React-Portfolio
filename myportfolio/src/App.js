import React from 'react' 
import './App.css';
import PageTop from './components/header/Header';
import About from './components/about/About';
import Footer from './components/footer/footer'
import WorkSamples from './components/worksamples/worksamples';
import Contact from './components/contact/contact';


function App() {
  return (
  <>
    <PageTop />
    
    <main>
      <About />
      <WorkSamples />
      <Contact />
    </main>

    <Footer />

</>
  );
}

export default App;
