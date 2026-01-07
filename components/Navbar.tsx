'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#E11C23]/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-['Anton'] tracking-wider text-white">
          Fernando Pantoja<span className="text-[#E11C23]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white hover:text-[#E11C23] font-bold text-sm uppercase tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/51969184844" 
            className="px-6 py-2 bg-white text-[#0F0F0F] font-extrabold text-sm uppercase tracking-wide hover:bg-[#E11C23] hover:text-white transition-all shadow-[6px_6px_0px_0px_#E11C23]"
          >
            Contáctame
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F0F0F] border-t-2 border-[#E11C23] p-6 flex flex-col gap-4 shadow-2xl z-50">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-xl uppercase tracking-widest py-3 border-b border-gray-800 hover:text-[#E11C23] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/51969184844" 
            className="mt-4 block text-center w-full py-4 bg-[#E11C23] text-white font-black uppercase tracking-widest border-2 border-white"
          >
            WhatsApp Directo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;