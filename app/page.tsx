import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";
import  Footer  from "@/components/Footer";

export default function Home() {
  return (
<div className="brand-scope min-h-screen bg-zinc-50 font-sans dark:bg-black">
      
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
