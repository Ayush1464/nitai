import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Nandan Vihar, Bhubaneswar, Odisha 751003",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@nitaiskitchen.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Sun: 8:00 AM - 10:00 PM",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-4 m-0">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h4 className="mb-2 m-0">{item.title}</h4>
                    <p className="text-sm text-muted-foreground m-0">
                      {item.content}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Order Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl mb-4 m-0">Order Now</h3>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white px-6 py-4 rounded-xl border-0 cursor-pointer shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Order on WhatsApp</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#FC8019] text-white px-6 py-4 rounded-xl border-0 cursor-pointer shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.93 6.62L15.78.47C15.41.1 14.92-.08 14.42.04c-.5.12-.89.51-1.01 1.01L11.83 7.3c-.12.5.06.99.43 1.36l2.83 2.83c-1.42 2.71-3.58 4.87-6.29 6.29l-2.83-2.83c-.37-.37-.86-.55-1.36-.43l-6.25 1.58c-.5.12-.89.51-1.01 1.01-.12.5.06.99.43 1.36l6.15 6.15c.37.37.86.55 1.36.43 7.73-1.95 13.89-8.11 15.84-15.84.12-.5-.06-.99-.43-1.36z" />
                </svg>
                <span>Order on Swiggy</span>
              </motion.button>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 m-0">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, color: "#1877F2" },
                    { icon: Instagram, color: "#E4405F" },
                    { icon: Twitter, color: "#1DA1F2" },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-0 cursor-pointer hover:shadow-xl transition-shadow"
                        style={{
                          color: social.color,
                        }}
                      >
                        <Icon size={20} />
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl h-[500px] relative"
          >
            {/* Map Placeholder with design */}
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-background relative flex items-center justify-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-primary rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-primary rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-4 border-primary rounded-full"></div>
              </div>
              <div className="relative z-10 text-center p-8">
                <MapPin className="text-primary mx-auto mb-4" size={64} />
                <h3 className="text-2xl mb-2 m-0">Nandan Vihar</h3>
                <p className="text-muted-foreground">
                  Bhubaneswar, Odisha 751003
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-primary text-white px-6 py-3 rounded-full border-0 cursor-pointer shadow-md"
                >
                  Get Directions
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
