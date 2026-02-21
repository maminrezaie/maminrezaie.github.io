import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Publications from "@/components/sections/Publications";
import Showcase from "@/components/sections/Showcase";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <About />
        <Education />
        <Experience />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
