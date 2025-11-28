import { useState } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'EXPERTS', href: '#experts' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT US', href: '#contact' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop & Mobile Header */}
      <header className="bg-white w-full relative z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-4 lg:py-2">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center">
              <a href="#home" className="cursor-pointer">
                <img 
                  src={logo} 
                  alt="The Flow Clinic Logo" 
                  className="h-28 w-28 lg:h-32 lg:w-32 object-contain hover:opacity-80 transition-opacity duration-200"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm xl:text-base font-sans uppercase tracking-[0.2em] text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-900 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            {/* Logo */}
            <div className="flex items-center">
              <a 
                href="#home" 
                className="cursor-pointer"
                onClick={closeMobileMenu}
              >
                <img 
                  src={logo} 
                  alt="The Flow Clinic Logo" 
                  className="h-28 w-28 object-contain hover:opacity-80 transition-opacity duration-200"
                />
              </a>
            </div>

            {/* Close Button */}
            <button
              className="p-2 text-gray-900 focus:outline-none"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="px-6 py-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between text-gray-700 uppercase tracking-[0.2em] font-sans font-medium text-sm py-2 hover:text-gray-900 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <span>{link.name}</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

