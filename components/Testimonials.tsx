
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const QuoteIcon = () => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="mb-4 text-blue-600/60"
  >
    <path 
      d="M10.6667 22.6667H6.66667C6.66667 18.9848 9.65144 16 13.3333 16V13.3333C8.17936 13.3333 4 17.5127 4 22.6667V30.6667H12V22.6667H10.6667ZM24.6667 22.6667H20.6667C20.6667 18.9848 23.6514 16 27.3333 16V13.3333C22.1794 13.3333 18 17.5127 18 22.6667V30.6667H26V22.6667H24.6667Z" 
      fill="currentColor"
    />
    <path 
      d="M12 21.3333H5.33333C4.59695 21.3333 4 21.9303 4 22.6667V30.6667C4 31.4031 4.59695 32 5.33333 32H13.3333C14.0697 32 14.6667 31.4031 14.6667 30.6667V22.6667C14.6667 21.9303 14.0697 21.3333 13.3333 21.3333H12ZM26 21.3333H19.3333C18.5969 21.3333 18 21.9303 18 22.6667V30.6667C18 31.4031 18.5969 32 19.3333 32H27.3333C28.0697 32 28.6667 31.4031 28.6667 30.6667V22.6667C28.6667 21.9303 28.0697 21.3333 27.3333 21.3333H26Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative z-10 px-4 md:px-0">
      <div className="container mx-auto px-6 backdrop-blur-xl bg-slate-950/40 py-16 md:py-20 rounded-[40px] border border-white/5">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 drop-shadow-xl">Trusted by Leaders</h2>
          <p className="text-slate-500 font-bold tracking-widest text-[10px] md:text-sm uppercase">Voices of wellness and efficiency from our global ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card p-8 flex flex-col justify-between min-h-[400px] md:min-h-[440px] bg-slate-900/40 backdrop-blur-2xl hover:bg-slate-800/50"
            >
              <div>
                <QuoteIcon />
                <p className="text-slate-200 font-semibold italic mb-8 leading-relaxed text-lg md:text-xl drop-shadow-sm">
                  "{t.content}"
                </p>
              </div>
              <div className="flex items-center gap-4 md:gap-5 border-t border-white/5 pt-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-full blur-md" />
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 object-cover relative z-10 shadow-lg" 
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-white tracking-tight text-base md:text-lg">{t.name}</h4>
                  <p className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.15em] leading-tight mt-1">
                    {t.role} <span className="text-slate-700">|</span> {t.company || 'PRIVATE PARTNER'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
