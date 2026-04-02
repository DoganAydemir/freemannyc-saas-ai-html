import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-b from-blue-600/20 to-purple-600/20 border border-white/10 p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-xl" />
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Ready to build the <br />
              <span className="text-gradient-accent">future?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              Join thousands of developers building next-generation AI applications on NexusAI. Get started for free today.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                Start building for free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 border border-white/10 transition-colors">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
