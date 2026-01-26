import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, FileText } from 'lucide-react';
import { PROFILE_IMAGE_URL, WHATSAPP_NUMBER } from '@/utils/constants';


const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden bg-[#0F0F0F]">





      {/* ==================== PRIMER CARRUSEL (Izquierda) ==================== */}
      {/* Enfocado en tus ROLES principales (Estático y B&N) */}
      <div className="absolute top-24 left-0 right-0 transform -rotate-2 z-0 opacity-10 pointer-events-none">
        <div className="flex overflow-hidden w-full">

          {/* TIRA 1 (Sin animación) */}
          <div className="flex gap-8 text-7xl md:text-9xl font-['Anton'] uppercase text-gray-500 whitespace-nowrap min-w-full shrink-0 px-4">
            <span>Código Limpio</span> • <span>Resolución de Problemas</span> • <span>Creatividad</span> • <span>Detallista</span> •
            <span>Código Limpio</span> • <span>Resolución de Problemas</span> • <span>Creatividad</span> • <span>Detallista</span> •
          </div>

          {/* TIRA 2 (Opcional: se mantiene para llenar pantallas anchas, pero estático) */}
          <div aria-hidden="true" className="flex gap-8 text-7xl md:text-9xl font-['Anton'] uppercase text-gray-500 whitespace-nowrap min-w-full shrink-0 px-4">
            <span>Código Limpio</span> • <span>Resolución de Problemas</span> • <span>Creatividad</span> • <span>Detallista</span> •
            <span>Código Limpio</span> • <span>Resolución de Problemas</span> • <span>Creatividad</span> • <span>Detallista</span> •
          </div>

        </div>
      </div>

      {/* ==================== SEGUNDO CARRUSEL (Derecha) ==================== */}
      {/* Enfocado en tu STACK (Estático y B&N) */}
      <div className="absolute bottom-24 left-0 right-0 transform rotate-1 z-0 opacity-10 pointer-events-none">
        <div className="flex overflow-hidden w-full">

          {/* TIRA 1 (Sin animación, texto negro) */}
          <div className="flex gap-8 text-7xl md:text-9xl font-['Anton'] uppercase text-black whitespace-nowrap min-w-full shrink-0 px-4">
            <span>Next.js</span> • <span>Express</span> • <span>Strapi</span> • <span>n8n</span> • <span>Postman</span> •
            <span>Next.js</span> • <span>Express</span> • <span>Strapi</span> • <span>n8n</span> • <span>Postman</span> •
          </div>

          {/* TIRA 2 (Copia estática) */}
          <div aria-hidden="true" className="flex gap-8 text-7xl md:text-9xl font-['Anton'] uppercase text-black whitespace-nowrap min-w-full shrink-0 px-4">
            <span>Next.js</span> • <span>Express</span> • <span>Strapi</span> • <span>n8n</span> • <span>Postman</span> •
            <span>Next.js</span> • <span>Express</span> • <span>Strapi</span> • <span>n8n</span> • <span>Postman</span> •
          </div>

        </div>
      </div>











      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* --- LEFT COLUMN: IMAGE --- */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center lg:justify-start">

            {/* Background Geometric Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#B31217] rounded-full blur-3xl opacity-30 -z-10"></div>

            {/* Collage Container */}
            <div className="relative w-72 md:w-96 aspect-[3/4] rotate-[-3deg]">

              {/* White Frame Border */}
              <div className="absolute inset-0 border-[3px] border-white  bg-transparent p-2 shadow-[6px_6px_0px_0px_#FFFFFF]">

                {/* Image Wrapper with Duotone Effect */}
                <div className="w-full h-full relative overflow-hidden]">
                  <img
                    src={PROFILE_IMAGE_URL}
                    alt="Fernando Pantoja"
                    className="w-full h-full object-cover  mix-blend-multiply grayscale-100 contrast-125 brightness-110"
                  />
                  {/* Texture Overlay */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                {/* Name Tag */}
                <div className="absolute bottom-6 -right-6 bg-[#0F0F0F] text-white px-4 py-2 rotate-3 border-2 border-[#0F0F0F] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-['Gochi_Hand'] text-xl font-bold">Fernando.dev</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 animate-[wiggle_3s_ease-in-out_infinite]">
                <div className="text-white">
                  <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0L61 35L98 35L68 57L79 91L50 70L21 91L32 57L2 35L39 35L50 0Z" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* --- RIGHT COLUMN: TEXT --- */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-white relative">



            <div className="space-y-6 relative mt-4">

              <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold leading-tight">
                Soy Fernando <br />
                <span className="bg-white text-[#0F0F0F] px-2 inline-block -rotate-1 mx-1">Desarrollador Web</span>

              </h2>

              <p className="text-gray-300 font-normal text-lg md:text-xl max-w-xl leading-relaxed">
                Soy una persona ambiciosa con experiencia en <span className="text-[#E11C23] font-bold">desarrollo web</span>.
                Me adentré en la <span className="text-[#E11C23] font-bold">automatización con n8n</span>.
                Siempre busco mejorar mis habilidades y garantizar que mis proyectos sean eficientes y de alta calidad.
              </p>

              {/* Call to Action Area */}
              <div className="pt-8 flex flex-col md:flex-row items-start md:items-center gap-6 relative">

                {/* Handwritten Arrow */}
                <div className="absolute -top-8 right-50 w-24 h-24 hidden md:block opacity-80 rotate-12">
                  <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="2">
                    <path d="M10,10 Q50,50 50,80" strokeDasharray="5,5" />
                    <path d="M40,70 L50,80 L60,70" />
                    <text x="95" y="40" stroke="none" fill="white" fontFamily="Gochi Hand" fontSize="14" textAnchor="end">CV Here!</text>
                  </svg>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white text-[#0F0F0F] font-black font-['Poppins'] text-lg py-4 px-8 border-2 border-transparent hover:border-[#E11C23] hover:text-[#E11C23] transition-all shadow-[6px_6px_0px_0px_#E11C23] flex items-center justify-center gap-3 uppercase tracking-wider"
                  >
                    <span className="relative z-10">Cotizar Ahora</span>
                    <ArrowRight size={24} strokeWidth={3} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="https://www.canva.com/design/DAGqDq4iOng/BgOI6SGII0i-gfZmkp0gDg/view?utm_content=DAGqDq4iOng&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-[#0F0F0F] text-white font-black font-['Poppins'] text-lg py-4 px-8 border-2 border-white hover:bg-[#E11C23] hover:border-[#E11C23] transition-all shadow-[6px_6px_0px_0px_#FFFFFF] flex items-center justify-center gap-3 uppercase tracking-wider"
                  >
                    <span className="relative z-10">Mi Curriculum</span>
                    <FileText size={24} strokeWidth={3} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Social Links Small */}
              <div className="flex gap-4 pt-4">
                <SocialLink href="https://github.com/NarutoGM" icon={<Github size={20} />} />
                <SocialLink href="https://www.linkedin.com/in/fernando-olivert-pantoja-" icon={<Linkedin size={20} />} />
                <SocialLink href="mailto:fernandoolivert25@gmail.com" icon={<Mail size={20} />} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E11C23] transition-colors">
    {icon}
  </a>
)

export default Hero;