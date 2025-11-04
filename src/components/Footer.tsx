import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white border-t border-blue-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Smart Cooperative Hub" className="h-8 w-8" />
              <span className="text-lg font-bold text-white">Smart Cooperative Hub</span>
            </div>
            <p className="text-blue-100">
              Empowering cooperatives through digital innovation and transparent marketplace solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">About</a></li>
              <li><a href="#features" className="text-blue-100 hover:text-white transition-colors">Features</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Smart Cooperative Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
