import Aboutme from "./components/Aboutme";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";


function App() {
  return (
    <div className=" bg-[#06202A] h-screen overflow-scroll snap-y snap-mandatory">
     
     {/* Navbar */}

     <Navbar />

     {/* Hero section */}
     <section className="snap-start snap-mandatory">
     <Hero />
     </section>
     {/* About me */}
     <section className="snap-center" id="aboutme">
      <Aboutme />
     </section>

     {/* Skills set */}
     <section id="skills" className="snap-center">
      <Skills />
     </section>
    </div>
  );
}

export default App;
