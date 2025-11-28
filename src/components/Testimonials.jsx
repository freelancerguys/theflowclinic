import { useState } from 'react'

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const testimonials = [
    {
      name: 'Lorem Ipsum Dolor',
      title: 'Lorem Ipsum',
      rating: 4,
      quote: 'My experience with Vartika was extremely fulfilling. I was apprehensive about therapy because speaking to a stranger about my problems did not seem appealing to me. However, Vartika gave me the free space that I desperately needed....',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lorem Ipsum Dolor',
      title: 'Lorem Ipsum',
      rating: 4,
      quote: 'Vartika came highly recommended from a friend of mine who had seen her briefly for anxiety-related issues. I was dealing with various mental health issues at the time, including depression, anxiety and trauma. Over the course of our first....',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lorem Ipsum Dolor',
      title: 'Lorem Ipsum',
      rating: 4,
      quote: 'From the outset, my experience with Vartika has been satisfying. This is the first time I sought therapy and embarked on a journey of self awareness and overcoming depression, and there are countless ways in which Vartika has.....',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lorem Ipsum Dolor',
      title: 'Lorem Ipsum',
      rating: 5,
      quote: 'Working with Vartika has been a transformative experience. Her approach to therapy is both compassionate and professional. She helped me navigate through some of the most challenging periods of my life with grace and understanding....',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lorem Ipsum Dolor',
      title: 'Lorem Ipsum',
      rating: 4,
      quote: 'I cannot express enough gratitude for the support I received from Vartika. Her expertise in trauma-informed care made all the difference in my healing journey. The safe space she created allowed me to explore and process difficult emotions....',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lorem Ipsum Dolor',
      title: 'Lorem Ipsum',
      rating: 5,
      quote: 'Vartika is an exceptional therapist who truly understands the complexities of mental health. Her use of ACT and IFS approaches helped me develop better coping strategies and a deeper understanding of myself. I highly recommend her services....',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face'
    }
  ]

  const renderRating = (rating) => {
    return (
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className={star <= rating ? 'text-teal-500' : 'text-gray-300'}
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill={star <= rating ? 'currentColor' : 'none'}
              stroke={star <= rating ? 'currentColor' : 'currentColor'}
              strokeWidth="1.5"
            />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#F4F6F7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12 lg:mb-16">
          HERE'S WHAT OUR PAST CLIENTS
          <br />
          HAVE TO SAY ABOUT US
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {testimonials
            .slice((currentPage - 1) * 3, currentPage * 3)
            .map((testimonial, index) => (
            <div
              key={(currentPage - 1) * 3 + index}
              className="bg-blue-50 rounded-2xl p-6 lg:p-8 shadow-md"
            >
              {/* Profile Picture */}
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>

              {/* Name and Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-1">
                {testimonial.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center mb-4">
                {testimonial.title}
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {renderRating(testimonial.rating)}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Read More Button */}
              <button className="w-full bg-blue-50 border-2 border-teal-500 text-teal-500 rounded-lg py-2 px-4 font-medium hover:bg-teal-50 transition-colors duration-200">
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            disabled={currentPage === 1}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {[1, 2].map((page) => {
            const totalPages = Math.ceil(testimonials.length / 3)
            if (page > totalPages) return null
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            )
          })}

          <button
            onClick={() => setCurrentPage(Math.min(Math.ceil(testimonials.length / 3), currentPage + 1))}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            disabled={currentPage >= Math.ceil(testimonials.length / 3)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

