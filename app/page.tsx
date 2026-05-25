import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import Team from "@/components/Team";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Solutions />
      <Process />
      <Team />
      <WhyUs />
      <Testimonials />
      <Portfolio />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
