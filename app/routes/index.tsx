import About from "~/components/About";
import Contact from "~/components/Contact";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects/Projects";
import Work from "~/components/Work/Work";

export default function Index() {
  return (
    <div>
      <main className="px-20 sm:px-3 ">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
