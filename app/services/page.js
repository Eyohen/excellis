// import Image from "next/image";
// import foundation from "../../public/foundation1.png";
// import tractorarm from "../../public/tractorarm.png";
// import tractorleg from "../../public/tractorleg.png";

// export default function ServicesSection() {
//   return (
//     <section id="about" className="min-h-screen flex flex-col relative">
//       {/* background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/ourservice.png')",
//         }}
//       ></div>

//       <div className="flex container mx-auto px-4 z-10 justify-center gap-x-[730px] mt-[300px]">
//         <div className="">
//           <h2 className="text-8xl font-medium text-white">OUR</h2>
//           <h2 className="text-8xl font-medium text-white">SERVICE</h2>

//           <div className="max-w-xl text-white"></div>
//         </div>

//         <div className="">
//           <p className="max-w-md text-white text-xl uppercase">
//             We take the lead in providing contracting services with
//             uncompromising commitment to quality, health, safety, and
//             environment.
//           </p>
//         </div>
//       </div>

  

//             <div className="flex container mx-auto gap-x-[230px] px-4 z-10 mt-[300px]">

//         <div className="text-white">
//         <p className="text-white text-3xl font-bold">PROJECT</p>
//         <p className="text-white text-3xl font-bold">MANAGEMENT</p>
//         </div>

//         <div className="text-white">
//         <p className="text-white text-3xl font-bold">TELECOMS</p>
//         <p className="text-white text-3xl font-bold">INFRASRUCTURE</p>
//         </div>

//         <div className="text-white">
//         <p className="text-white text-3xl font-bold">INDUSTRIAL</p>
//         <p className="text-white text-3xl font-bold">INFRASRUCTURE</p>
//         </div>

//         <div className="text-white">
//         <p className="text-white text-3xl font-bold min-w-[200px]">VIEW MORE</p>
//         <p className="text-white text-3xl font-bold">PROJECTS</p>

//         </div>

//       </div>


// <div className="z-10 mt-[150px] container mx-auto">
// <p className="text-white text-5xl font-bold">PROJECT</p>
// <p className="text-white text-5xl font-bold">MANAGEMENT</p>
// </div>


//     </section>
//   );
// }


import Image from "next/image";
import scaffolding from "../../public/scaffolding2.png";
import foundation from "../../public/foundation1.png";
import tractorarm from "../../public/tractorarm.png";
import tractorleg from "../../public/tractorleg.png";

