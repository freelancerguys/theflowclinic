import { useState } from 'react'
import coupleFamilyTherapyImage from '../assets/whatweoffer/CoupleandFamilyTherapy.png'
import individualPsychotherapyImage from '../assets/whatweoffer/IndividualPsychotherapy.png'
import corporateMentalHealthImage from '../assets/whatweoffer/Corporate Mental Health Programs.jpg'
import studentMentalHealthImage from '../assets/whatweoffer/Student Mental Health.png'
import childAdolescentMentalHealthImage from '../assets/whatweoffer/Child & Adolescent Mental Health.png'
import communityMentalHealthImage from '../assets/whatweoffer/Community Mental Health.png'

const WhatWeOffer = () => {
  const [expandedService, setExpandedService] = useState(null)
  const [expandedInstitution, setExpandedInstitution] = useState(null)

  const services = [
    {
      title: 'Couple and Family Therapy',
      image: coupleFamilyTherapyImage,
      description: 'Work together to strengthen relationships and improve communication within your family unit.',
      detailedText: 'Through trained and accredited therapists, we help your family navigate conflict, strengthen communication, and carry forth in a healthy way.'
    },
    {
      title: 'Individual Psychotherapy',
      image: individualPsychotherapyImage,
      description: 'Personalized one-on-one therapy sessions tailored to your unique needs and goals.',
      detailedText: 'We provide you with space to pause, reflect, and work through thoughts and feelings with guidance you can trust.'
    }
  ]

  const institutions = [
    {
      title: 'Corporate Mental Health Programs',
      image: corporateMentalHealthImage,
      description: 'Comprehensive mental health support for your workforce.',
      detailedText: 'We provide tailored mental health programs designed to support employee wellbeing, reduce stress, and create a healthier workplace environment.'
    },
    {
      title: 'Student Mental Health',
      image: studentMentalHealthImage,
      description: 'Supporting students through their academic journey.',
      detailedText: 'Our student mental health services provide counseling, support groups, and resources to help students navigate academic pressures and personal challenges.'
    },
    {
      title: 'Child & Adolescent Mental Health',
      image: childAdolescentMentalHealthImage,
      description: 'Specialized care for young minds.',
      detailedText: 'We offer age-appropriate therapy and support services for children and adolescents, helping them develop healthy coping strategies and emotional resilience.'
    },
    {
      title: 'Community Mental Health',
      image: communityMentalHealthImage,
      description: 'Building stronger, healthier communities.',
      detailedText: 'Our community mental health programs provide accessible support services, group therapy, and resources to strengthen community wellbeing and resilience.'
    }
  ]


  const handleCardClick = (index) => {
    if (expandedService === index) {
      setExpandedService(null)
    } else {
      setExpandedService(index)
    }
  }

  const handleInstitutionClick = (index) => {
    if (expandedInstitution === index) {
      setExpandedInstitution(null)
    } else {
      setExpandedInstitution(index)
    }
  }

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 text-center mb-4">
          WHAT WE OFFER
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-900 text-center mb-12 lg:mb-16">
          For Individuals
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg flex flex-col ${
                expandedService === index
                  ? ''
                  : expandedService === null
                  ? 'hover:shadow-xl hover:scale-105'
                  : ''
              }`}
              style={{
                backgroundColor: expandedService === index ? 'white' : 'transparent',
                height: expandedService === index 
                  ? 'auto'
                  : expandedService === null
                  ? '500px'
                  : '500px',
                transition: expandedService === index 
                  ? 'background-color 1500ms ease-in-out 3000ms, transform 1200ms ease-in-out 3000ms, box-shadow 1200ms ease-in-out 3000ms, height 1200ms ease-in-out 3000ms'
                  : expandedService !== null
                  ? 'height 1200ms ease-in-out 3000ms, transform 300ms ease-in-out, box-shadow 300ms ease-in-out'
                  : 'transform 300ms ease-in-out, box-shadow 300ms ease-in-out'
              }}
            >
              {expandedService === index ? (
                /* Expanded State - Image Left, Text Right */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[400px] lg:min-h-[500px] flex-1">
                  {/* Image on Left */}
                  <div className="relative h-full min-h-[300px] lg:min-h-[400px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-[1200ms] ease-in-out delay-[3000ms]"
                    />
                  </div>

                  {/* Text on Right */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center bg-white h-full">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ease-in-out delay-[3300ms]">
                      {service.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed transition-all duration-1000 ease-in-out delay-[3500ms]">
                      {service.detailedText}
                    </p>
                  </div>
                </div>
              ) : (
                /* Normal State - Image with Overlay - Fixed height for consistency */
                <div className="relative h-full w-full">
                  {/* Image */}
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-teal-600 via-teal-500/50 to-transparent"></div>
                  </div>

                  {/* Text Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* For Institutions Section */}
        <div className="mt-20 lg:mt-32">
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-900 text-center mb-12 lg:mb-16">
            For Institutions
          </p>

          {/* Institution Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-stretch">
            {institutions.map((institution, index) => (
              <div
                key={index}
                onClick={() => handleInstitutionClick(index)}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg flex flex-col ${
                  expandedInstitution === index
                    ? 'sm:col-span-2 lg:col-span-2'
                    : expandedInstitution === null
                    ? 'hover:shadow-xl hover:scale-105'
                    : ''
                }`}
                style={{
                  backgroundColor: expandedInstitution === index ? 'white' : 'transparent',
                  transition: expandedInstitution === index 
                    ? 'background-color 1500ms ease-in-out 3000ms, transform 1500ms ease-in-out 3000ms, box-shadow 1500ms ease-in-out 3000ms, height 1500ms ease-in-out 3000ms'
                    : expandedInstitution !== null
                    ? 'height 1500ms ease-in-out 3000ms, transform 300ms ease-in-out, box-shadow 300ms ease-in-out'
                    : 'transform 300ms ease-in-out, box-shadow 300ms ease-in-out'
                }}
              >
                {expandedInstitution === index ? (
                  /* Expanded State - Text Left, Image Right */
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[400px] lg:min-h-[500px] flex-1">
                    {/* Text on Left */}
                    <div className="p-6 lg:p-8 flex flex-col justify-center bg-white h-full">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-[1200ms] ease-in-out delay-[3300ms]">
                        {institution.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed transition-all duration-[1200ms] ease-in-out delay-[3500ms]">
                        {institution.detailedText}
                      </p>
                    </div>

                    {/* Image on Right */}
                    <div className="relative h-full min-h-[300px] lg:min-h-[400px] overflow-hidden">
                      <img
                        src={institution.image}
                        alt={institution.title}
                        className="w-full h-full object-cover transition-all duration-[1500ms] ease-in-out delay-[3000ms]"
                      />
                    </div>
                  </div>
                ) : (
                  /* Normal State - Image with Overlay - Expands to match expanded card height */
                  <div className="relative h-full flex-1" style={{
                    minHeight: expandedInstitution !== null ? '400px' : 'auto',
                    transition: 'min-height 1500ms ease-in-out 3000ms'
                  }}>
                    {/* Image */}
                    <div className="relative h-full min-h-[192px] sm:min-h-[256px] lg:min-h-[320px] overflow-hidden">
                      <img
                        src={institution.image}
                        alt={institution.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Teal Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#016A78]/70 via-[#016A78]/40 to-transparent"></div>
                    </div>

                    {/* Text Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                        {institution.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer

