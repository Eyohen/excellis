import Image from 'next/image';

export default function Testimonial() {
    return (
      <div className='min-h-screen flex relative'>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
    style={{
        backgroundImage:"url('/testimonials.png')",
    }}
    >
     </div>
     </div>
    
    );
  }