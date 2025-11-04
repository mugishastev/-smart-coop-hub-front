import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/image 1.png";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center text-white pt-16 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Digital cooperative management background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-in-left text-white">
              Empowering Cooperatives Through Digital Innovation
            </h1>
            <p className="text-lg md:text-xl text-white/90 animate-slide-in-up">
              Smart Cooperative Hub is a comprehensive digital platform that enables cooperatives to manage members, finances, products, and connect with buyers through a transparent marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up-delay">
              <Button size="lg" className="gap-2 bg-white text-black hover:bg-gray-100">
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-black">
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Platform Features</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Member Management System
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Financial Tracking & Reporting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Product Marketplace
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Transparent Transactions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
