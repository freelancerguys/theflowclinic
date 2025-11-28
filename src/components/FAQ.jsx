import { useState } from 'react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (section, index) => {
    const key = `${section}-${index}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const faqSections = [
    {
      title: 'For Individuals',
      items: [
        {
          question: 'What if I don\'t "click" with my therapist?',
          answer: 'Therapist-client fit is central to progress. If you don\'t feel safe, understood, or comfortable after a few sessions, we encourage you to bring it up. We\'ll help you switch therapists until you find the right match.'
        },
        {
          question: 'Do I need a diagnosis to start therapy?',
          answer: 'No. Therapy is not only for those with a clinical diagnosis. Many people come simply to build self-awareness, cope with stress, or navigate life transitions. While dealing with diagnostic treatments is also our work, therapy is not just for the ones suffering from disorders of the mind.'
        },
        {
          question: 'What kind of therapy do you use?',
          answer: 'We use different therapeutic modalities depending on what our client needs. Our therapists are trained in CBT, ACT, DBT, IFS and more. We use approaches that allow clients to engage with their emotions in safe, structured ways.'
        },
        {
          question: 'How long before I see results?',
          answer: 'Results vary for different goals. It depends what the client\'s goals are. For a disorder specific progress we can give an idea of the number of sessions once the initial evaluation is done. With regard to personal growth, that is a process in itself.'
        }
      ]
    },
    {
      title: 'For Schools & Institutions',
      items: [
        {
          question: 'Why should schools invest in mental health?',
          answer: 'Mental health impacts learning outcomes, attendance, and student wellbeing. Schools that invest in mental health create safer, more resilient environments where students, teachers and the whole school thrives.'
        },
        {
          question: 'What does a school partnership look like?',
          answer: 'We begin with a baseline study of your school\'s infrastructure, trust networks, and needs. Then, we co-design a hybrid delivery model that includes teacher and staff training, parent/guardian training, student workshops, and ongoing access to therapy services.'
        },
        {
          question: 'How do you ensure cultural fit?',
          answer: 'Our team works with teachers, parents, and local health workers to adapt language, examples, and delivery methods. We also build taxonomies, mental health explained in colloquial, accessible terms, so that inclusion is built into the system.'
        },
        {
          question: 'How much time will it take from students and teachers?',
          answer: 'Our programs are designed to integrate into school life, not disrupt it. Sessions are short, structured, and adapted to your calendar. Teachers are supported, not burdened. For specific details please reach out to mail@theflowclinic.org.'
        },
        {
          question: 'How do you measure success?',
          answer: 'We track both process indicators (participation, engagement, teacher feedback) and outcome indicators (student wellbeing markers, absenteeism, self-reported stress levels). This ensures accountability and continuous improvement.'
        }
      ]
    }
  ]

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#F4F6F7' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 text-center mb-12 lg:mb-16">
          FAQs
        </h2>

        {/* FAQ Sections */}
        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12 lg:mb-16">
            {/* Section Title - Centered */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-700 text-center mb-6 lg:mb-8">
              {section.title}
            </h3>

            {/* FAQ Items */}
            <div className="space-y-0">
              {section.items.map((item, itemIndex) => {
                const key = `${sectionIndex}-${itemIndex}`
                const isOpen = openItems[key]

                return (
                  <div
                    key={itemIndex}
                    className="border-b border-teal-500 last:border-b-0"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleItem(sectionIndex, itemIndex)}
                      className="w-full flex items-center justify-between py-4 lg:py-6 text-left transition-colors duration-200"
                    >
                      <span className="text-base sm:text-lg font-medium text-gray-900 pr-4">
                        {itemIndex + 1}. {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-600 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'transform rotate-90' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Answer */}
                    {isOpen && (
                      <div className="pb-4 lg:pb-6 pl-0 pr-12">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ

