import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Pricing from "./components/Pricing";
import Coverage from "./components/Coverage";
import Infra from "./components/Infra";
import UseCases from "./components/UseCases";
import Process from "./components/Process";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import StickyWa from "./components/StickyWa";

export default function Home() {
  return (
    <>
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Lewati ke konten
      </a>
      <Navbar />
      <main id="konten">
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Pricing />
        <Coverage />
        <Infra />
        <UseCases />
        <Process />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyWa />
    </>
  );
}
