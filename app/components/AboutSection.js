import Image from 'next/image'
import foundation from '../../public/foundation1.png'
import tractorarm from '../../public/tractorarm.png'
import tractorleg from '../../public/tractorleg.png'



export default function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex relative">
        {/* background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
            backgroundImage:"url('/about.png')",
        }}
        >

        </div>


<div className='flex container mx-auto px-4 z-10 justify-center mt-[200px]'>


        <div className="flex-1">
        <h2 className="text-8xl font-medium  text-white">ABOUT US</h2>
        <div className="max-w-xl text-white">
        <p className="uppercase text-medium text-xl mt-12">Welcome to Excellis, a leading force in civil infrastructure, telecoms, procurement, engineering and construction across energy infrastructure,  real estate design-build services, solar deployment, municipal infrastructure development, amongst other services. </p>

<p className="uppercase text-medium text-xl mt-4">Our commitment to reshaping infrastructural development and support living defines our essence. With a focus on innovation and quality, Excellis is dedicated to delivering results that surpass expectations, merging functionality with aesthetics and efficiency.</p>

          </div>
          </div>


          <div className='flex-1'> 
            <div className='flex gap-x-11'>
          <Image src={tractorarm} alt='hjhjh' className='w-[300px] h-[400px] object-cover'/>
            <Image src={foundation} alt='hjhjh' className='w-[300px] h-[400px] object-cover'/>
            </div>
            <Image src={tractorleg} alt='hjhjh' className='w-[645px] h-[250px] object-cover mt-11'/>
            
            </div>

        </div>
      </section>
    );
  }