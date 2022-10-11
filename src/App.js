import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Experience from './sections/Experiences';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
