import About from "~/components/About";
import Contact from "~/components/Contact";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Projects from "~/components/Projects/Projects";
import Work from "~/components/Work/Work";

export default function Index() {
  return (
    <div>
      <Navbar />
      <main className="px-20 sm:px-3 ">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
      <footer className="flex justify-center mt-20 py-5">
        <a
          href="https://github.com/TristanBlackwell"
          className="outline-gold focus:text-gold"
        >
          <p className="text-sm font-extralight tracking-wide hover:text-gold transition-colors">
            Handcrafted by Tristan Blackwell
          </p>
        </a>
      </footer>
    </div>
  );
}
