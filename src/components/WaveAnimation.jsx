import { useEffect, useRef } from 'react'
import boatImage from '../assets/boat/boat.svg'

const WaveAnimation = () => {
  const wave1Ref = useRef(null)
  const wave2Ref = useRef(null)
  const wave3Ref = useRef(null)
  const wave4Ref = useRef(null)
  const wave1FlippedRef = useRef(null)
  const wave2FlippedRef = useRef(null)
  const wave3FlippedRef = useRef(null)
  const wave4FlippedRef = useRef(null)
  const boatRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    // Create smooth infinite wave animations
    const animateWave = (element, duration, delay = 0, reverse = false) => {
      if (!element) return
      
      const keyframes = reverse
        ? [
            { transform: 'translateX(-50%) scaleX(-1)' },
            { transform: 'translateX(0) scaleX(-1)' }
          ]
        : [
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50%)' }
          ]
      
      const options = {
        duration: duration,
        iterations: Infinity,
        easing: 'linear',
        delay: delay
      }
      
      element.animate(keyframes, options)
    }

    // Animate each wave layer with different speeds for depth effect
    if (wave1Ref.current) animateWave(wave1Ref.current, 20000, 0, false)
    if (wave2Ref.current) animateWave(wave2Ref.current, 25000, 2000, false)
    if (wave3Ref.current) animateWave(wave3Ref.current, 30000, 4000, false)
    if (wave4Ref.current) animateWave(wave4Ref.current, 35000, 6000, false)
    
    // Animate flipped wave layers (moving in opposite direction)
    if (wave1FlippedRef.current) animateWave(wave1FlippedRef.current, 20000, 1000, true)
    if (wave2FlippedRef.current) animateWave(wave2FlippedRef.current, 25000, 3000, true)
    if (wave3FlippedRef.current) animateWave(wave3FlippedRef.current, 30000, 5000, true)
    if (wave4FlippedRef.current) animateWave(wave4FlippedRef.current, 35000, 7000, true)

    // Smooth infinite loop boat animation from right to left with wiggle
    const animateBoat = (element) => {
      if (!element) return
      
      // Main horizontal movement from just outside the right edge to just outside the left edge
      // so that the reset of the loop happens fully off‑screen and looks seamless.
      const horizontalKeyframes = [
        { transform: 'translateX(120vw)' },
        { transform: 'translateX(-120vw)' }
      ]
      
      const horizontalOptions = {
        // Increase duration for slower, smoother movement
        duration: 45000, // 45 seconds
        iterations: Infinity,
        // Linear keeps the motion constant and very smooth across the screen
        easing: 'linear'
      }
      
      // Apply horizontal animation to the wrapper div
      element.animate(horizontalKeyframes, horizontalOptions)
      
      // Wiggle animation on the inner image (handled by CSS animation)
      // The CSS animation 'boatWiggle' is applied via className
    }

    if (boatRef.current) animateBoat(boatRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden -mt-48 sm:-mt-40 md:-mt-48 lg:-mt-56" style={{ backgroundColor: 'transparent', height: '250px', zIndex: 10 }}>
      {/* Wave Layers - from bottom to top */}
      {/* Wave 4 - Bottom layer (darkest teal) - BEHIND BOAT */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full z-50" ref={wave4Ref}>
        <svg 
          viewBox="0 0 2400 200" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path
            d="M0,150 Q300,100 600,150 T1200,150 T1800,150 T2400,150 L2400,200 L0,200 Z"
            fill="#016A78"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Boat - positioned in front layer, animating from right to left with wiggle */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 100, height: '100%' }}>
        <div 
          ref={boatRef}
          className="absolute"
          style={{ 
            bottom: '2rem',
            transform: 'translateX(100vw)'
          }}
        >
          <img 
            src={boatImage} 
            alt="Boat" 
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
            style={{ 
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
              // Slower, gentler bobbing
              animation: 'boatWiggle 4s ease-in-out infinite'
            }}
            onError={(e) => {
              console.error('Boat image failed to load')
              console.error('Image path:', boatImage)
              e.target.style.display = 'none'
            }}
          />
        </div>
      </div>

      {/* Wave 3 - Third layer (darker teal) - IN FRONT OF BOAT */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full z-70" ref={wave3Ref}>
        <svg 
          viewBox="0 0 2400 200" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path
            d="M0,120 Q300,80 600,120 T1200,120 T1800,120 T2400,120 L2400,200 L0,200 Z"
            fill="#018A9A"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Wave 2 - Second layer (medium teal) - IN FRONT OF BOAT */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full z-80" ref={wave2Ref}>
        <svg 
          viewBox="0 0 2400 200" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path
            d="M0,90 Q300,50 600,90 T1200,90 T1800,90 T2400,90 L2400,200 L0,200 Z"
            fill="#02C4DE80"
          />
        </svg>
      </div>

      {/* Wave 1 - Top layer (lightest teal) - Not used, keeping for potential future use */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full z-30" ref={wave1Ref} style={{ display: 'none' }}>
        <svg 
          viewBox="0 0 2400 200" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path
            d="M0,60 Q300,20 600,60 T1200,60 T1800,60 T2400,60 L2400,200 L0,200 Z"
            fill="#01C0D0"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Horizontally Flipped Wave Layers - moving in opposite direction */}
      {/* Wave 4 Flipped - Bottom layer (darkest teal) */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full z-45" ref={wave4FlippedRef}>
        <svg 
          viewBox="0 0 2400 200" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path
            d="M0,150 Q300,100 600,150 T1200,150 T1800,150 T2400,150 L2400,200 L0,200 Z"
            fill="#016A78"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Wave 3 Flipped - Third layer (darker teal) */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full z-65" ref={wave3FlippedRef}>
        <svg 
          viewBox="0 0 2400 200" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path
            d="M0,120 Q300,80 600,120 T1200,120 T1800,120 T2400,120 L2400,200 L0,200 Z"
            fill="#018A9A"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Wave 2 Flipped - Second layer (medium teal) */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full z-75" ref={wave2FlippedRef}>
        <svg 
          viewBox="0 0 2400 200" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path
            d="M0,90 Q300,50 600,90 T1200,90 T1800,90 T2400,90 L2400,200 L0,200 Z"
            fill="#02C4DE80"
          />
        </svg>
      </div>
    </section>
  )
}

export default WaveAnimation

