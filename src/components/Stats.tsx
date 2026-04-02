import { motion } from 'motion/react';
import { Rocket, ShieldCheck, Globe, Activity } from 'lucide-react';

const stats = [
  { value: "10x", label: "Faster Deployment", description: "Compared to traditional ML pipelines", icon: <Rocket className="w-6 h-6 text-blue-400" /> },
  { value: "99.99%", label: "Uptime SLA", description: "Enterprise-grade reliability", icon: <ShieldCheck className="w-6 h-6 text-green-400" /> },
  { value: "50ms", label: "Global Latency", description: "Edge-optimized inference", icon: <Globe className="w-6 h-6 text-purple-400" /> },
  { value: "2B+", label: "API Requests", description: "Processed daily by our systems", icon: <Activity className="w-6 h-6 text-pink-400" /> },
];

export default function Stats() {
  return (
    <section className="py-24 relative border-y border-white/5 bg-[#030303]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/5">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col px-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-gray-300 mb-1">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

