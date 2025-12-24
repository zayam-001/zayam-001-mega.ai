
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Cpu } from 'lucide-react';
import { EXPERTS } from '../constants';
import { Scene } from './Scene';
import { ExpertTheme } from '../types';

const iconMap: any = {
  Shield: <Shield className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />
};

export const ExpertTrinity: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<ExpertTheme>('default');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const themeColors: any = {
    cyan: 'border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]',
    gold: 'border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)]',
    violet: 'border-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.3)]',
    default: 'border-white/10'
  };

  const textColors: any = {
    cyan: 'text-cyan-400',
    gold: 'text-yellow-400',
    violet: 'text-violet-400',
    default: 'text-blue-400'
  };

  return (
    <section className="relative min-h-screen py-24 md:py-32 overflow-hidden flex flex-col justify-center items-center px-4 md:px-0">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase drop-shadow-xl"
          >
            The Expert <br className="md:hidden" /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Trinity</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-xl font-light tracking-wide px-4">
            A confluence of security, high-finance, and operational excellence power our wellness engine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 items-center h-full">
          {/* Ahad - Left */}
          <div className="order-1">
            <ExpertCard 
              expert={EXPERTS[0]} 
              onHover={() => { setActiveTheme('cyan'); setHoveredId('ahad'); }} 
              onLeave={() => { setActiveTheme('default'); setHoveredId(null); }}
              isActive={activeTheme === 'cyan'}
              styleClasses={`${themeColors.cyan} ${textColors.cyan}`}
            />
          </div>

          {/* Center Space - Scene Focal Point */}
          <div className="h-48 md:h-64 lg:h-[400px] w-full flex items-center justify-center pointer-events-none order-2 lg:order-2">
            {/* Focal area for the background 3D scene */}
          </div>

          {/* Zayam - Right */}
          <div className="order-3">
            <ExpertCard 
              expert={EXPERTS[2]} 
              onHover={() => { setActiveTheme('violet'); setHoveredId('zayam'); }} 
              onLeave={() => { setActiveTheme('default'); setHoveredId(null); }}
              isActive={activeTheme === 'violet'}
              styleClasses={`${themeColors.violet} ${textColors.violet}`}
            />
          </div>
        </div>

        {/* Rizwan - Bottom Center */}
        <div className="flex justify-center mt-6 md:mt-12 order-4">
          <ExpertCard 
            expert={EXPERTS[1]} 
            onHover={() => { setActiveTheme('gold'); setHoveredId('rizwan'); }} 
            onLeave={() => { setActiveTheme('default'); setHoveredId(null); }}
            isActive={activeTheme === 'gold'}
            styleClasses={`lg:max-w-md ${themeColors.gold} ${textColors.gold}`}
          />
        </div>
      </div>
      
      {/* Localized background context for this section */}
      <div className="absolute inset-0 z-0">
        <Scene theme={activeTheme} hoveredId={hoveredId} />
        {/* Subtle radial mask for text focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/40 pointer-events-none" />
      </div>
    </section>
  );
};

const ExpertCard: React.FC<{ 
  expert: any, 
  onHover: () => void, 
  onLeave: () => void, 
  isActive: boolean,
  styleClasses: string 
}> = ({ expert, onHover, onLeave, isActive, styleClasses }) => (
  <motion.div
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.03 }}
    className={`glass-card p-8 md:p-10 transition-all duration-500 cursor-default backdrop-blur-lg ${styleClasses} ${isActive ? 'bg-white/[0.08] shadow-2xl' : 'bg-slate-900/40'}`}
  >
    <div className={`mb-6 p-4 rounded-2xl bg-white/5 inline-block shadow-inner`}>
      {iconMap[expert.icon]}
    </div>
    <h3 className="text-2xl md:text-3xl font-black mb-1 uppercase tracking-tighter">{expert.name}</h3>
    <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase opacity-60 mb-6 block">
      {expert.tagline}
    </span>
    <p className="text-slate-300 leading-relaxed font-medium text-sm md:text-base">
      {expert.description}
    </p>
  </motion.div>
);
