import { motion } from "motion/react";
import { Star, Heart } from "lucide-react";
import { useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  isSpecial?: boolean;
  rating?: number;
}

interface MenuSectionProps {
  menuItems: MenuItem[];
}

export function MenuSection({ menuItems }: MenuSectionProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-wider text-sm">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-4 m-0">
            Delicious <span className="text-primary">Satvik</span> Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the authentic taste of pure vegetarian cuisine, prepared
            with love and tradition
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 relative group"
            >
              {/* Special Badge */}
              {item.isSpecial && (
                <div className="absolute top-4 left-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-xs">
                  Today's Special
                </div>
              )}

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(item.id)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center border-0 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              >
                <Heart
                  size={18}
                  className={
                    favorites.includes(item.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-600"
                  }
                />
              </button>

              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg m-0">{item.name}</h3>
                  {item.rating && (
                    <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                      <Star size={14} className="fill-primary text-primary" />
                      <span className="text-xs">{item.rating}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl text-primary">{item.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-4 py-2 rounded-full text-sm border-0 cursor-pointer"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
