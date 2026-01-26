import React from 'react';
import { EXPERIENCE_DATA } from '@/utils/constants';

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background noise/grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* HEADER */}
        <div className="mb-20 flex flex-col items-start gap-2">
          <span className="text-[#E11C23] font-bold tracking-widest uppercase text-sm border-l-4 border-[#E11C23] pl-3 animate-pulse">
            Trayectoria
          </span>
          <h2 className="text-5xl md:text-7xl font-['Anton'] text-white uppercase tracking-wide">
            Experiencia
          </h2>
        </div>

        <div className="space-y-16 relative">
          {/* Línea vertical continua para desktop */}
          <div className="hidden md:block absolute left-[27px] top-4 bottom-0 w-1 bg-gradient-to-b from-[#E11C23] via-gray-800 to-transparent"></div>

          {EXPERIENCE_DATA.map((job, index) => (
            <div key={index} className="relative group perspective-1000">

              <div className="flex flex-col md:flex-row gap-8 items-stretch md:items-start">

                {/* --- IZQUIERDA: LÍNEA DE TIEMPO Y CONECTOR --- */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 relative">
                  {/* Número */}
                  <div className="w-14 h-14 bg-[#0F0F0F] text-white group-hover:bg-[#E11C23] group-hover:text-black transition-colors duration-300 font-black text-xl flex items-center justify-center border-4 border-[#E11C23] z-20 rounded-full relative">
                    {index + 1}
                  </div>
                  {/* Conector Horizontal (El puente hacia la tarjeta) */}
                  <div className="absolute top-7 left-14 w-8 h-1 bg-[#E11C23] -z-10"></div>
                </div>

                {/* --- DERECHA: LA TARJETA (CARD) --- */}
                {/* Agregué transición, hover effects y cambié la sombra para que se vea */}
                <div className="flex-1 bg-[#141414] p-8 border-2 border-white/10 hover:border-[#E11C23] transition-all duration-300 ease-out transform group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_0px_#E11C23] shadow-[8px_8px_0px_0px_#2a2a2a] relative">

                  {/* Esquina decorativa animada */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[#2a2a2a] border-l-[40px] border-l-transparent group-hover:border-t-[#E11C23] transition-colors duration-300"></div>

                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4 relative z-10">
                    <div className="flex items-center gap-4">
                      {/* Logo con efecto grayscale que se activa a color al hover */}
                      {job.logo && (
                        <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-white border-2 border-black rounded-lg overflow-hidden">
                          <img
                            src={job.logo}
                            alt={`${job.company} logo`}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-['Anton'] tracking-wide text-white group-hover:text-[#E11C23] transition-colors">{job.role} - {job.mode} </h3>
                        <h4 className="text-lg text-gray-400 font-['Poppins'] font-medium">{job.company}</h4>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 md:flex-col md:items-end md:gap-1 text-xs font-bold uppercase tracking-wider">
                      <span className="bg-white/10 text-white px-3 py-1 border border-white/20">
                        {job.period}
                      </span>
                      <span className="bg-[#E11C23] text-black px-3 py-1">
                        {job.type}
                      </span>
                      {/* NUEVO BADGE: MODALIDAD (Mode) */}

                    </div>
                  </div>

                  <p className="text-gray-300 font-['Poppins'] font-light text-lg leading-relaxed mb-6 border-l-2 border-[#E11C23]/30 pl-4 group-hover:border-[#E11C23] transition-colors">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {job.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono text-gray-400 border border-gray-700 px-2 py-1 hover:text-white hover:border-[#E11C23] transition-colors cursor-default">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Conector Vertical Mobile (Para que no se pierda la línea en celular) */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-[#E11C23]/20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;