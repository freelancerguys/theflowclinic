import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#F4F6F7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container with border */}
        <div className="rounded-2xl border-2 border-blue-900 p-6 lg:p-8 xl:p-12" style={{ backgroundColor: '#F4F6F7' }}>
          <div className="rounded-xl p-6 lg:p-8 xl:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Information */}
          <div>
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6 lg:mb-8">
              Get in touch with us
            </h2>

            {/* Introductory Text */}
            <p className="text-base sm:text-lg text-gray-700 mb-8 lg:mb-10 leading-relaxed">
              We'd love to hear from you. Whether you have feedback, need technical support, or just want to share your thoughts, our team is here to listen. At The Flow, your voice helps us create a space that truly supports your mental well-being.
            </p>

            {/* Chat with us */}
            <div className="mb-6 lg:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Chat with us
              </h3>
              <a
                href="mailto:mail@theflowclinic.org"
                className="text-base sm:text-lg text-gray-700 underline hover:text-blue-900 transition-colors"
              >
                mail@theflowclinic.org
              </a>
            </div>

            {/* Call us */}
            <div className="mb-6 lg:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Call us
              </h3>
              <a
                href="tel:+918882609559"
                className="text-base sm:text-lg text-gray-700 hover:text-blue-900 transition-colors"
              >
                +91 8882609559
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Hours
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                Monday - Saturday
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                10 am - 7 pm
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-[#F5F5DC] rounded-2xl p-6 lg:p-8 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

