import Image from 'next/image';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import OwnerSection from './components/OwnerSection';
import ProjectManagement from './components/ProjectManagement';
import TelecomInfrastructure from './components/TelecomInfrastructure';
import IndustrialInfrastructure from './components/IndustrialInfrastructure';
import Testimonial from './components/Testimonial';

export default function Home() {
  return (
    <main className=""> 
      <HeroSection />

      <div className='min-h-screen flex relative'>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
    style={{
        backgroundImage:"url('/floatingbriefcase.png')",
    }}
    >
     </div>
     </div>

     <div className='min-h-screen flex relative'>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
    style={{
        backgroundImage:"url('/skypipes3.png')",
    }}
    >
     </div>
     </div>

     <div className='min-h-screen flex relative'>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
    style={{
        backgroundImage:"url('/foundation1.png')",
    }}
    >
     </div>
     </div>

     <div className='min-h-screen flex relative'>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
    style={{
        backgroundImage:"url('/foundation3.png')",
    }}
    >
     </div>
     </div>
    


      <div className='mb-12'></div>
    </main>
  );
}