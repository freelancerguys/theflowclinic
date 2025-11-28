import { useState } from 'react'
import footerCloud from '../assets/footercloud.png'
import logo2 from '../assets/logo2.svg'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <footer className="relative w-full">
      {/* Footer Cloud Image - At the top with no space */}
      <div className="absolute top-0 left-0 right-0 w-full">
        <img
          src={footerCloud}
          alt="Footer cloud decoration"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Footer Content with Gradient Background */}
      <div 
        className="sm:py-20 lg:py-56 xl:py-56 w-full"
        style={{
          background: 'linear-gradient(to bottom, #B0E0E6, #F5F5DC)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16">
          {/* Top Section: Flow with Us (Newsletter) */}
          <div className="mb-12 lg:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Left: Text Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  Flow with Us
                </h2>
                <p className="text-base sm:text-lg text-blue-900 mb-4 leading-relaxed">
                  Get early access to new features, mindful content, and special updates designed to keep you balanced.
                </p>
                <p className="text-sm sm:text-base text-blue-900 mb-6">
                  By joining, you agree to receive emails from The Flow. You can unsubscribe anytime. For details, see our{' '}
                  <a href="#" className="underline hover:text-blue-700">Privacy Policy</a>.
                </p>
              </div>

              {/* Right: Email Input and Subscribe Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-blue-800 transition-colors duration-200 whitespace-nowrap"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 mb-8 lg:mb-12"></div>

          {/* Bottom Section: Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Know More */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">
                Know More
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#faqs" className="text-base text-blue-900 hover:text-blue-700 transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-base text-blue-900 hover:text-blue-700 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#impact" className="text-base text-blue-900 hover:text-blue-700 transition-colors">
                    Our Impact
                  </a>
                </li>
                <li className="pt-4">
                  <p className="text-base text-blue-900 mb-2">Write to us at:</p>
                  <a
                    href="mailto:mail@theflowclinic.org"
                    className="text-base text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    mail@theflowclinic.org
                  </a>
                </li>
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">
                Get Started
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#how-it-works" className="text-base text-blue-900 hover:text-blue-700 transition-colors">
                    How it works
                  </a>
                </li>
              </ul>
            </div>

            {/* Collaborate with us */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">
                Collaborate with us
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#why-partner" className="text-base text-blue-900 hover:text-blue-700 transition-colors">
                    Why partner with us
                  </a>
                </li>
                <li>
                  <a href="#recommend" className="text-base text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    Recommend us to your organisation
                  </a>
                </li>
                <li className="pt-4">
                  <p className="text-base text-blue-900 mb-2">Write to us at:</p>
                  <a
                    href="mailto:partner@theflowclinic.org"
                    className="text-base text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    partner@theflowclinic.org
                  </a>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-2">
                <li>
                  <p className="text-base text-blue-900 mb-2">Work with us:</p>
                  <a
                    href="mailto:careers@theflowclinic.org"
                    className="text-base text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    careers@theflowclinic.org
                  </a>
                </li>
                <li className="pt-4">
                  <p className="text-base text-blue-900 mb-2">Write to us with any other query.</p>
                  <a
                    href="#coordinates"
                    className="text-base text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Coordinates
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section - Dark Blue Background */}
      <div className="w-full py-8 sm:py-12 lg:py-16" style={{ backgroundColor: '#1A2E3B' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Logo, Links, Social Icons */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Logo and Text */}
            <div className="flex items-center gap-3">
              <img
                src={logo2}
                alt="The Flow Clinic Logo"
                className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
              />
              <span className="text-white text-lg sm:text-xl font-medium">
                The Flow Clinic
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base">
              <a href="#help" className="text-white hover:text-teal-300 transition-colors">
                Help
              </a>
              <a href="#terms" className="text-white hover:text-teal-300 transition-colors">
                Terms
              </a>
              <a href="#privacy" className="text-white hover:text-teal-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#client-terms" className="text-white hover:text-teal-300 transition-colors">
                Client Terms of Use
              </a>
              <a href="#accessibility" className="text-white hover:text-teal-300 transition-colors">
                Digital Accessibility Statement
              </a>
              <span className="text-white">@2025TheFlow</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Facebook */}
              <a
                href="#facebook"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-teal-300 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#1A2E3B' }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-teal-300 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#1A2E3B' }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#twitter"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:bg-teal-300 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#1A2E3B' }}>
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="border-t pt-8 lg:pt-12" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
              Disclaimer:
            </h3>
            <p className="text-base sm:text-lg text-white leading-relaxed mb-4">
              The Flow Clinic does not provide services for suicidal intent or self harm.
            </p>
            <p className="text-base sm:text-lg text-white leading-relaxed mb-6">
              If you or someone you know is experiencing thoughts of self-harm, suicide, or any other life-threatening situation, contact a helpline or go to the nearest hospital or emergency room having a Psychiatric wing. Having a close family member or friend with you for support can be invaluable during this time.
            </p>
            <p className="text-base sm:text-lg text-white leading-relaxed">
              For emergency mental health support, please call the National Tele MANAS helpline at{' '}
              <a href="tel:18008914416" className="underline hover:text-teal-300 transition-colors">
                1-800 891 4416
              </a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

