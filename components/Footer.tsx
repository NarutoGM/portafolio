import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { EMAIL, WHATSAPP_NUMBER } from '@/utils/constants';


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E11C23] text-white pt-24 pb-12 border-t-4 border-[#0F0F0F] relative overflow-hidden">
      
       {/* Background Marquee Text in Footer */}
       <div className="absolute top-0 left-0 w-full opacity-10 pointer-events-none overflow-hidden whitespace-nowrap">
           <span className="text-[10rem] font-['Anton'] leading-none">CONTACT ME CONTACT ME CONTACT ME</span>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 pb-16 border-b-2 border-white/20">
            <div className="max-w-xl">
                <h2 className="text-5xl md:text-7xl font-['Anton'] mb-6 uppercase">
                    ¿Creamos algo <br/> <span className="text-[#0F0F0F]">BRUTAL?</span>
                </h2>
                <p className="text-white font-medium text-xl mb-8">
                    Estoy disponible para nuevos proyectos.
                </p>
                <div className="flex gap-4">
                     <a href="https://github.com/NarutoGM" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#0F0F0F] text-white hover:bg-white hover:text-[#E11C23] transition-all border-2 border-transparent hover:border-[#0F0F0F] shadow-[6px_6px_0px_0px_#0F0F0F]">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/fernando-olivert-pantoja-" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#0F0F0F] text-white hover:bg-white hover:text-[#E11C23] transition-all border-2 border-transparent hover:border-[#0F0F0F] shadow-[6px_6px_0px_0px_#0F0F0F]">
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>

            <div className="flex flex-col gap-6 w-full md:w-auto">
                <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                    className="group flex items-center justify-between gap-6 bg-white text-[#0F0F0F] p-6 transition-all border-4 border-[#0F0F0F] w-full md:w-96 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#0F0F0F]"
                >
                    <div className="flex items-center gap-4">
                        <Phone size={28} className="text-[#E11C23]" />
                        <div>
                            <p className="text-xs uppercase tracking-widest font-black">WhatsApp</p>
                            <p className="font-bold text-lg md:text-xl font-['Poppins']">+51 969 184 844</p>
                        </div>
                    </div>
                    <ArrowUpRight size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <a 
                    href={`mailto:${EMAIL}`}
                    className="group flex items-center justify-between gap-6 bg-[#0F0F0F] text-white p-6 transition-all border-4 border-white w-full md:w-96 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#FFFFFF]"
                >
                     <div className="flex items-center gap-4">
                        <Mail size={28} />
                        <div>
                            <p className="text-xs uppercase tracking-widest font-black opacity-70">Email</p>
                            <p className="font-bold text-base md:text-lg font-['Poppins']">{EMAIL}</p>
                        </div>
                    </div>
                    <ArrowUpRight size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white font-bold text-sm tracking-widest uppercase">
            <p>
             Fernando Olivert Pantoja Payajo
            </p>
            <p className="mt-2 md:mt-0 opacity-80">
             © {new Date().getFullYear()} / Design by me
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;