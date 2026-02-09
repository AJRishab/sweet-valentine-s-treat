import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 text-center border-t border-border">
      <p className="text-muted-foreground font-body text-sm flex items-center justify-center gap-2">
        Made with <Heart size={14} className="text-rose" fill="currentColor" /> on Chocolate Day 2026
      </p>
      <p className="text-muted-foreground/60 font-body text-xs mt-2">
        Valentine's Week 💝
      </p>
    </footer>
  );
};

export default Footer;
