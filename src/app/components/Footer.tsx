import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    Quick: ["Home", "Menu", "Gallery", "About"],
    Support: ["Contact Us", "FAQs", "Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="bg-[#2E2E2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl">N</span>
              </div>
              <div>
                <h3 className="text-xl m-0">Nitai's Kitchen</h3>
                <p className="text-sm text-primary m-0">Pure Satvik Food</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Bringing you authentic satvik cuisine without onion and garlic.
              Fresh, hygienic, and prepared with love, just like home.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>🌿 100% Pure Vegetarian</span>
              <span>|</span>
              <span>FSSAI Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 m-0">Quick Links</h4>
            <ul className="space-y-2 list-none p-0">
              {footerLinks.Quick.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-300 hover:text-primary transition-colors bg-transparent border-0 cursor-pointer p-0"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 m-0">Support</h4>
            <ul className="space-y-2 list-none p-0">
              {footerLinks.Support.map((link) => (
                <li key={link}>
                  <button className="text-gray-300 hover:text-primary transition-colors bg-transparent border-0 cursor-pointer p-0">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm m-0">
            © {new Date().getFullYear()} Nitai's Kitchen. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500 fill-red-500" size={16} />
            <span>in Bhubaneswar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
