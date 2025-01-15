import Image from "next/image";
import umoh from "../../public/umoh.jpeg";

export default function Testimonial() {
  return (
    <section id="testimonial" className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/testbackground.png')",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
        {/* Testimonial Text */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-white text-lg md:text-3xl leading-relaxed italic">
            From all of us here at Profogas and FastPace Logistics, thank you so
            much for the great teamwork and collaboration throughout the
            project…I've relayed this before, but it can't be overstated - we
            are thrilled with the results of the project. Comments from staff,
            clients, management and vendors have been extremely positive. The
            level of professionalism, teamwork and service was astounding. I'm
            very impressed!
          </p>
        </div>

        {/* Author Details */}
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 relative overflow-hidden rounded-full">
            <Image 
              src={umoh} 
              alt="Umoh Effiom"
              className="object-cover"
              fill
              sizes="(max-width: 96px) 100vw, 96px"
              priority
            />
          </div>
          <h4 className="text-white font-semibold text-xl mb-2">Umoh Effiom</h4>
          <p className="text-gray-200 text-sm md:text-base">
            CEO, Profogas Nigeria Ltd and Fast Pace Logistics Ltd
          </p>
        </div>
      </div>
    </section>
  );
}
