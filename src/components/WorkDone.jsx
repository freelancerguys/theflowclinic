import waterImage from '../assets/water.png'

const WorkDone = () => {
  const projects = [
    {
      year: '2025',
      title: 'UNICEF, Khoya Paya, 2025 (Maha Kumbh Mela)',
      description: 'Vartika Led The Khoya-Paya Psychological First Aid Initiative, Where We Delivered Psychological First Aid At The Lost & Found Booths; Trained And Supervised 27 Social Workers And State Level Teams In UNICEF.'
    },
    {
      year: '2021-22',
      title: 'UNICEF And Mukhya Mantri Bal Seva Yojna',
      description: 'As Part Of The Initiative, Vartika Collaborated With Peers And Designed Trauma-Informed Therapy Initiatives For Over 10,000 COVID-Orphaned Children In Uttar Pradesh. Trained And Supervised State-Level Teams To Help Make UP A Trauma-Informed State.'
    }
  ]

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative" style={{ backgroundColor: '#DFF6F9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 text-center mb-12 lg:mb-16">
          Work Done
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 lg:p-8 relative border-2 border-blue-900 shadow-md"
            >
              {/* Year Badge */}
              <div className="absolute top-4 left-4 bg-teal-500 rounded-lg px-3 py-1">
                <span className="text-white text-sm font-bold">{project.year}</span>
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Water Waves Illustration - Absolutely Positioned */}
      <div className="relative top-26 bottom-0 left-0 right-0 w-screen z-0">
        <img
          src={waterImage}
          alt="Water waves"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}

export default WorkDone

