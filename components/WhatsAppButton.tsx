import Link from 'next/link';
import { IconBrandWhatsapp } from '@tabler/icons-react';

const WhatsAppButton = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 group">
            {/* Tooltip / Message Bubble */}
            <div className="absolute bottom-full right-0 mb-2 w-max hidden group-hover:block animate-fade-in-up">
                <div className="bg-white text-[#0F0F0F] px-4 py-2 rounded-lg shadow-lg text-sm font-bold border border-[#0F0F0F]/10 relative">
                    ¡Hablemos por WhatsApp! 👋
                    {/* Triangle pointer */}
                    <div className="absolute right-6 -bottom-1 w-3 h-3 bg-white border-b border-r border-[#0F0F0F]/10 transform rotate-45"></div>
                </div>
            </div>

            {/* Button */}
            <Link
                href="https://wa.me/51969184844?text=Hola,%20me%20gustaría%20contactar%20contigo."
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full  hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#0F0F0F] transition-all duration-300 border"
                aria-label="Chat on WhatsApp"
            >
                <IconBrandWhatsapp size={32} className="text-white" />

                {/* Notification Badge */}
                <span className="absolute -top-1 -right-1 flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E11C23] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-[#E11C23] text-white text-xs font-bold items-center justify-center border border-white">
                        1
                    </span>
                </span>
            </Link>
        </div>
    );
};

export default WhatsAppButton;
