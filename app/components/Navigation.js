// 'use client'

// import Link from 'next/link';
// import { useState } from 'react';

// export default function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false); // Close menu after clicking
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
//       <div className="px-4 md:px-24 pt-6 md:pt-12">
//         <div className="flex justify-end items-center h-16">
//           {/* Hamburger Menu Button - Only visible on mobile */}
//           <button 
//             className="md:hidden text-white p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <svg 
//               className="w-6 h-6" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               {isMenuOpen ? (
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M6 18L18 6M6 6l12 12" 
//                 />
//               ) : (
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M4 6h16M4 12h16M4 18h16" 
//                 />
//               )}
//             </svg>
//           </button>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
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
//               onClick={() => scrollToSection('testimonial')} 
//               className="text-white font-bold text-2xl hover:underline"
//             >
//               TESTIMONIALS
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu - Only visible when isMenuOpen is true */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-20 left-0 right-0 bg-black bg-opacity-90 p-4">
//             <div className="flex flex-col space-y-4">
//               <button 
//                 onClick={() => scrollToSection('hero')} 
//                 className="text-white font-bold text-xl hover:underline text-left"
//               >
//                 HOME
//               </button>
//               <button 
//                 onClick={() => scrollToSection('about')} 
//                 className="text-white font-bold text-xl hover:underline text-left"
//               >
//                 ABOUT US
//               </button>
//               <button 
//                 onClick={() => scrollToSection('services')} 
//                 className="text-white font-bold text-xl hover:underline text-left"
//               >
//                 OUR SERVICE
//               </button>
//               <button 
//                 onClick={() => scrollToSection('testimonial')} 
//                 className="text-white font-bold text-xl hover:underline text-left"
//               >
//                 TESTIMONIALS
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// components/Navbar.jsx

'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to determine active link styles
  const getLinkStyles = (path) => {
    return `text-white text-xl tracking-wide font-medium 
            hover:opacity-80 transition-opacity duration-300
            ${pathname === path ? 'opacity-100' : 'opacity-90'}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-semibold text-white">Logo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={getLinkStyles('/')}>
              Home
            </Link>
            <Link href="/about" className={getLinkStyles('/about')}>
              About
            </Link>
            <Link href="/client"
             className={getLinkStyles('/client')}
             >
              Client
            </Link>
            <Link href="/team"
             className={getLinkStyles('/team')}
             >
              Team
            </Link>
            <Link href="/services"
             className={getLinkStyles('/services')}
             >
              Services
            </Link>
            <Link href="/testimonial" className={getLinkStyles('/testimonial')}>
              Testimonial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white
                       hover:opacity-80 focus:outline-none transition-opacity duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute w-full z-50
                    backdrop-blur-md bg-black/70`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            onClick={toggleMenu}
            className="block px-3 py-2 rounded-md text-base text-white
                     hover:opacity-80 transition-opacity duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="block px-3 py-2 rounded-md text-base text-white
                     hover:opacity-80 transition-opacity duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={toggleMenu}
            className="block px-3 py-2 rounded-md text-base text-white
                     hover:opacity-80 transition-opacity duration-300"
          >
            Services
          </Link>
          <Link
            href="/testimonial"
            onClick={toggleMenu}
            className="block px-3 py-2 rounded-md text-base text-white
                     hover:opacity-80 transition-opacity duration-300"
          >
            Testimonial
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;