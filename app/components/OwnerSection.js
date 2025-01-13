import Image from 'next/image'
import okoye from '../../public/okoye.jpg'
import ewemade from '../../public/ewemade.jpg'

export default function OwnerSection() {
    return (
        <section id="about" className="min-h-screen flex relative">
            {/* background image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/aboutus.png')",
                }}
            >
            </div>

            <div className='flex container mx-auto z-10 justify-center mt-[200px] gap-x-32'>
                {/* First Owner */}
                <div className="flex flex-col items-center text-center">
                    <Image 
                        src={okoye} 
                        alt='Chukwuemeka Okoye' 
                        className='w-[400px] h-[500px] object-cover'
                    />
                    <h2 className="text-3xl font-semibold text-white mt-6">
                        Chukwuemeka Okoye
                    </h2>
                    <div className="text-white max-w-xl">
                        <p className="text-xl mt-6">
                            Emeka has 16 years hands on experience in both offshore and onshore structures, with expertise that covers the five main sectors of construction: Heavy Civil, Commercial, Industrial, Residential, and Environmental.
                        </p>
                        <p className="text-xl mt-6">
                            He holds a Bachelors of Engineering (B.Eng.) in Structural Engineering from the prestigious University of Benin in Nigeria, and an MBA in Business Administration and General Management from the University of Nicosia in Cyprus.
                        </p>
                        <p className="text-xl mt-6">
                            He is certified by the Project Management Institute (PMI) as a Project Management Professional.
                        </p>
                    </div>
                </div>

                {/* Second Owner */}
                <div className="flex flex-col items-center text-center">
                    <Image 
                        src={ewemade} 
                        alt='Ewemade Bode Banjoko' 
                        className='w-[400px] h-[500px] object-cover'
                    />
                    <h2 className="text-3xl font-semibold text-white mt-6">
                        Ewemade Bode Banjoko
                    </h2>
                    <div className="text-white max-w-xl">
                        <p className="text-xl mt-6">
                            Ewemade's long tenure in the fields of entrepreneurship, service delivery, project management, civil and commercial construction and development, combined with a glowing track record of effective leadership has allowed her to build a trusted brand in her fields of endeavour.
                        </p>
                        <p className="text-xl mt-6">
                            She graduated from the University of Lagos with a Bachelor of Laws and has completed several trainings at the Central Saint Martin School of Arts and Design, London. Her vision and intimate knowledge of the industry have led her to many succesful projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}