import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#030303]">
      <HeroCanvas />
      
      {/* Massive Abstract Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Rotating Abstract Orbs */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f640_90deg,transparent_180deg)] blur-[100px] opacity-60 mix-blend-screen"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[conic-gradient(from_180deg,transparent_0deg,#a855f740_90deg,transparent_180deg)] blur-[120px] opacity-60 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          NexusAI API v2.0 is now live
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]"
        >
          Automate your <br className="hidden md:block" />
          <span className="text-gradient-accent">enterprise with AI</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          The most powerful AI infrastructure for modern teams. Build, deploy, and scale intelligent workflows in minutes, not months.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
            Start building for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 border border-white/10 transition-colors backdrop-blur-md">
            Read the docs
          </button>
        </motion.div>

        {/* Premium CSS-based API Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-50" />
          <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl backdrop-blur-xl flex flex-col text-left overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                api.nexus.ai/v1/chat/completions
              </div>
              <div className="w-10"></div>
            </div>
            {/* Body */}
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="hidden md:block w-64 border-r border-white/5 p-4 bg-white/[0.01]">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Endpoints</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-blue-400 bg-blue-500/10 px-3 py-2 rounded-lg border border-blue-500/20">
                    <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20">POST</span>
                    <span className="font-mono">/v1/chat</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-gray-200 px-3 py-2 rounded-lg transition-colors cursor-pointer">
                    <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-green-500/20 text-green-400">GET</span>
                    <span className="font-mono">/v1/models</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-gray-200 px-3 py-2 rounded-lg transition-colors cursor-pointer">
                    <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400">POST</span>
                    <span className="font-mono">/v1/embeddings</span>
                  </div>
                </div>
              </div>
              {/* Code Area */}
              <div className="flex-1 p-6 bg-[#050505] font-mono text-sm overflow-x-auto">
                <div className="flex items-center gap-6 mb-6 text-xs text-gray-500 border-b border-white/5 pb-3">
                  <span className="text-white border-b border-white pb-3 -mb-[13px] font-medium">Request</span>
                  <span className="hover:text-gray-300 cursor-pointer transition-colors">Response</span>
                  <span className="hover:text-gray-300 cursor-pointer transition-colors">Headers</span>
                </div>
                <pre className="text-gray-300 leading-relaxed">
                  <span className="token-keyword">curl</span> https://api.nexus.ai/v1/chat/completions \<br/>
                  {'  '}-H <span className="token-string">"Content-Type: application/json"</span> \<br/>
                  {'  '}-H <span className="token-string">"Authorization: Bearer $NEXUS_API_KEY"</span> \<br/>
                  {'  '}-d <span className="token-string">'{'{'}</span><br/>
                  {'    '}<span className="token-property">"model"</span>: <span className="token-string">"nexus-pro-v2"</span>,<br/>
                  {'    '}<span className="token-property">"messages"</span>: [<br/>
                  {'      '}{'{'} <span className="token-property">"role"</span>: <span className="token-string">"system"</span>, <span className="token-property">"content"</span>: <span className="token-string">"You are an autonomous agent."</span> {'}'},<br/>
                  {'      '}{'{'} <span className="token-property">"role"</span>: <span className="token-string">"user"</span>, <span className="token-property">"content"</span>: <span className="token-string">"Optimize our logistics workflow."</span> {'}'}<br/>
                  {'    '}]<br/>
                  {'  '}<span className="token-string">{"'}'"}</span>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
