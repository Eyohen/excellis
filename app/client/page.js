import Image from "next/image";
import logo1 from "../../public/logo1.png";
import logo2 from "../../public/logo2.png";
import logo3 from "../../public/logo3.png";
import logo4 from "../../public/logo4.png";
import logo5 from "../../public/logo5.png";
import logo6 from "../../public/logo6.png";
import logo7 from "../../public/logo7.png";
import logo8 from "../../public/logo8.png";
import logo9 from "../../public/logo9.png";
import logo10 from "../../public/logo10.png";
import logo11 from "../../public/atclogo.jpg";
import logo12 from "../../public/swaplogo.jpg";

const logos = [
  { src: logo1, alt: "Client Logo 1" },
  { src: logo2, alt: "Client Logo 2" },
  { src: logo3, alt: "Client Logo 3" },
  { src: logo4, alt: "Client Logo 4" },
  { src: logo5, alt: "Client Logo 5" },
  { src: logo6, alt: "Client Logo 6" },
  { src: logo7, alt: "Client Logo 7" },
  { src: logo8, alt: "Client Logo 8" },
  { src: logo9, alt: "Client Logo 9" },
  { src: logo10,alt: "Client Logo 10"},
  { src: logo11, alt: "Client Logo 11" },
  { src: logo12,alt: "Client Logo 12"},
];

export default function Client() {
  return (
    <section className="min-h-screen bg-[#191970] py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-3xl shadow-2xl overflow-hidden">
        <div className="py-16 px-4 md:px-16">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted By Industry Leaders
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              We're proud to work with some of the most innovative and respected companies
              across various industries.
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-16">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className="relative h-28 w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 6}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">98%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div> */}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Join these industry leaders and experience our exceptional service
            </p>
            {/* <button className="bg-[#191970] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1e1e8f] transition-colors duration-300 hover:transform hover:scale-105">
              Become Our Client
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}