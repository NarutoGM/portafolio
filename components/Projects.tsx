"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, ChevronLeft, ChevronRight, ExternalLink, Images, Lock, Star, X } from 'lucide-react';
import { PROJECTS_DATA } from '@/utils/constants';


const getRelativeTimeString = (dateStr?: string) => {
  if (!dateStr) return null;
  const projectDate = new Date(dateStr);
  if (isNaN(projectDate.getTime())) return dateStr;

  const now = new Date();
  let months = (now.getFullYear() - projectDate.getFullYear()) * 12 + (now.getMonth() - projectDate.getMonth());
  if (now.getDate() < projectDate.getDate()) {
    months--;
  }

  if (months <= 0) return "Este mes";
  if (months === 1) return "Hace 1 mes";
  if (months < 12) return `Hace ${months} meses`;
  const years = Math.floor(months / 12);
  return years === 1 ? "Hace 1 año" : `Hace ${years} años`;
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS_DATA[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Preload images
  useEffect(() => {
    if (!selectedProject?.images) return;

    const preloadImage = (index: number) => {
      if (typeof window !== 'undefined') {
        const img = new window.Image();
        img.src = selectedProject.images![index];
      }
    };

    // Preload next and previous
    const nextIdx = (currentImageIndex + 1) % selectedProject.images.length;
    const prevIdx = (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;

    preloadImage(nextIdx);
    preloadImage(prevIdx);

    // Also preload all others if it's a small gallery (like the 5 images we have)
    selectedProject.images.forEach((_, idx) => {
      if (idx !== currentImageIndex) preloadImage(idx);
    });
  }, [selectedProject, currentImageIndex]);

  const nextImage = () => {
    if (!selectedProject?.images) return;
    setIsImageLoading(true);
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
  };

  const prevImage = () => {
    if (!selectedProject?.images) return;
    setIsImageLoading(true);
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
              <div className="relative h-64 overflow-hidden border-b-4 border-[#0F0F0F] cursor-pointer bg-[#EAEAEA] flex items-center justify-center" onClick={() => project.images && (setSelectedProject(project), setCurrentImageIndex(0), setIsImageLoading(true))}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`transition-transform duration-500 group-hover:scale-105 ${
                    project.id === 'hotel-mobile-app' 
                      ? 'object-contain py-2' 
                      : 'object-cover'
                  }`}
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

                {/* Feature Tags & Date */}
                {project.date && (
                  <div className="mb-5 flex items-center gap-2 text-xs text-gray-500 font-semibold">
                    <Calendar size={13} className="text-gray-400" />
                    <span>{getRelativeTimeString(project.date)}</span>
                  </div>
                )}

                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold px-2 py-1 bg-[#0F0F0F] text-white">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    {project.isPrivate ? (
                      <div
                        className="w-full flex items-center justify-center gap-2 py-3 bg-gray-200 text-gray-500 font-black text-sm uppercase border-2 border-gray-400 cursor-not-allowed select-none"
                        title="Este proyecto es privado / confidencial"
                      >
                        <Lock size={16} />
                        <span>Proyecto Privado</span>
                      </div>
                    ) : (
                      project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-3 bg-[#E11C23] text-white font-black hover:bg-[#0F0F0F] transition-colors text-sm uppercase border-2 border-[#0F0F0F]"
                        >
                          Ver Proyecto
                          <ExternalLink size={16} />
                        </a>
                      )
                    )}

                    {project.images && project.images.length > 0 && (
                      <button
                        onClick={() => { setSelectedProject(project); setCurrentImageIndex(0); setIsImageLoading(true); }}
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
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0F0F0F]/95 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedProject(null)}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-[#E11C23] transition-all hover:rotate-90 z-[110]"
            >
              <X size={32} className="md:w-12 md:h-12" />
            </button>

            <div
              className="relative w-full max-w-4xl flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Baraja / Stack Aesthetic */}
              <div className={`relative w-full mb-8 md:mb-12 group ${
                selectedProject.id === 'hotel-mobile-app' 
                  ? 'max-w-md h-[72vh] aspect-[9/16]' 
                  : 'aspect-square md:aspect-video'
              }`}>
                {/* Decorative Stacked Cards - Subtler on mobile */}
                <div className="absolute inset-0 bg-white border-2 md:border-4 border-[#0F0F0F] translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 shadow-[6px_6px_0px_0px_#E11C23] md:shadow-[12px_12px_0px_0px_#E11C23]"></div>
                <div className="absolute inset-0 bg-[#F2F2F2] border-2 md:border-4 border-[#0F0F0F] translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2"></div>

                {/* Current Image Card */}
                <div className="absolute inset-0 bg-white border-2 md:border-4 border-[#0F0F0F] overflow-hidden flex items-center justify-center">
                  {isImageLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F2F2F2] z-40">
                      <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-[#E11C23] border-t-transparent rounded-full animate-spin mb-4 shadow-[4px_4px_0px_0px_#0F0F0F]"></div>
                      <span className="font-['Anton'] uppercase text-sm md:text-xl tracking-widest animate-pulse">Cargando...</span>
                    </div>
                  )}

                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    className={`object-contain p-1.5 md:p-3 select-none transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsImageLoading(false)}
                  />

                  {/* Navigation Arrows inside the card */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white border-2 md:border-4 border-[#0F0F0F] p-2 md:p-3 hover:bg-[#E11C23] hover:text-white transition-all shadow-[2px_2px_0px_0px_#0F0F0F] md:shadow-[4px_4px_0px_0px_#0F0F0F] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none z-30"
                    aria-label="Anterior"
                  >
                    <ChevronLeft size={20} className="md:w-8 md:h-8" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white border-2 md:border-4 border-[#0F0F0F] p-2 md:p-3 hover:bg-[#E11C23] hover:text-white transition-all shadow-[2px_2px_0px_0px_#0F0F0F] md:shadow-[4px_4px_0px_0px_#0F0F0F] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none z-30"
                    aria-label="Siguiente"
                  >
                    <ChevronRight size={20} className="md:w-8 md:h-8" />
                  </button>
                </div>
              </div>

              {/* Info & Counter */}
              <div className="bg-white border-2 md:border-4 border-[#0F0F0F] p-4 md:p-6 shadow-[4px_4px_0px_0px_#E11C23] md:shadow-[8px_8px_0px_0px_#E11C23] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 w-full max-w-2xl">
                <div className="text-center md:text-left">
                  <h4 className="text-xl md:text-2xl font-black uppercase mb-0.5 md:mb-1 font-['Anton'] tracking-tight">
                    {selectedProject.title}
                  </h4>
                  <p className="text-[10px] md:text-xs font-bold uppercase text-[#0F0F0F]/50 tracking-widest">
                    Galería de Fotos
                  </p>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-2xl md:text-3xl font-black font-['Anton'] text-[#E11C23]">
                    {String(currentImageIndex + 1).padStart(2, '0')}
                    <span className="text-[#0F0F0F]/30 text-lg md:text-xl ml-1">/ {String(selectedProject.images.length).padStart(2, '0')}</span>
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