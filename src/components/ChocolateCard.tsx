import { motion } from "framer-motion";

interface ChocolateCardProps {
  emoji: string;
  title: string;
  description: string;
  delay: number;
}

const ChocolateCard = ({ emoji, title, description, delay }: ChocolateCardProps) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="bg-card border border-border rounded-lg p-8 text-center transition-all duration-500 hover:border-primary/40 bg-shimmer relative overflow-hidden">
        <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${delay}s` }}>
          {emoji}
        </div>
        <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ChocolateCard;
