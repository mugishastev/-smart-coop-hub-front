import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menu, X, LogIn, Moon, Sun } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Smart Cooperative Hub" className="h-8 w-8 rounded-lg shadow-lg" />
            <span className="text-xl md:text-2xl font-bold text-foreground">Smart Cooperative Hub</span>
          </div>

          {/* Dark Mode Toggle for Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="gap-2"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("features")} className="text-foreground hover:text-primary transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="gap-2"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Login to Smart Cooperative Hub</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">
                      Password
                    </Label>
                    <Input id="password" type="password" placeholder="Enter your password" className="col-span-3" />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsLoginOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsLoginOpen(false)}>
                    Login
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button>Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("features")} className="block w-full text-left text-foreground hover:text-primary transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="w-full gap-2 justify-start"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full gap-2">
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Login to Smart Cooperative Hub</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email-mobile" className="text-right">
                      Email
                    </Label>
                    <Input id="email-mobile" type="email" placeholder="Enter your email" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password-mobile" className="text-right">
                      Password
                    </Label>
                    <Input id="password-mobile" type="password" placeholder="Enter your password" className="col-span-3" />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsLoginOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsLoginOpen(false)}>
                    Login
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button className="w-full">Get Started</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
