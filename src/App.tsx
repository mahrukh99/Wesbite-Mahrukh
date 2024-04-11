import { BrowserRouter, Routes, Route} from "react-router-dom";
import { motion } from 'framer-motion'; // Import for animation
import Home from './components/Home';
import About from './components/About';
import Header from './components/Skills';
import ProjectsComponent from './components/Projects';
import ExploreAI from './components/ExploreAI';
import UnderConstruction from './components/UnderConstruction';

const variants = { // Define animation variants
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2 } }, // Longer duration
  exit: { opacity: 0 },
};

function App() {
  return (
    <BrowserRouter>
      <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Header />} />
          <Route path="/projects" element={<ProjectsComponent />} />
          <Route path="/blog" element={<ExploreAI />} />
          <Route path="/underC" element={<UnderConstruction />} />
          <Route path="/nlp" element={<UnderConstruction />} />
          <Route path="/gan" element={<UnderConstruction />} />
          <Route path="/WebDev" element={<UnderConstruction />} />
          <Route path="/MLops" element={<UnderConstruction />} />
        </Routes>
      </motion.div>
    </BrowserRouter>
  );
}


export default App;



