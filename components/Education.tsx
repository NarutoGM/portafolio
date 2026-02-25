import React from 'react';
import { GraduationCap, Languages, Terminal, Palette, Heart, Wrench, Workflow, Server, Send } from 'lucide-react';
import {
    IconBrandNextjs,
    IconBrandReact,
    IconBrandVue,
    IconBrandAngular,
    IconBrandDocker,
    IconBrandGithub,

} from '@tabler/icons-react';
import { SiNestjs } from "react-icons/si"


const Education: React.FC = () => {
    return (
        <section className="py-24 bg-white text-[#0F0F0F] relative overflow-hidden">

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2F2F2] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E11C23]/10 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <span className="bg-[#0F0F0F] text-white px-4 py-1 text-sm font-bold uppercase tracking-widest inline-block mb-4 -rotate-1">
                        Educación
                    </span>
                    <h2 className="text-6xl font-['Anton'] text-[#0F0F0F] mb-6 uppercase">
                        Datos <span className="text-[#E11C23]">Relevantes</span>
                    </h2>
                </div>


                <div className="grid lg:grid-cols-2 gap-16 md:gap-24">

                    {/* --- LEFT COLUMN: Education & Languages --- */}
                    <div className="space-y-12">

                        {/* Education Section */}
                        <div className="relative">
                            {/* Background decoration made permanent */}
                            <div className="absolute -inset-2 bg-[#0F0F0F] rotate-1 opacity-10 rounded-lg"></div>
                            <div className="relative">
                                <h3 className="inline-block bg-[#0F0F0F] text-white font-['Anton'] text-3xl px-4 py-2 uppercase tracking-wide mb-8 -rotate-1 shadow-[6px_6px_0px_0px_#E11C23]">
                                    <GraduationCap className="inline-block mr-2 -mt-1" size={24} />
                                    Educación
                                </h3>

                                <div className="space-y-8 pl-4 border-l-4 border-[#E11C23]/20">
                                    <div className="relative">
                                        <span className="absolute -left-[25px] top-1 w-4 h-4 bg-[#E11C23] border-2 border-white rounded-full"></span>
                                        <h4 className="font-['Poppins'] font-bold text-xl">Ingeniería de Sistemas</h4>
                                        <p className="text-[#0F0F0F]/70 font-medium">Universidad Nacional de Trujillo</p>
                                        <span className="text-xs font-black bg-[#F2F2F2] px-2 py-0.5 rounded text-[#0F0F0F] mt-1 inline-block">2021 - Presente</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Languages Section */}
                        <div>
                            <h3 className="inline-block bg-[#0F0F0F] text-white font-['Anton'] text-3xl px-4 py-2 uppercase tracking-wide mb-8 rotate-1 shadow-[6px_6px_0px_0px_#E11C23]">
                                <Languages className="inline-block mr-2 -mt-1" size={24} />
                                Idiomas
                            </h3>
                            <div className="bg-white p-6 border-2 border-[#0F0F0F] shadow-[4px_4px_0px_0px_#0F0F0F]">
                                <div className="flex justify-between items-center mb-4 border-b border-[#0F0F0F]/10 pb-2">
                                    <span className="font-bold text-lg uppercase">Español</span>
                                    <span className="font-['Gochi_Hand'] text-[#E11C23] font-bold text-xl">Nativo</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg uppercase">Inglés</span>
                                    <span className="font-['Gochi_Hand'] text-[#0F0F0F]/60 font-bold text-xl">Básico (A2)</span>
                                </div>
                            </div>
                        </div>
                        {/* Tools Section */}
                        <div>
                            <h3 className="inline-block bg-[#0F0F0F] text-white font-['Anton'] text-3xl px-4 py-2 uppercase tracking-wide mb-8 rotate-1 shadow-[6px_6px_0px_0px_#E11C23]">
                                <Wrench className="inline-block mr-2 -mt-1" size={24} />
                                Herramientas
                            </h3>
                            <div className="bg-white border-2 border-[#0F0F0F] p-6 shadow-[6px_6px_0px_0px_#0F0F0F]">
                                <p className="font-bold text-lg uppercase tracking-wider">Antigravity</p>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: Software & Skills --- */}
                    <div className="space-y-12">

                        {/* Software Section */}
                        <div>
                            <h3 className="inline-block bg-[#0F0F0F] text-white font-['Anton'] text-3xl px-4 py-2 uppercase tracking-wide mb-8 -rotate-2 shadow-[6px_6px_0px_0px_#E11C23]">
                                <Terminal className="inline-block mr-2 -mt-1" size={24} />
                                Tecnologías
                            </h3>

                            <div className="bg-white border-2 border-[#0F0F0F] p-8 shadow-[6px_6px_0px_0px_#0F0F0F] space-y-5">
                                <SkillRow name="Next.js" level={5} icon={<IconBrandNextjs size={24} />} />
                                <SkillRow name="React" level={5} icon={<IconBrandReact size={24} />} />
                                <SkillRow name="Vue.js" level={3} icon={<IconBrandVue size={24} />} />
                                <SkillRow name="Angular" level={3} icon={<IconBrandAngular size={24} />} />
                                <SkillRow name="n8n" level={5} icon={<Workflow size={24} />} />
                                <SkillRow name="Easypanel" level={5} icon={<Server size={24} />} />
                                <SkillRow name="Docker" level={4} icon={<IconBrandDocker size={24} />} />
                                <SkillRow name="Postman" level={5} icon={<Send size={24} />} />
                                <SkillRow name="Git / GitHub" level={5} icon={<IconBrandGithub size={24} />} />
                                <SkillRow name="NestJS" level={4} icon={<SiNestjs size={24} />} />
                            </div>
                        </div>



                        {/* Soft Skills Section */}
                        <div>
                            <h3 className="inline-block bg-[#0F0F0F] text-white font-['Anton'] text-3xl px-4 py-2 uppercase tracking-wide mb-6 rotate-1 shadow-[6px_6px_0px_0px_#E11C23]">
                                <Heart className="inline-block mr-2 -mt-1" size={24} />
                                Habilidades Blandas
                            </h3>

                            <div className="relative">
                                <div className="absolute -top-6 -right-6 text-[#E11C23] opacity-20 rotate-12">
                                    <Palette size={80} />
                                </div>
                                <h4 className="font-['Poppins'] font-black text-2xl uppercase mb-2 flex items-center gap-2">
                                    <span className="text-[#E11C23]">★</span> Alma Creativa
                                </h4>
                                <p className="font-medium text-lg leading-relaxed text-[#0F0F0F]/80">
                                    Responsable, empático, con gran capacidad para el <span className="bg-[#0F0F0F] text-white px-1">trabajo en equipo</span>.
                                    Perfil proactivo y analítico enfocado en soluciones.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper component for the dots
const SkillRow = ({ name, level, icon }: { name: string; level: number; icon?: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-between">
            <span className="font-bold text-[#0F0F0F] uppercase tracking-wider text-sm md:text-base flex items-center gap-2">
                {icon}
                {name}
            </span>
            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((dot) => (
                    <div
                        key={dot}
                        className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-[#0F0F0F] transition-all duration-300 ${dot <= level ? 'bg-[#E11C23] scale-110' : 'bg-[#F2F2F2]'}`}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Education;