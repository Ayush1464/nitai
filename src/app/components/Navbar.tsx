import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("home")}
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xl">N</span>
            </div>
            <div>
              <h1 className="text-xl text-foreground m-0">Nitai's Kitchen</h1>
              <p className="text-xs text-primary m-0">Pure Satvik Food</p>
            </div>
          </motion.div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Menu", "Gallery", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:text-primary transition-colors duration-200 bg-transparent border-0 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 border-0 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
          >
            <ShoppingBag size={18} />
            <span>Order Now</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
