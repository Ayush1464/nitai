import { motion } from "motion/react";
import { Leaf, ShieldCheck, Home, Sparkles } from "lucide-react";

export function SpecialHighlight() {
  const features = [
    {
      icon: Leaf,
      title: "100% Pure",
      description: "No onion, no garlic",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic",
      description: "FSSAI certified kitchen",
    },
    {
      icon: Home,
      title: "Homemade",
      description: "Traditional recipes",
    },
    {
      icon: Sparkles,
      title: "Fresh Daily",
      description: "Prepared fresh every day",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Main Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4"
            >
              <span className="text-primary">🌿 Satvik Commitment</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl mb-4 m-0">
              100% Satvik Food
            </h2>
            <h3 className="text-2xl md:text-4xl text-primary mb-4 m-0">
              No Onion, No Garlic
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Following ancient Ayurvedic principles, we prepare all our dishes
              without onion and garlic, ensuring pure, satvik food that
              nourishes both body and soul.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Icon className="text-primary" size={28} />
                </motion.div>
                <h4 className="text-lg mb-2 m-0">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
