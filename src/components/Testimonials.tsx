import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "NexusAI completely transformed how we handle customer support. We automated 70% of our tickets in the first week.",
    author: "Sarah Jenkins",
    role: "CTO at TechFlow",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "The API is incredibly intuitive. We integrated their vector search into our product in less than 2 hours.",
    author: "David Chen",
    role: "Lead Engineer at DataSync",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "We've tried every AI platform out there. NexusAI is the only one that actually scales without breaking a sweat.",
    author: "Elena Rodriguez",
    role: "VP of Product at ScaleUp",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "The custom model fine-tuning saved us months of engineering time. It just works out of the box.",
    author: "Michael Chang",
    role: "AI Researcher at Nova",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Trusted by <span className="text-gradient">innovators</span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-6 px-6 w-max"
        >
          {/* Double the array for seamless looping */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[450px] shrink-0 rounded-3xl border border-white/5 bg-[#0a0a0a] p-8"
            >
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
