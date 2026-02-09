import { motion } from "framer-motion";
import ChocolateCard from "./ChocolateCard";

const chocolates = [
  {
    emoji: "🍫",
    title: "Dark Chocolate",
    description: "Bold, intense & unforgettable — just like our friendship, bro.",
  },
  {
    emoji: "🤎",
    title: "Milk Chocolate",
    description: "Smooth, reliable & always hits different. The classic choice.",
  },
  {
    emoji: "🍬",
    title: "White Chocolate",
    description: "Sweet, creamy & full of surprises. Life's better with the unexpected.",
  },
  {
    emoji: "✨",
    title: "Gold Truffle",
    description: "Premium & luxurious — because you deserve nothing but the finest.",
  },
];

const ChocolateSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-chocolate">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Pick Your Vibe
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Every Chocolate <span className="text-gradient-gold">Tells a Story</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chocolates.map((choc, i) => (
            <ChocolateCard key={choc.title} {...choc} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChocolateSection;
