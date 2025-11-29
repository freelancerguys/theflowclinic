const Experts = () => {
  const experts = [
    {
      name: 'VARTIKA MODI',
      title: 'CHIEF CLINICAL PSYCHOLOGIST',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
      bio: [
        'A Clinical Psychologist and Psychotherapist with over a decade of experience. She holds an MPhil in Clinical Psychology from PGIMER, Dr. RML Hospital, and is licensed by the Rehabilitation Council of India (RCI).',
        'Her approach is rooted in Acceptance and Commitment Therapy (ACT), Internal Family Systems (IFS), and trauma-informed care. Whether working with individuals or institutions, she believes mental health is shaped not just by thoughts or feelings, but by how we relate to them and the context around us.'
      ]
    }
  ]

  return (
    <section
      id="experts"
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: '#DFF6F9' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left Section - Image */}
              <div className="relative h-64 md:h-auto bg-gray-100">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Section - Text */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {expert.name}
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-6">
                  {expert.title}
                </p>
                <div className="space-y-4">
                  {expert.bio.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-sm sm:text-base text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experts

