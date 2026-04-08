import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    review:
      "The best satvik food in Bhubaneswar! Absolutely love the authentic taste and the fact that it's completely pure vegetarian without onion and garlic.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 5,
    review:
      "Nitai's Kitchen has become my go-to for daily meals. The food quality is excellent and delivery is always on time. Highly recommended!",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Anita Patel",
    rating: 5,
    review:
      "Finally found a cloud kitchen that serves genuine satvik food! The thali is amazing and reminds me of home-cooked meals. Five stars!",
    date: "3 weeks ago",
  },
];

export function Reviews() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-4 m-0">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from our happy customers
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-background rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} className="text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-6 relative z-10">
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="m-0 mb-1">{review.name}</h4>
                  <p className="text-sm text-muted-foreground m-0">
                    {review.date}
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-primary/10 px-8 py-4 rounded-full">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-primary text-primary" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl text-primary">4.9/5.0</div>
              <div className="text-sm text-muted-foreground">
                Based on 500+ reviews
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
