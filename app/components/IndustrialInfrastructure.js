import Image from "next/image";
import tractorarm from '../../public/tractorarm.png'

export default function IndustrialInfrastructure() {
  return (
    <section id="about" className="min-h-screen flex relative">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/projectmanagment.png')",
        }}
      ></div>

      <div className="flex container mx-auto px-4 z-10 gap-x-48 justify-center mt-[200px]">
        <div className="flex-1">
          <h2 className="text-6xl font-medium  text-white">
            INDUSTRIAL INFRASRUCTURE
          </h2>

          <h2 className="text-4xl font-bold text-white mt-4">
            Sustainability in development
          </h2>
          <div className="max-w-xl text-white">
            <p className="text-medium text-xl mt-12">
              We believe structural integrity ultimately impacts human
              performance and as part of that, the future of construction is
              sustainable, with resilient, high-performing, low energy
              utillization civil infrastructure being non-negotiable.

              <p className="text-medium text-xl mt-12">
                This belief drives us to explore new technologies and methods
                that support the visions of our clients and positively impact
                the communities in which we live, work and play.
              </p>
              
              <p className="text-medium text-xl mt-12">
                That means finding ways to build smarter and cleaner and
                encouraging the use of healthy materials and efficient systems -
                so through our work today we see tomorrow transformed.
              </p>

            </p>
          </div>
        </div>

        <div className="flex-1">
          <Image src={tractorarm} alt="hjhjh" className="w-[500px] h-[500px] border-4 rounded-xl object-cover" />
        </div>
      </div>
    </section>
  );
}
