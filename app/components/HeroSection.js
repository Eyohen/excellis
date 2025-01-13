export default function HeroSection() {
    return (
    <section id="hero" className="min-h-screen flex items-center">
    {/* background image */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
    style={{
        backgroundImage:"url('/home.png')",
    }}
    >
    </div>
    <div className="relative z-50 container mx-auto px-8">
      <h1 className="text-9xl text-white font-medium">BUILDING</h1>
      <p className="text-9xl text-white">FUTURES</p>
    </div>
  </section>
    );
  }