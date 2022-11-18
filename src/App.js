import Aboutme from "./components/Aboutme";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className=" bg-[#06202A] h-screen overflow-scroll snap-y snap-mandatory">
     
     {/* Navbar */}

     <Navbar />

     {/* Hero section */}
     <section className="snap-start">
     <Hero />
     </section>
     {/* About me */}
     <section className="snap-center">
      <Aboutme />
     </section>
    </div>
  );
}

export default App;
