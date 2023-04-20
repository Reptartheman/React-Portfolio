import React from 'react' 
import './App.css';
import PageTop from './components/header/Header';
import About from './components/about/About';
import Footer from './components/footer/footer'


function App() {
  return (
  <>
    <PageTop />
    
    <body>
      <About />
    </body>

    <Footer />

</>
  );
}

export default App;
