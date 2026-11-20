import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Approach from "@/components/Approach";
import Ventures from "@/components/Ventures";
import Testimonials from "@/components/Testimonials";
import QuoteBand from "@/components/QuoteBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Band rhythm: graphite hero → paper about → graphite philosophy → white approach → graphite ventures
// → paper testimonials → graphite quote → paper contact (green panel) → graphite footer.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Approach />
        <Ventures />
        <Testimonials />
        <QuoteBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
