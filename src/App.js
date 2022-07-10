import { useState } from 'react';
import './App.css'
import 'remixicon/fonts/remixicon.css';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [sections] = useState([
    'about',
    'portfolio',
    'contact',
    'resume'
  ]);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className='app'>
      <Header 
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main>
        {(() => {
          switch (currentSection) {
            case 'about':
              return <About />;
            case 'portfolio':
              return <Project />;
            case 'contact':
              return <Contact />;
            case 'resume':
              return <Resume />;
          }
        })()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
