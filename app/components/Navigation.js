'use client'

import Link from 'next/link';

export default function Navigation() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="px-24 pt-12">
        <div className="flex justify-end items-center h-16">
          {/* <div className="text-xl font-bold">Your Logo</div> */}
          <div className="flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-white font-bold text-2xl hover:underline"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white font-bold text-2xl hover:underline"
            >
              ABOUT US
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white font-bold text-2xl hover:underline"
            >
              OUR SERVICE
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white font-bold text-2xl hover:underline"
            >
              TESTIMONIALS
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}