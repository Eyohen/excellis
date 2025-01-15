import Image from "next/image";
import tractorarm from '../../public/tractorarm.png'

export default function IndustrialInfrastructure() {
  return (
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
  );
}