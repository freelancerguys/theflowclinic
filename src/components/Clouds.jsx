import cloudsImage from '../assets/clouds.svg'

const Clouds = () => {
  return (
    <section className="relative w-full -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 mb-0 overflow-hidden z-10">
      <div className="w-full">
        <img
          src={cloudsImage}
          alt="Clouds decoration"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}

export default Clouds

