import { motion } from 'motion/react';
import { Bot, Code2, Database, Lock, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    title: "Intelligent Automation",
    description: "Deploy autonomous agents that handle your most complex workflows 24/7.",
    icon: <Bot className="w-6 h-6 text-blue-400" />,
    className: "md:col-span-2 md:row-span-2",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Lightning Fast API",
    description: "Sub-50ms latency globally.",
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    className: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption.",
    icon: <Lock className="w-6 h-6 text-green-400" />,
    className: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Vector Database",
    description: "Store and retrieve billions of embeddings in milliseconds.",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    className: "md:col-span-1 md:row-span-2",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Developer SDKs",
    description: "Integrate seamlessly with our comprehensive SDKs and REST APIs.",
    icon: <Code2 className="w-6 h-6 text-indigo-400" />,
    className: "md:col-span-1 md:row-span-2",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Custom Models",
    description: "Fine-tune open-source models on your proprietary data securely.",
    icon: <Sparkles className="w-6 h-6 text-pink-400" />,
    className: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1000&auto=format&fit=crop"
  },
];

export default function BentoFeatures() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Everything you need to <br className="hidden md:block" />
            <span className="text-gradient">scale with AI</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A complete platform for building, deploying, and managing AI applications at enterprise scale. No compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors ${feature.className}`}
            >
              {feature.image && (
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover mix-blend-luminosity transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                </div>
              )}
              
              <div className="relative h-full p-8 flex flex-col z-10">
                <div className="w-12 h-12 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center mb-auto">
                  {feature.icon}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
