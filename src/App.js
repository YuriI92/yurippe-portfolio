import { useState } from 'react';
import './App.css';
import 'remixicon/fonts/remixicon.css';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';

function App() {
  const [sections] = useState([
    'about',
    'portfolio',
    'contact',
    'resume'
  ]);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <Header 
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main>
        <section>
          <About />
          <Project />
        </section>
        <h2 id='contact'>Contact</h2>
        <h2 id='resume'>Resume</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
