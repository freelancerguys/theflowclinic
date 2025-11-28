import oceanVideo from '../assets/Ocean waves.mp4'

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={oceanVideo} type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-teal-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white mb-6 lg:mb-8">
          Reclaim Your Mind
        </h1>

        {/* Sub-heading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-sans mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
          We provide mental health services to individuals and organisations. Start your journey to better mental health with us
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto bg-blue-800 hover:bg-blue-900 text-white font-sans font-medium px-8 py-3 lg:px-10 lg:py-4 rounded-lg transition-colors duration-200 text-sm sm:text-base">
            BOOK A CONSULTATION
          </button>
          <button className="w-full sm:w-auto bg-blue-800 hover:bg-blue-900 text-white font-sans font-medium px-8 py-3 lg:px-10 lg:py-4 rounded-lg transition-colors duration-200 text-sm sm:text-base flex items-center justify-center gap-2">
            PARTNER WITH US
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

