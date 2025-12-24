
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Apple, Dumbbell, Moon, Droplets, Ban, FileSpreadsheet } from 'lucide-react';
import { WELLNESS_ACTIVITIES } from '../constants';

const iconMap: any = {
  Dumbbell: <Dumbbell className="w-6 h-6" />,
  Apple: <Apple className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Moon: <Moon className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Ban: <Ban className="w-6 h-6" />,
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6" />
};

export const Vision: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative px-4 md:px-0">
      <div className="container mx-auto px-6 relative z-10 backdrop-blur-sm bg-slate-950/20 py-12 rounded-[40px]">
        <div className="text-center mb-16 md:mb-24 px-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-black tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase mb-6 block"
          >
            The Holistic Architecture
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase drop-shadow-2xl"
          >
            Wellness isn't a state, <br />
            <span className="text-slate-700 italic opacity-80">it's a precision routine.</span>
          </motion.h2>
          <p className="text-slate-400 text-base md:text-2xl max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            We render wellness routines into hyper-optimized data structures. Our AI agents orchestrate the seven fundamental pillars of human vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Main Pillars */}
          {WELLNESS_ACTIVITIES.map((activity, idx) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass-card p-8 md:p-10 flex flex-col group backdrop-blur-md ${idx === 6 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="mb-6 md:mb-8 p-4 md:p-5 rounded-2xl bg-white/5 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/10 transition-all w-fit shadow-xl shadow-blue-500/10">
                {iconMap[activity.icon]}
              </div>
              <h3 className="font-black text-xl md:text-2xl mb-3 md:mb-4 uppercase tracking-tighter">{activity.title}</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 md:mt-20 p-8 md:p-16 glass-card border-blue-500/10 bg-blue-500/[0.03] text-center backdrop-blur-xl"
        >
          <h4 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">Autonomous Vitality Engine</h4>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Our agents run quietly in the background of your life, connecting your biometrics to your grocery list, your calendar to your circadian clock, and your medical history to a unified secure ledger.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
