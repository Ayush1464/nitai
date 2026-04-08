import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MenuSection } from "./components/MenuSection";
import { SpecialHighlight } from "./components/SpecialHighlight";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  // Menu Items
  const menuItems = [
    {
      id: 1,
      name: "Satvik Thali",
      description:
        "Complete meal with dal, sabzi, rice, roti, and sweet - No onion, no garlic",
      price: "₹180",
      image:
        "https://images.unsplash.com/photo-1572517499173-4e2cb8bef19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFyaWFuJTIwdGhhbGklMjBmb29kfGVufDF8fHx8MTc3NTY2ODUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isSpecial: true,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      description:
        "Creamy paneer curry made with pure ingredients and traditional spices",
      price: "₹160",
      image:
        "https://images.unsplash.com/photo-1559561723-c3f4195835db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBjdXJyeSUyMGluZGlhbiUyMHZlZ2V0YXJpYW58ZW58MXx8fHwxNzc1NjY4NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Veg Fried Rice",
      description:
        "Aromatic fried rice with fresh vegetables and authentic flavors",
      price: "₹120",
      image:
        "https://images.unsplash.com/photo-1552246966-75ea34117e37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwZnJpZWQlMjByaWNlfGVufDF8fHx8MTc3NTY2ODUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Samosa Platter",
      description: "Crispy samosas served with mint and tamarind chutney",
      price: "₹80",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFyaWFuJTIwc25hY2tzJTIwc2Ftb3NhfGVufDF8fHx8MTc3NTY2ODUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Dal Tadka",
      description: "Yellow lentils tempered with ghee and aromatic spices",
      price: "₹100",
      image:
        "https://images.unsplash.com/photo-1626500154744-e4b394ffea16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWwlMjB0YWRrYSUyMGluZGlhbiUyMGxlbnRpbHN8ZW58MXx8fHwxNzc1NjQ0NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Veg Biryani",
      description: "Fragrant basmati rice with mixed vegetables and spices",
      price: "₹150",
      image:
        "https://images.unsplash.com/photo-1596560520688-e1ecc9da2099?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBiaXJ5YW5pJTIwaW5kaWFufGVufDF8fHx8MTc3NTY2ODUxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isSpecial: true,
      rating: 4.9,
    },
    {
      id: 7,
      name: "Roti & Sabzi",
      description: "Freshly made rotis served with seasonal vegetable curry",
      price: "₹90",
      image:
        "https://images.unsplash.com/photo-1601387448308-66ae6aa1f1f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByb3RpJTIwY2hhcGF0aSUyMGJyZWFkfGVufDF8fHx8MTc3NTY2ODUxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
    },
    {
      id: 8,
      name: "Gulab Jamun",
      description: "Traditional Indian dessert - soft, sweet, and delicious",
      price: "₹60",
      image:
        "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldCUyMGRlc3NlcnQlMjBndWxhYiUyMGphbXVufGVufDF8fHx8MTc3NTY2ODUxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
    },
  ];

  // Gallery Images
  const galleryImages = [
    "https://images.unsplash.com/photo-1572517499173-4e2cb8bef19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFyaWFuJTIwdGhhbGklMjBmb29kfGVufDF8fHx8MTc3NTY2ODUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1559561723-c3f4195835db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBjdXJyeSUyMGluZGlhbiUyMHZlZ2V0YXJpYW58ZW58MXx8fHwxNzc1NjY4NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1596560520688-e1ecc9da2099?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBiaXJ5YW5pJTIwaW5kaWFufGVufDF8fHx8MTc3NTY2ODUxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1552246966-75ea34117e37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwZnJpZWQlMjByaWNlfGVufDF8fHx8MTc3NTY2ODUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFyaWFuJTIwc25hY2tzJTIwc2Ftb3NhfGVufDF8fHx8MTc3NTY2ODUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1626500154744-e4b394ffea16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWwlMjB0YWRrYSUyMGluZGlhbiUyMGxlbnRpbHN8ZW58MXx8fHwxNzc1NjQ0NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1601387448308-66ae6aa1f1f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByb3RpJTIwY2hhcGF0aSUyMGJyZWFkfGVufDF8fHx8MTc3NTY2ODUxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldCUyMGRlc3NlcnQlMjBndWxhYiUyMGphbXVufGVufDF8fHx8MTc3NTY2ODUxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1572517499173-4e2cb8bef19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFyaWFuJTIwdGhhbGklMjBmb29kfGVufDF8fHx8MTc3NTY2ODUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />
      <SpecialHighlight />
      <MenuSection menuItems={menuItems} />
      <Gallery images={galleryImages} />
      <About
        image="https://images.unsplash.com/photo-1559561723-c3f4195835db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBjdXJyeSUyMGluZGlhbiUyMHZlZ2V0YXJpYW58ZW58MXx8fHwxNzc1NjY4NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
