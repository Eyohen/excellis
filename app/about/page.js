import Image from 'next/image'
import foundation from '../../public/foundation1.png'
import tractorarm from '../../public/tractorarm.png'
import tractorleg from '../../public/tractorleg.png'
import okoye from '../../public/okoye.jpg'
import ewemade from '../../public/ewemade.jpg'

export default function About() {
    return (
        <div className='bg-white'>
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

<section className="min-h-screen flex relative">
{/* background image */}
<div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
        backgroundImage: "url('/aboutus.png')",
    }}
>
</div>

<div className='container mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-20 md:mt-[200px]'>
    {/* Owners Container */}
    <div className='flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-32'>
        {/* First Owner */}
        <div className="flex flex-col items-center text-center">
            <Image 
                src={okoye} 
                alt='Chukwuemeka Okoye' 
                className='w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-[350px] sm:h-[400px] lg:h-[500px] object-cover'
            />
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-4 sm:mt-6">
                Chukwuemeka Okoye
            </h2>
            <div className="text-white max-w-xl">
                <p className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-6">
                    Emeka has 16 years hands on experience in both offshore and onshore structures, with expertise that covers the five main sectors of construction: Heavy Civil, Commercial, Industrial, Residential, and Environmental.
                </p>
                <p className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-6">
                    He holds a Bachelors of Engineering (B.Eng.) in Structural Engineering from the prestigious University of Benin in Nigeria, and an MBA in Business Administration and General Management from the University of Nicosia in Cyprus.
                </p>
                <p className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-6">
                    He is certified by the Project Management Institute (PMI) as a Project Management Professional.
                </p>
            </div>
        </div>

        {/* Second Owner */}
        <div className="flex flex-col items-center text-center">
            <Image 
                src={ewemade} 
                alt='Ewemade Bode Banjoko' 
                className='w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-[350px] sm:h-[400px] lg:h-[500px] object-cover'
            />
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-4 sm:mt-6">
                Ewemade Bode Banjoko
            </h2>
            <div className="text-white max-w-xl">
                <p className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-6">
                    Ewemade's long tenure in the fields of entrepreneurship, service delivery, project management, civil and commercial construction and development, combined with a glowing track record of effective leadership has allowed her to build a trusted brand in her fields of endeavour.
                </p>
                <p className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-6">
                    She graduated from the University of Lagos with a Bachelor of Laws and has completed several trainings at the Central Saint Martin School of Arts and Design, London. Her vision and intimate knowledge of the industry have led her to many succesful projects.
                </p>
            </div>
        </div>
    </div>
    <div className='mb-12'></div>
</div>

</section>
</div>
    );
}