import logo from '../assets/logo2.svg'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-[#016A78] via-[#028FA3] to-[#E0F7FA]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          {/* Soft glow behind logo */}
          <div className="absolute inset-0 rounded-full bg-teal-500/40 blur-2xl" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#014057] shadow-2xl border border-white/60 flex items-center justify-center">
            <img
              src={logo}
              alt="The Flow Clinic logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 animate-logo-pulse drop-shadow-[0_0_12px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
        <p className="text-white/90 text-sm sm:text-base tracking-[0.25em] uppercase">
          Loading
        </p>
      </div>
    </div>
  )
}

export default Loader


