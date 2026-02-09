import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const MessageSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <motion.div
        className="max-w-3xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Sparkles className="text-primary mx-auto mb-6" size={32} />

        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
          To My <span className="text-gradient-gold">Homeboy</span>
        </h2>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-body tracking-wider uppercase">
            Sweet Message
          </div>

          <p className="text-foreground font-body text-lg md:text-xl leading-relaxed mb-6">
            "Life is like a box of chocolates — but having a solid homeboy like you? 
            That's the <span className="text-primary font-semibold">real treasure</span>. 
            This Chocolate Day, I just wanna say — you're one in a million, fam. 
            Keep being amazing."
          </p>

          <p className="text-muted-foreground font-body italic">
            No cap, you the GOAT 🐐🍫
          </p>

          <div className="flex items-center justify-center gap-3 mt-8">
            {["🍫", "❤️", "🍫", "❤️", "🍫"].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MessageSection;
