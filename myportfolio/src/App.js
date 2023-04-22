import React from 'react' 
import './App.css';
import PageTop from './components/header/Header';
import About from './components/about/About';
import Footer from './components/footer/footer'
import WorkSamples from './components/worksamples/worksamples';


function App() {
  return (
  <>
    <PageTop />
    
    <main>
      <About />
      <WorkSamples />
    </main>

    <Footer />

</>
  );
}

export default App;
