"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Images, Lock, Star, X } from 'lucide-react';
import { PROJECTS_DATA } from '@/utils/constants';


const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS_DATA[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const nextImage = () => {
    if (!selectedProject?.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
  };

  const prevImage = () => {
    if (!selectedProject?.images) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length);
  };

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
              <div className="relative h-64 overflow-hidden border-b-4 border-[#0F0F0F] cursor-pointer" onClick={() => project.images && (setSelectedProject(project), setCurrentImageIndex(0))}>
                <div className="absolute inset-0  group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                {project.images && project.images.length > 1 && (
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm text-[#0F0F0F] text-[10px] font-black px-2 py-1 uppercase tracking-wider border-2 border-[#0F0F0F] flex items-center gap-1.5 shadow-[4px_4px_0px_0px_#0F0F0F]">
                    <Images size={14} />
                    <span>+{project.images.length} Fotos</span>
                  </div>
                )}

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

                  <div className="flex flex-col gap-3">
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

                    {project.images && project.images.length > 0 && (
                      <button
                        onClick={() => { setSelectedProject(project); setCurrentImageIndex(0); }}
                        className="w-full flex cursor-pointer  items-center justify-center gap-2 py-3 bg-white text-[#0F0F0F] font-black hover:bg-[#F2F2F2] transition-colors text-sm uppercase border-2 border-[#0F0F0F] shadow-[4px_4px_0px_0px_#0F0F0F] active:translate-x-1 active:translate-y-1 active:shadow-none"
                      >
                        Ver Fotos
                        <Images size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Deck Modal */}
        {selectedProject && selectedProject.images && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0F0F0F]/90 backdrop-blur-sm">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white hover:text-[#E11C23] transition-colors z-[110]"
            >
              <X size={40} />
            </button>

            <div className="relative w-full max-w-4xl flex flex-col items-center">
              {/* Baraja / Stack Aesthetic */}
              <div className="relative w-full aspect-[16/9] mb-12">
                {/* Decorative Stacked Cards */}
                <div className="absolute inset-0 bg-white border-4 border-[#0F0F0F] translate-x-4 translate-y-4 shadow-[12px_12px_0px_0px_#E11C23]"></div>
                <div className="absolute inset-0 bg-[#F2F2F2] border-4 border-[#0F0F0F] translate-x-2 translate-y-2"></div>

                {/* Current Image Card */}
                <div className="absolute inset-0 bg-white border-4 border-[#0F0F0F] overflow-hidden flex items-center justify-center group">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain p-4"
                  />

                  {/* Navigation Arrows inside the card */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-4 border-[#0F0F0F] p-2 hover:bg-[#E11C23] hover:text-white transition-all shadow-[4px_4px_0px_0px_#0F0F0F] active:translate-x-1 active:translate-y-1 active:shadow-none"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-4 border-[#0F0F0F] p-2 hover:bg-[#E11C23] hover:text-white transition-all shadow-[4px_4px_0px_0px_#0F0F0F] active:translate-x-1 active:translate-y-1 active:shadow-none"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              {/* Info & Counter */}
              <div className="bg-white border-4 border-[#0F0F0F] p-6 shadow-[8px_8px_0px_0px_#E11C23] flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-2xl">
                <div>
                  <h4 className="text-2xl font-black uppercase mb-1 font-['Anton'] tracking-tight">
                    {selectedProject.title}
                  </h4>
                  <p className="text-xs font-bold uppercase text-[#0F0F0F]/50 tracking-widest">
                    Galería de Fotos
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black font-['Anton'] text-[#E11C23]">
                    {String(currentImageIndex + 1).padStart(2, '0')}
                    <span className="text-[#0F0F0F]/30 text-xl ml-1">/ {String(selectedProject.images.length).padStart(2, '0')}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;