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
import ScrollToTopButton from './components/ScrollToTopButton'
import './App.css'

function App() {
  const [isMinTimeDone, setIsMinTimeDone] = useState(false)
  const [isAppReady, setIsAppReady] = useState(false)

  useEffect(() => {
    // Ensure loader is shown for at least 3 seconds
    const timeout = setTimeout(() => setIsMinTimeDone(true), 3000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    // Mark app as ready when the window 'load' event fires
    const handleLoad = () => {
      setIsAppReady(true)
    }

    if (document.readyState === 'complete') {
      // If already loaded, mark as ready immediately
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  const isLoading = !(isMinTimeDone && isAppReady)

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
      <ScrollToTopButton />
    </div>
  )
}

export default App
