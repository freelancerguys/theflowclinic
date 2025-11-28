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
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="w-full">
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
