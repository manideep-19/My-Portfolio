import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import MoreProjects from './components/MoreProjects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <MoreProjects />
        <TechStack />
        <Experience />
      </main>
      <Contact />
    </>
  );
}
