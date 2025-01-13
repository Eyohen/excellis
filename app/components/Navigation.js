// 'use client'

// import Link from 'next/link';

// export default function Navigation() {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
//       <div className="px-24 pt-12">
//         <div className="flex justify-end items-center h-16">
//           {/* <div className="text-xl font-bold">Your Logo</div> */}
//           <div className="flex space-x-8">
//             <button 
//               onClick={() => scrollToSection('hero')} 
//               className="text-white font-bold text-2xl hover:underline"
//             >
//               HOME
//             </button>
//             <button 
//               onClick={() => scrollToSection('about')} 
//               className="text-white font-bold text-2xl hover:underline"
//             >
//               ABOUT US
//             </button>
//             <button 
//               onClick={() => scrollToSection('services')} 
//               className="text-white font-bold text-2xl hover:underline"
//             >
//               OUR SERVICE
//             </button>
//             <button 
//               onClick={() => scrollToSection('contact')} 
//               className="text-white font-bold text-2xl hover:underline"
//             >
//               TESTIMONIALS
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="px-4 md:px-24 pt-6 md:pt-12">
        <div className="flex justify-end items-center h-16">
          {/* Hamburger Menu Button - Only visible on mobile */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
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
              onClick={() => scrollToSection('testimonial')} 
              className="text-white font-bold text-2xl hover:underline"
            >
              TESTIMONIALS
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only visible when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black bg-opacity-90 p-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-white font-bold text-xl hover:underline text-left"
              >
                HOME
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white font-bold text-xl hover:underline text-left"
              >
                ABOUT US
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white font-bold text-xl hover:underline text-left"
              >
                OUR SERVICE
              </button>
              <button 
                onClick={() => scrollToSection('testimonial')} 
                className="text-white font-bold text-xl hover:underline text-left"
              >
                TESTIMONIALS
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}