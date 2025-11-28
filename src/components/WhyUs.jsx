import vect1 from '../assets/whyus/vect1.png'

const WhyUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      ),
      text: "Deep expertise in therapy."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      text: "Systemic thinking that looks at communities as ecosystems."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
        </svg>
      ),
      text: "Evidence-based methods that move beyond theory."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
        </svg>
      ),
      text: "Language that resonates."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
        </svg>
      ),
      text: "The Flow Clinic is uniquely positioned to serve both individuals and institutions."
    }
  ]

  return (
    <section className="w-full pt-20 sm:pt-16 md:pt-20 lg:pt-24 pb-16 sm:pb-20 md:pb-24 lg:pb-32" style={{ backgroundColor: '#DFF6F9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="order-1 lg:order-1">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
              <span className="text-blue-900">Why</span>{' '}
              <span className="text-teal-600">Us?</span>
            </h2>

            {/* Introductory Paragraph */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-900 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
              Unlike most mental health services that are either purely clinical or purely wellness-oriented, The Flow Clinic bridges the two. We bring:
            </p>

            {/* Bulleted List */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  {/* Icon Circle */}
                  <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-teal-600 flex items-center justify-center text-white mt-0.5 sm:mt-1">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                      {feature.icon}
                    </div>
                  </div>
                  {/* Text */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-900 leading-relaxed pt-1 sm:pt-2">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Illustration */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={vect1}
                alt="Mental health illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs

