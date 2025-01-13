import Image from "next/image";
import foundation from "../../public/foundation1.png";
import tractorarm from "../../public/tractorarm.png";
import tractorleg from "../../public/tractorleg.png";

export default function ServicesSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col relative">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ourservice.png')",
        }}
      ></div>

      <div className="flex container mx-auto px-4 z-10 justify-center gap-x-[730px] mt-[300px]">
        <div className="">
          <h2 className="text-8xl font-medium text-white">OUR</h2>
          <h2 className="text-8xl font-medium text-white">SERVICE</h2>

          <div className="max-w-xl text-white"></div>
        </div>

        <div className="">
          <p className="max-w-md text-white text-xl uppercase">
            We take the lead in providing contracting services with
            uncompromising commitment to quality, health, safety, and
            environment.
          </p>
        </div>
      </div>

  

            <div className="flex container mx-auto gap-x-[230px] px-4 z-10 mt-[300px]">

        <div className="text-white">
        <p className="text-white text-3xl font-bold">PROJECT</p>
        <p className="text-white text-3xl font-bold">MANAGEMENT</p>
        </div>

        <div className="text-white">
        <p className="text-white text-3xl font-bold">TELECOMS</p>
        <p className="text-white text-3xl font-bold">INFRASRUCTURE</p>
        </div>

        <div className="text-white">
        <p className="text-white text-3xl font-bold">INDUSTRIAL</p>
        <p className="text-white text-3xl font-bold">INFRASRUCTURE</p>
        </div>

        <div className="text-white">
        <p className="text-white text-3xl font-bold min-w-[200px]">VIEW MORE</p>
        <p className="text-white text-3xl font-bold">PROJECTS</p>

        </div>

      </div>


<div className="z-10 mt-[150px] container mx-auto">
<p className="text-white text-5xl font-bold">PROJECT</p>
<p className="text-white text-5xl font-bold">MANAGEMENT</p>
</div>


    </section>
  );
}