export default function Services() {
  return (
    <div>
    <section id="services" className="min-h-screen flex flex-col relative">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ourservice.png')",
        }}
      ></div>

      {/* Top Section - Title and Description */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-20 md:mt-[200px] lg:mt-[300px]">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16">
          {/* Title */}
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white">OUR</h2>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white">SERVICE</h2>
          </div>

          {/* Description */}
          <div className="lg:max-w-md">
            <p className="text-base sm:text-lg lg:text-xl text-white uppercase">
              We take the lead in providing contracting services with
              uncompromising commitment to quality, health, safety, and
              environment.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-20 md:mt-[150px] lg:mt-[250px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Project Management */}
          <div className="text-white">
            <p className="text-2xl sm:text-3xl font-bold">PROJECT</p>
            <p className="text-2xl sm:text-3xl font-bold">MANAGEMENT</p>
          </div>

          {/* Telecoms Infrastructure */}
          <div className="text-white">
            <p className="text-2xl sm:text-3xl font-bold">TELECOMS</p>
            <p className="text-2xl sm:text-3xl font-bold">INFRASTRUCTURE</p>
          </div>

          {/* Industrial Infrastructure */}
          <div className="text-white">
            <p className="text-2xl sm:text-3xl font-bold">INDUSTRIAL</p>
            <p className="text-2xl sm:text-3xl font-bold">INFRASTRUCTURE</p>
          </div>

          {/* View More */}
          <div className="text-white">
            <p className="text-2xl sm:text-3xl font-bold">VIEW MORE</p>
            <p className="text-2xl sm:text-3xl font-bold">PROJECTS</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-12 sm:mt-20 lg:mt-[150px]">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">PROJECT</p>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">MANAGEMENT</p>
      </div>

      <div className='mb-12'></div>
    </section>
       <section id="about" className="min-h-screen flex relative">
       {/* background image */}
       <div
         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: "url('/projectmanagment.png')",
         }}
       ></div>
 
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-20 md:mt-[200px]">
         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-48">
           {/* Text Content */}
           <div className="w-full lg:flex-1">
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white">
               PROJECT MANAGEMENT
             </h2>
 
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-4">
               Proven value
             </h2>
 
             <div className="max-w-xl text-white">
               <p className="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 lg:mt-12">
                 Excellis' project management processes involves identifying the
                 project requirements and using the necessary skills, techniques,
                 tools, and knowledge to meet it.
               </p>
 
               <p className="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 lg:mt-12">
                 We understand the unique nature of each project in that it is not
                 a routine operation, and we have developed our project management
                 process as a proactive approach to dealing with them.
               </p>
 
               <p className="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 lg:mt-12">
                 We manage and monitor projects to meet these main criteria for
                 success which is centred around cost, quality, time and safety.
               </p>
             </div>
           </div>
 
           {/* Image */}
           <div className="w-full lg:flex-1">
             <Image
               src={scaffolding}
               alt="Construction scaffolding setup"
               className="w-full h-auto object-cover"
               priority
             />
           </div>
         </div>
       </div>
     </section>

     <section className="min-h-screen flex relative py-4 sm:py-6">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/projectmanagment.png')",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-16 sm:mt-20 md:mt-[200px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-48">
          {/* Text Content */}
          <div className="w-full lg:flex-1 space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
              INDUSTRIAL INFRASTRUCTURE
            </h2>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Sustainability in development
            </h2>

            <div className="max-w-xl text-white space-y-6 sm:space-y-8 lg:space-y-12">
              <p className="text-base sm:text-lg lg:text-xl">
                We believe structural integrity ultimately impacts human
                performance and as part of that, the future of construction is
                sustainable, with resilient, high-performing, low energy
                utilization civil infrastructure being non-negotiable.
              </p>

              <p className="text-base sm:text-lg lg:text-xl">
                This belief drives us to explore new technologies and methods
                that support the visions of our clients and positively impact
                the communities in which we live, work and play.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl">
                That means finding ways to build smarter and cleaner and
                encouraging the use of healthy materials and efficient systems -
                so through our work today we see tomorrow transformed.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:flex-1 mt-6 lg:mt-0 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square">
              <Image 
                src={tractorarm} 
                alt="Industrial construction equipment"
                className="rounded-xl border-4 object-cover"
                fill
                sizes="(max-width: 768px) 90vw,
                       (max-width: 1024px) 50vw,
                       40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="min-h-screen flex relative py-4 sm:py-6">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/projectmanagment.png')",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-16 sm:mt-20 md:mt-[200px]">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-48">
          {/* Text Content */}
          <div className="w-full lg:flex-1 space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
              TELECOMS INFRASTRUCTURE
            </h2>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Unquestioning diligence
            </h2>

            <div className="max-w-xl text-white space-y-6 sm:space-y-8 lg:space-y-12">
              <p className="text-base sm:text-lg lg:text-xl">
                Excellis' project management processes involves identifying the
                project requirements and using the necessary skills, techniques,
                tools, and knowledge to meet it.
              </p>

              <p className="text-base sm:text-lg lg:text-xl">
                We understand the unique nature of each project in that it is not
                a routine operation, and we have developed our project management
                process as a proactive approach to dealing with them.
              </p>

              <p className="text-base sm:text-lg lg:text-xl">
                We manage and monitor projects to meet these main criteria for
                success which is centred around cost, quality, time and safety.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:flex-1 mt-6 lg:mt-0">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src={scaffolding}
                alt="Telecoms infrastructure construction"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1024px) 50vw,
                       40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* images  */}
    <div className='min-h-screen flex relative'>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
    style={{
        backgroundImage:"url('/ourwork.png')",
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

    
     </div>
  );
}