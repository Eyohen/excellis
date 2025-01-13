import Image from "next/image";
import scaffolding from "../../public/scaffolding2.png";

export default function ProjectManagement() {
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
            PROJECT MANAGEMENT
          </h2>

          <h2 className="text-4xl font-bold text-white mt-4">
            Proven value
          </h2>
          <div className="max-w-xl text-white">
            <p className="text-medium text-xl mt-12">
              Excellis' project management processes involves identifying the
              project requirements and using the necessary skills, techniques,
              tools, and knowledge to meet it.
            </p>

            <p className="text-medium text-xl mt-12">
              We understand the unique nature of each project in that it is not
              a routine operation, and we have developed our project management
              process as a proactive approach to dealing with them.
            </p>

            <p className="text-medium text-xl mt-12">
              We manage and monitor projects to meet these main criteria for
              success which is centred around cost, quality, time and safety.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src={scaffolding}
            alt="hjhjh"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
