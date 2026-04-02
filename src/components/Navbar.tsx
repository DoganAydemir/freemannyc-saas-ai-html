import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass-panel border-b-0 border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight">NexusAI</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted hover:text-white transition-colors">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
        <a href="#testimonials" className="hover:text-white transition-colors">Customers</a>
        <a href="#cta" className="hover:text-white transition-colors">Start Building</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:block text-sm font-medium text-white hover:text-blue-400 transition-colors">
          Log in
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}
