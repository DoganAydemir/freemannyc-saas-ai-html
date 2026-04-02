import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Connect your data",
    description: "Securely sync your databases, documents, and SaaS tools. We automatically chunk, embed, and index everything.",
    code: (
      <>
        <span className="token-keyword">import</span> {'{'} <span className="token-class">Nexus</span> {'}'} <span className="token-keyword">from</span> <span className="token-string">'@nexus/ai'</span>;
        <br /><br />
        <span className="token-keyword">const</span> client <span className="token-operator">=</span> <span className="token-keyword">new</span> <span className="token-class">Nexus</span>({'{'} apiKey: <span className="token-string">'...'</span> {'}'});
        <br /><br />
        <span className="token-keyword">await</span> client.<span className="token-property">data</span>.<span className="token-function">sync</span>({'{'}
        <br />
        {'  '}source: <span className="token-string">'postgres'</span>,
        <br />
        {'  '}connectionString: process.<span className="token-property">env</span>.<span className="token-property">DB_URL</span>,
        <br />
        {'  '}tables: [<span className="token-string">'users'</span>, <span className="token-string">'documents'</span>]
        <br />
        {'}'});
      </>
    )
  },
  {
    number: "02",
    title: "Design the workflow",
    description: "Define the logic, triggers, and actions using our intuitive visual builder or code-first SDK.",
    code: (
      <>
        <span className="token-keyword">const</span> workflow <span className="token-operator">=</span> <span className="token-keyword">await</span> client.<span className="token-property">workflows</span>.<span className="token-function">create</span>({'{'}
        <br />
        {'  '}name: <span className="token-string">'Customer Support Agent'</span>,
        <br />
        {'  '}trigger: <span className="token-string">'email.received'</span>,
        <br />
        {'  '}steps: [
        <br />
        {'    '}{'{'} type: <span className="token-string">'analyze_sentiment'</span> {'}'},
        <br />
        {'    '}{'{'} type: <span className="token-string">'generate_draft'</span>, model: <span className="token-string">'nexus-pro'</span> {'}'},
        <br />
        {'    '}{'{'} type: <span className="token-string">'human_in_loop'</span> {'}'}
        <br />
        {'  '}]
        <br />
        {'}'});
      </>
    )
  },
  {
    number: "03",
    title: "Deploy to production",
    description: "Push to production with a single click. We handle the scaling, monitoring, and failovers automatically.",
    code: (
      <>
        <span className="token-comment"># Deploy via CLI</span>
        <br />
        <span className="token-keyword">$</span> nexus deploy --prod
        <br /><br />
        <span className="token-punctuation">&gt;</span> Deploying Customer Support Agent...
        <br />
        <span className="token-punctuation">&gt;</span> Building container... <span className="token-string">DONE</span>
        <br />
        <span className="token-punctuation">&gt;</span> Provisioning GPUs... <span className="token-string">DONE</span>
        <br />
        <span className="token-punctuation">&gt;</span> Routing traffic... <span className="token-string">DONE</span>
        <br /><br />
        <span className="token-string">âœ¨ Deployed successfully to production</span>
        <br />
        <span className="token-function">ðŸŒ  https://api.nexus.ai/v1/workflows/cs-agent</span>
      </>
    )
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative bg-[#050505]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            From idea to production in <span className="text-gradient-accent">minutes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Developer-first APIs and SDKs that feel like magic.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`order-2 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}
              >
                <div className="font-display text-6xl font-bold text-white/5 mb-6">
                  {step.number}
                </div>
                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`order-1 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'} p-1`}
              >
                <div className="animated-border-box h-full w-full">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0a0a0a]">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="ml-4 text-xs font-mono text-gray-500">terminal</div>
                    </div>
                    <div className="p-6 overflow-x-auto bg-[#0a0a0a]/90 backdrop-blur-sm flex-1">
                      <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                        <code>{step.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

