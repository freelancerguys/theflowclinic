import waterfallImage from '../assets/watterfall.png'

const PastWork = () => {
  const workItems = [
    {
      text: "Adults Dealing With Anxiety, Depression, Grief, Self-Esteem Issues, Trauma, Burnout, Relationship Conflict, And Identity Concerns",
      bgColor: "#FFFFFF",
      textColor: "text-blue-900",
      column: 1,
      row: 1
    },
    {
      text: "Couples Navigating Emotional And Physical Issues, Helping Them Build Effective Communication",
      bgColor: "#1E3A8A",
      textColor: "text-white",
      column: 1,
      row: 2
    },
    {
      text: "Communities Going Through The Aftermath Of COVID-19 Onslaught, Including Addressing Dysfunctional Grief And Trauma Among 10,000 Children In Uttar Pradesh",
      bgColor: "#F5F5DC",
      textColor: "text-blue-900",
      column: 2,
      row: "1-2",
      spanRows: true
    },
    {
      text: "Children And Adolescents With Special Abilities, Grief, Trauma, And Adjustment Issues With Their Peers.",
      bgColor: "#20B2AA",
      textColor: "text-white",
      column: 3,
      row: 1
    },
    {
      text: "Communities By Providing Psychological First Aid For People Who Were Lost And Later Found In The Maha Kumbh Mela, Prayagraj, In 2025.",
      bgColor: "#B2E4E6",
      textColor: "#333333",
      column: 3,
      row: 2
    }
  ]

  return (
    <section className="w-full" style={{ backgroundColor: '#DFF6F9' }}>
      {/* Waterfall Illustration */}
      <div className="right-0 w-full mb-8 lg:mb-12 overflow-hidden">
        <img
          src={waterfallImage}
          alt="Waterfall illustration"
          className="relative w-full h-auto object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 text-center mb-4">
          PAST WORK
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-900 text-center mb-12 lg:mb-16">
          We've Supported Clients Across A Range Of Concerns Including
        </p>

        {/* Content Cards Grid - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Column 1 - Left */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {workItems
              .filter(item => item.column === 1)
              .sort((a, b) => a.row - b.row)
              .map((item, index) => (
                <div
                  key={`col1-${index}`}
                  className="rounded-2xl p-6 lg:p-8 shadow-md"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <p className={`text-sm sm:text-base lg:text-lg leading-relaxed ${item.textColor}`}>
                    {item.text}
                  </p>
                </div>
              ))}
          </div>

          {/* Column 2 - Middle (Full Height Box) */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {workItems
              .filter(item => item.column === 2)
              .map((item, index) => (
                <div
                  key={`col2-${index}`}
                  className={`rounded-2xl p-6 lg:p-8 shadow-md ${
                    item.spanRows ? 'flex-1' : ''
                  }`}
                  style={{ backgroundColor: item.bgColor }}
                >
                  <p className={`text-sm sm:text-base lg:text-lg leading-relaxed ${item.textColor}`}>
                    {item.text}
                  </p>
                </div>
              ))}
          </div>

          {/* Column 3 - Right */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {workItems
              .filter(item => item.column === 3)
              .sort((a, b) => a.row - b.row)
              .map((item, index) => (
                <div
                  key={`col3-${index}`}
                  className="rounded-2xl p-6 lg:p-8 shadow-md"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <p className={`text-sm sm:text-base lg:text-lg leading-relaxed ${item.textColor}`}>
                    {item.text}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PastWork

