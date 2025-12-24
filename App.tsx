
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Scene } from './components/Scene';
import { ExpertTrinity } from './components/ExpertTrinity';
import { Vision } from './components/Vision';
import { Testimonials } from './components/Testimonials';
import { Shield, LayoutGrid, BarChart, Zap, ArrowRight, BrainCircuit, Globe, ArrowUpRight, Mail, MessageSquare, Send, User, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [progress, setProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((v) => setProgress(v));
  }, [scrollYProgress]);

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Readability background layers
  const readabilityOverlay = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* Dynamic Overlay for Readability */}
      <motion.div 
        className="fixed inset-0 z-1 pointer-events-none bg-slate-950"
        style={{ opacity: readabilityOverlay }}
      />
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 z-[101] origin-left" style={{ scaleX }} />

      <Scene theme="default" scrollProgress={progress} />

      <header className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:p-6 flex justify-between items-center backdrop-blur-xl border-b border-white/5 bg-slate-950/40">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 bg-blue-600 rounded-lg md:rounded-xl group-hover:rotate-[15deg] transition-all duration-500 shadow-lg shadow-blue-500/40">
            <BrainCircuit className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="flex flex-col text-white">
            <span className="font-extrabold text-lg md:text-xl tracking-tighter leading-none">MEGA <span className="text-blue-500">AI</span></span>
            <span className="text-[8px] md:text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">Wellness Group</span>
          </div>
        </div>

        <nav className="hidden lg:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#vision" className="hover:text-white transition-colors">Methodology</a>
          <a href="#experts" className="hover:text-white transition-colors">The Trinity</a>
          <a href="#contact" className="hover:text-white transition-colors">Portal</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex group relative overflow-hidden bg-white text-black px-5 md:px-7 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Intelligence Audit <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
          
          <button 
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 z-[99] bg-slate-950 pt-24 px-8 flex flex-col gap-8 text-2xl font-black uppercase tracking-tighter"
        >
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/5 pb-4">Services</a>
          <a href="#vision" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/5 pb-4">Methodology</a>
          <a href="#experts" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/5 pb-4">The Trinity</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/5 pb-4">Portal</a>
        </motion.div>
      )}

      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, y: yTranslate }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-8">
              Intelligence Rendered For Life
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black mb-6 md:mb-8 tracking-tighter leading-[0.9] md:leading-[0.85] uppercase text-white drop-shadow-2xl">
              Holistic <br className="hidden md:block" /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-700">Agents.</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-xl mb-10 md:mb-12 leading-relaxed font-light px-4 md:px-0">
              Architecting the next generation of autonomous agents that optimize physical vitality and enterprise scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4 md:px-0">
              <button className="w-full sm:w-auto bg-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/40">
                Launch Personal Suite <Zap className="w-4 h-4 fill-current" />
              </button>
              <button className="w-full sm:w-auto bg-slate-900 border border-white/10 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-3">
                Enterprise Solutions <Globe className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 8, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-slate-500 hidden md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Initiate Scroll</span>
          <div className="w-px h-16 md:h-24 bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent" />
        </motion.div>
      </section>

      <section id="services" className="py-24 md:py-32 relative z-10 px-4 md:px-0">
        <div className="container mx-auto px-6 backdrop-blur-md bg-slate-950/30 py-12 rounded-[40px] border border-white/5">
          <div className="text-center mb-16 md:mb-20">
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 drop-shadow-md">Core Ecosystem</h2>
             <p className="text-slate-500 text-sm md:text-base font-medium tracking-wide">Three specialized vectors of agentic intelligence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-8 md:p-12 group"
            >
              <div className="p-4 md:p-5 bg-blue-600/10 text-blue-500 rounded-2xl w-fit mb-8 md:mb-10"><Zap className="w-7 h-7 md:w-8 md:h-8" /></div>
              <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase mb-4 md:mb-6">Personal Units</h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">Persistent biological monitoring and circadian rhythm optimization. Our agents synchronize with your physiology for peak human performance.</p>
              <ul className="space-y-3 md:space-y-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Metabolic Sync</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Sleep Architecture</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 md:p-12 group"
            >
              <div className="p-4 md:p-5 bg-purple-600/10 text-purple-500 rounded-2xl w-fit mb-8 md:mb-10"><Globe className="w-7 h-7 md:w-8 md:h-8" /></div>
              <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase mb-4 md:mb-6">Enterprise Units</h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">Operational scaling through neural-driven resource management. Automate the complexity of multi-layered enterprise workflows.</p>
              <ul className="space-y-3 md:space-y-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"/> Workforce Orchestration</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"/> Fiscal Automation</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 md:p-12 group md:col-span-2 lg:col-span-1"
            >
              <div className="p-4 md:p-5 bg-emerald-600/10 text-emerald-500 rounded-2xl w-fit mb-8 md:mb-10"><BarChart className="w-7 h-7 md:w-8 md:h-8" /></div>
              <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase mb-4 md:mb-6">Protocol Audits</h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">Surgical interventions into digital logic. Our auditing agents identify technical debt and create hyper-optimized scalability roadmaps.</p>
              <ul className="space-y-3 md:space-y-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"/> Logic Mapping</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"/> Neural Bottlenecking</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="vision"><Vision /></div>

      <div id="experts"><ExpertTrinity /></div>

      <Testimonials />

      <section id="contact" className="py-24 md:py-32 relative z-10 overflow-hidden px-4 md:px-0">
        <div className="container mx-auto px-6">
          <div className="glass-card p-8 md:p-12 lg:p-20 border-white/5 bg-slate-900/40 relative backdrop-blur-xl">
            <div className="absolute top-0 right-0 p-10 md:p-20 opacity-5 md:opacity-10 pointer-events-none hidden md:block">
              <Mail className="w-48 h-48 lg:w-64 lg:h-64 text-blue-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 md:mb-8 leading-none">Initiate <br/> <span className="text-blue-500">Contact.</span></h2>
                <p className="text-slate-400 text-lg md:text-xl mb-10 md:mb-12 font-light leading-relaxed">Ready to interface with agentic intelligence? Our experts are standing by to audit your wellness or enterprise protocols.</p>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center gap-5 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-slate-500">Secure Channel</p>
                      <p className="font-bold text-base md:text-lg">nexus@mega-ai.wellness</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-slate-500">Neural Support</p>
                      <p className="font-bold text-base md:text-lg">+1 (888) MEGA-INTEL</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-slate-500 px-2">Access Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input type="text" placeholder="Full Identity" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-10 md:px-12 py-4 md:py-5 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-slate-500 px-2">Email Node</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input type="email" placeholder="active@node.com" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-10 md:px-12 py-4 md:py-5 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-slate-500 px-2">Protocol Inquiry</label>
                    <textarea rows={4} placeholder="Describe your logic requirements..." className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 md:py-5 text-sm focus:outline-none focus:border-blue-500 transition-all resize-none placeholder:text-slate-700"></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 md:py-6 rounded-xl md:rounded-2xl uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-600/20 active:scale-95 group text-sm md:text-base">
                  Transmit Request <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 md:py-24 border-t border-white/5 bg-slate-950 relative z-10">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
          <div className="col-span-1 sm:col-span-2">
             <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-2.5 bg-blue-600 rounded-lg md:rounded-xl">
                  <BrainCircuit className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="font-black text-2xl md:text-3xl tracking-tighter uppercase text-white">MEGA <span className="text-blue-500">AI</span></span>
              </div>
              <p className="text-slate-400 text-base md:text-lg max-w-md mb-8 md:mb-10 font-light leading-relaxed">
                Interfacing human potential with agentic intelligence. We are the bridge between biology and computation.
              </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 md:mb-8 uppercase tracking-[0.3em] text-[10px] text-blue-500">Architecture</h4>
            <ul className="space-y-3 md:space-y-5 text-slate-400 font-medium text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Neural Personal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cognitive Enterprise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Deep Logic Audits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vitality Forge</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 md:mb-8 uppercase tracking-[0.3em] text-[10px] text-blue-500">Agent Briefing</h4>
            <p className="text-xs md:text-sm text-slate-500 mb-6 leading-relaxed">Subscribe to the weekly intelligence briefing.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none" />
              <button className="bg-blue-600 rounded-xl py-3.5 font-bold text-sm hover:bg-blue-500 transition-all uppercase tracking-widest text-white shadow-lg shadow-blue-500/20">Sync</button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-20 md:mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold text-center md:text-left">
          <span>© 2024 MEGA AI AGENTS GROUP. RENDERED IN SILICON.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
