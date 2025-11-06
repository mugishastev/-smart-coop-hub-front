import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    // apply responsive left padding to the main content only; keep Footer and Hero full-width
    <div className="min-h-screen">
      <div className="pl-6 md:pl-12 lg:pl-24">
        <Header />
      </div>

      {/* Hero should be full-width (no left padding) */}
      <Hero />

      <div className="pl-6 md:pl-12 lg:pl-24 pr-6 md:pr-12 lg:pr-24">
        <About />
        <Features />
        <Services />
        <HowItWorks />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
