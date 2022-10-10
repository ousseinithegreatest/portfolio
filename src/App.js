import './App.css';
import Navbar from './components/Navbar';
import Experience from './sections/Experiences';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
