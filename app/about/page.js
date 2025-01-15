import Image from 'next/image'
import foundation from '../../public/foundation1.png'
import tractorarm from '../../public/tractorarm.png'
import tractorleg from '../../public/tractorleg.png'

export default function About() {
    return (
        <section id="about" className="min-h-screen flex relative">
            {/* background image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                style={{
                    backgroundImage: "url('/about.png')",
                }}
            >
            </div>

            <div className='container mx-auto px-4 md:px-6 lg:px-8 z-10 mt-20 md:mt-[200px]'>
                {/* Main content container */}
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
                    {/* Text content */}
                    <div className="w-full lg:flex-1">
                        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white">
                            ABOUT US
                        </h2>
                        <div className="max-w-xl text-white mt-6 md:mt-12">
                            <p className="uppercase text-base sm:text-lg md:text-xl">
                                Welcome to Excellis, a leading force in civil infrastructure, telecoms, 
                                procurement, engineering and construction across energy infrastructure,  
                                real estate design-build services, solar deployment, municipal 
                                infrastructure development, amongst other services.
                            </p>

                            <p className="uppercase text-base sm:text-lg md:text-xl mt-4">
                                Our commitment to reshaping infrastructural development and support 
                                living defines our essence. With a focus on innovation and quality, 
                                Excellis is dedicated to delivering results that surpass expectations, 
                                merging functionality with aesthetics and efficiency.
                            </p>
                        </div>
                    </div>

                    {/* Image grid */}
                    <div className='w-full lg:flex-1 mt-8 lg:mt-0'> 
                        {/* Top images container */}
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-11'>
                            <Image 
                                src={tractorarm} 
                                alt='Construction equipment arm' 
                                className='w-full sm:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover'
                            />
                            <Image 
                                src={foundation} 
                                alt='Foundation construction' 
                                className='w-full sm:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover'
                            />
                        </div>
                        {/* Bottom image */}
                        <Image 
                            src={tractorleg} 
                            alt='Construction equipment base' 
                            className='w-full h-[200px] sm:h-[220px] md:h-[230px] lg:h-[250px] object-cover mt-4 sm:mt-6 md:mt-8 lg:mt-11'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}