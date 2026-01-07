import React from 'react';
import { SKILLS_WITH_ICONS } from '@/utils/constants';

const TechStack: React.FC = () => {
  const marqueeItems = [...SKILLS_WITH_ICONS, ...SKILLS_WITH_ICONS, ...SKILLS_WITH_ICONS];

  return (
    <div className="py-16 bg-brand-dark border-y border-gray-800 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>

      <div className="container mx-auto px-6 mb-10 text-center">
         <p className="text-brand-red text-sm uppercase tracking-[0.3em] font-black bg-brand-black inline-block px-4 py-1 border border-brand-red rotate-1">
            Stack Tecnológico
         </p>
      </div>

      <div className="flex w-full">
        <div className="flex animate-scroll whitespace-nowrap items-center">
          {marqueeItems.map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`} 
              className="mx-8 flex flex-col items-center justify-center group"
            >
              <div className="bg-brand-black p-4 rounded-xl border border-gray-800 group-hover:border-brand-red transition-colors shadow-[4px_4px_0px_0px_rgba(30,30,30,1)] group-hover:shadow-[4px_4px_0px_0px_#E11C23]">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="h-12 w-12 grayscale group-hover:grayscale-0 transition-all brightness-200 group-hover:brightness-100"
                    loading="lazy"
                  />
              </div>
              <span className="text-xs font-bold text-gray-400 mt-3 uppercase tracking-wider group-hover:text-brand-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;