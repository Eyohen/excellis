import Image from 'next/image';

export default function Client() {
    return (
      <section className='p-16 bg-[#191970]'>
        <div className='min-h-screen flex relative'>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
    style={{
        backgroundImage:"url('/client.jpg')",
    }}
    >
     </div>
     </div>
     </section>
    
    );
  }