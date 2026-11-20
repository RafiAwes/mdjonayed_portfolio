import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Ventures from "@/components/Ventures";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Band rhythm (DESIGN.md): graphite hero → paper → white → graphite → paper (+ green panel) → graphite footer.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Approach />
        <Ventures />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
