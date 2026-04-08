import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

interface AboutProps {
  image: string;
}

export function About({ image }: AboutProps) {
  const trustPoints = [
    "Freshly prepared every day",
    "100% hygienic kitchen environment",
    "Traditional homemade recipes",
    "No preservatives or artificial flavors",
    "FSSAI certified",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="About Nitai's Kitchen"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-4xl text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">
                  Years of Excellence
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl mt-2 mb-6 m-0">
              Homemade Food with{" "}
              <span className="text-primary">Authentic Taste</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nitai's Kitchen brings you the authentic taste of pure vegetarian
              cuisine, following traditional recipes passed down through
              generations. We believe in serving food that not only satisfies
              your hunger but also nourishes your soul.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our commitment to satvik principles means we prepare all dishes
              without onion and garlic, using only the finest ingredients in a
              hygienic, FSSAI-certified kitchen environment.
            </p>

            {/* Trust Points */}
            <div className="space-y-4 mb-8">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-primary" size={18} />
                  </div>
                  <span className="text-foreground">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-full border-0 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
