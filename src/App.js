import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [sections] = useState([
    'about',
    'portfolio',
    'contact',
    'resume'
  ]);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  console.log(currentSection);

  return (
    <div>
      <Header 
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main>
        <h2 id='about'>About Me</h2>
        <h2 id='portfolio'>Portfolio</h2>
        <h2 id='contact'>Contact</h2>
        <h2 id='resume'>Resume</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
