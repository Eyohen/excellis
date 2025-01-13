// import Image from "next/image";
// import scaffolding from "../../public/scaffolding2.png";

// export default function TelecomInfrastructure() {
//   return (
//     <section id="about" className="min-h-screen flex relative">
//       {/* background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/projectmanagment.png')",
//         }}
//       ></div>

//       <div className="flex container mx-auto px-4 z-10 gap-x-48 justify-center mt-[200px]">
//         <div className="flex-1">
//           <h2 className="text-6xl font-medium  text-white">
//             TELECOMS INFRASRUCTURE 
//           </h2>

//           <h2 className="text-4xl font-bold text-white mt-4">
//             Unquestioning diligence
//           </h2>
//           <div className="max-w-xl text-white">
//             <p className="text-medium text-xl mt-12">
//               Excellis' project management processes involves identifying the
//               project requirements and using the necessary skills, techniques,
//               tools, and knowledge to meet it.
//             </p>

//             <p className="text-medium text-xl mt-12">
//               We understand the unique nature of each project in that it is not
//               a routine operation, and we have developed our project management
//               process as a proactive approach to dealing with them.
//             </p>

//             <p className="text-medium text-xl mt-12">
//               We manage and monitor projects to meet these main criteria for
//               success which is centred around cost, quality, time and safety.
//             </p>
//           </div>
//         </div>

//         <div className="flex-1">
//           <Image
//             src={scaffolding}
//             alt="hjhjh"
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import scaffolding from "../../public/scaffolding2.png";

export default function TelecomInfrastructure() {
  return (
    <section id="about" className="min-h-screen flex relative py-4 sm:py-6">
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
  );
}