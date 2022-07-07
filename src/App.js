import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import profilePic from './assets/profile/yurippe.jpg';
import './App.css';
import 'remixicon/fonts/remixicon.css';

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
        <section>
          <h2 id='about'>About Me</h2>
          <img src={profilePic} alt='Yuri Ichikawa' />
          <p>
            Odio mucius quaerendum eu mea. Error fuisset antiopam ius ei, his commodo imperdiet in, id 
            natum atomorum voluptatibus per. Mea ignota nostro ea, qui tollit torquatos persequeris cu. 
            Fastidii reprimique ne nam, case vocent ocurreret ne eos, nam elitr insolens et. Sale inani 
            perfecto sea no, ea justo dicam mea.<br/>
            <br/>
            Eu per quot conceptam, eum te aperiam fabulas mentitum, falli latine corpora vim an. Ex duo 
            enim menandri, prima ignota denique et sea, nulla munere alienum sea at. Has luptatum pertinax 
            evertitur at. At cum eius alterum nusquam, tollit eruditi has ex, in case dicam libris sed.
          </p>
        </section>
        <h2 id='portfolio'>Portfolio</h2>
        <h2 id='contact'>Contact</h2>
        <h2 id='resume'>Resume</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
