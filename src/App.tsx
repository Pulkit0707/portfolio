import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CodingProfiles } from './components/CodingProfiles';

function App() {
  return (
    <main className="bg-white">
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <CodingProfiles />
    </main>
  );
}

export default App;