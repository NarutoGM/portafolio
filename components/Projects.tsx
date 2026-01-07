import React from 'react';
import { ExternalLink, Lock, Star } from 'lucide-react';
import { PROJECTS_DATA } from '@/utils/constants';


const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 bg-white text-[#0F0F0F]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="bg-[#0F0F0F] text-white px-4 py-1 text-sm font-bold uppercase tracking-widest inline-block mb-4 -rotate-1">
            Portafolio
          </span>
          <h2 className="text-6xl font-['Anton'] text-[#0F0F0F] mb-6 uppercase">
            Proyectos <span className="text-[#E11C23]">Destacados</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS_DATA.map((project) => (
            <div key={project.id} className="group bg-[#F2F2F2] border-4 border-[#0F0F0F] flex flex-col relative hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_#0F0F0F]">
              
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden border-b-4 border-[#0F0F0F]">
                <div className="absolute inset-0  group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {project.isFreelance && (
                  <div className="absolute top-4 right-4 z-20 bg-[#E11C23] text-white text-xs font-black px-3 py-1 uppercase tracking-wider border-2 border-[#0F0F0F] rotate-3">
                    Freelance
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col bg-white">
                <h3 className="text-2xl font-black text-[#0F0F0F] mb-3 font-['Poppins'] uppercase leading-none">
                    {project.title}
                </h3>

                <p className="text-[#0F0F0F]/70 text-sm mb-6 font-medium leading-relaxed">
                  {project.description}
                </p>

                {/* Feature Tags */}
                {project.hasLogin && (
                   <div className="mb-5 flex items-center gap-2 text-xs text-[#E11C23] font-bold uppercase tracking-wider">
                     <Lock size={14} />
                     <span>Panel Administrativo</span>
                   </div>
                )}

                <div className="mt-auto pt-6 border-t-2 border-gray-100">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold px-2 py-1 bg-[#0F0F0F] text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-[#E11C23] text-white font-black hover:bg-[#0F0F0F] transition-colors text-sm uppercase border-2 border-[#0F0F0F]"
                    >
                      Ver Proyecto
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;