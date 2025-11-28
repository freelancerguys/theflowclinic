const Philosophy = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#DFF6F9' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-800 text-center mb-8 lg:mb-12">
          Our Philosophy
        </h2>

        {/* First Paragraph with highlighted phrases */}
        <div className="mb-8 lg:mb-10">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed text-center">
            We believe mental health is about building a life rooted in{' '}
            <span className="text-teal-600 font-semibold">meaning, self-understanding and chosen values</span>.
            Our work combines{' '}
            <span className="text-teal-600 font-semibold">clinical rigour</span> with{' '}
            <span className="text-teal-600 font-semibold">cultural and contextual sensitivity</span>,
            supporting individuals and couples as well as systems in navigating{' '}
            <span className="text-teal-600 font-semibold">emotional wellbeing</span>.
          </p>
        </div>

        {/* Second Paragraph */}
        <div className="mb-10 lg:mb-12">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed text-center">
            Mental Health is an integral part of health and wellbeing. We believe that quality mental health services should be available to everyone who needs them.
          </p>
        </div>

        {/* Guiding Principles Header */}
        <div className="mb-8 lg:mb-10">
          <p className="text-xl sm:text-2xl md:text-3xl text-teal-600 font-semibold text-center">
            Our guiding principles are simple:
          </p>
        </div>

        {/* Guiding Principles List */}
        <div className="space-y-6 lg:space-y-8">
          {/* Principle 1 */}
          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
              <span className="text-teal-600 font-bold">Clarity before crisis</span>
              {' '}- equipping individuals and institutions with the vocabulary and tools to understand their inner worlds before problems spiral.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
              <span className="text-teal-600 font-bold">Fit matters</span>
              {' '}- every client, student, or school has unique needs, and success depends on finding the right therapist, approach, and format.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
              <span className="text-teal-600 font-bold">Partnership, not prescription</span>
              {' '}- we co-create interventions with individuals and communities rather than imposing one-size-fits-all solutions.
            </p>
          </div>

          {/* Principle 4 */}
          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
              <span className="text-teal-600 font-bold">Science with empathy</span>
              {' '}- we draw from evidence-based practices while keeping the lived realities of people front and center.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy

