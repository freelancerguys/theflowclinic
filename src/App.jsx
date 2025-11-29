import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WaveAnimation from './components/WaveAnimation'
import Philosophy from './components/Philosophy'
import WhyUs from './components/WhyUs'
import Clouds from './components/Clouds'
import WhatWeOffer from './components/WhatWeOffer'
import PastWork from './components/PastWork'
import Experts from './components/Experts'
import WorkDone from './components/WorkDone'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loader for 3 seconds on initial load
    const timeout = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="min-h-screen bg-white relative">
      {isLoading && <Loader />}

      <Navbar />
      <main className={`w-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <WaveAnimation />
        <Philosophy />
        <WhyUs />
        <Clouds />
        <WhatWeOffer />
        <PastWork />
        <Experts />
        <WorkDone />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
