import { info } from "../../../utils/info";

const About = ({ theme }) => {
  return (
    <section
      id="about"
      className={`relative py-12 md:py-16 lg:py-24 min-h-screen ${
        theme === "dark" ? "bg-gray-900/50" : "bg-gray-200"
      }`}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${
              theme === "dark"
                ? "text-white drop-shadow-lg"
                : "text-gray-900 drop-shadow-lg"
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-16 sm:w-24 h-1 mx-auto rounded-full ${
              theme === "dark" ? "bg-blue-400" : "bg-blue-600"
            }`}
          />
        </div>

        {/* Main Content Grid */}
        <div className="space-y-6 md:space-y-8">
          {/* Hero Section */}
          <div className={`rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-200/20' 
              : 'bg-gradient-to-br from-white to-gray-50 border border-blue-300/40'
          }`}>
            <div className="text-center">
              <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Hi 👋, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Trần Anh Tuấn</span>
              </h1>
              <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Fullstack Developer from Hanoi Capital Region, Vietnam 🇻🇳
              </h3>
            </div>
          </div>

          {/* Grid Layout for Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Location & Work */}
            <InfoCard 
              theme={theme}
              title="📍 Location & Work"
              gradient="from-blue-50/10 to-cyan-50/10"
              borderColor="border-blue-200/20"
            >
              <p className="mb-2">
                <strong className="text-blue-500">Location:</strong> Hanoi Capital Region
              </p>
              <p>
                <strong className="text-blue-500">Work Style:</strong> Online with English-speaking teams & offline with local Vietnamese companies
              </p>
            </InfoCard>

            {/* Education */}
            <InfoCard 
              theme={theme}
              title="🎓 Education"
              gradient="from-purple-50/10 to-blue-50/10"
              borderColor="border-purple-200/20"
            >
              <p className="mb-2">
                <strong className="text-purple-500">Current Study:</strong> East Asia University of Technology
              </p>
              <p>
                <strong className="text-purple-500">Coding Journey:</strong> Started coding in 2022 while studying at EAUT
              </p>
            </InfoCard>

            {/* Tech Passion */}
            <InfoCard 
              theme={theme}
              title="💻 Tech Passion"
              gradient="from-green-50/10 to-blue-50/10"
              borderColor="border-green-200/20"
            >
              <p className="mb-2">
                <strong className="text-green-500">Tech Passion:</strong> Love all kinds of technology - both hardware & software
              </p>
              <p>
                <strong className="text-green-500">Main Focus:</strong> Web development with full-stack capabilities from freelance & indie development experience
              </p>
            </InfoCard>

            {/* Personality & Goals */}
            <InfoCard 
              theme={theme}
              title="🚀 Personality & Goals"
              gradient="from-orange-50/10 to-red-50/10"
              borderColor="border-orange-200/20"
              fullWidth
            >
              <p className="mb-2">
                <strong className="text-orange-500">Serious about:</strong> Building startups & working in professional environments
              </p>
              <p className="mb-2">
                <strong className="text-orange-500">Personality:</strong> Creative, friendly, challenge-oriented & always eager to learn
              </p>
              <p>
                <strong className="text-orange-500">Always seeking:</strong> New ideas in business & technology
              </p>
            </InfoCard>

            {/* Contact Information */}
            <InfoCard 
              theme={theme}
              title="📞 Contact Information"
              gradient="from-indigo-50/10 to-blue-50/10"
              borderColor="border-indigo-200/20"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span>📱</span>
                  <strong className="text-blue-500">Phone:</strong>
                  <a href="tel:+84393225719" className="text-blue-500 hover:text-blue-400 transition-colors break-all">
                    +84 393 225 719
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span>✉️</span>
                  <strong className="text-blue-500">Email:</strong>
                  <a href="mailto:davetranxx@gmail.com" className="text-blue-500 hover:text-blue-400 transition-colors break-all">
                    davetranxx@gmail.com
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-300/20 dark:border-gray-700/20">
                <p className={`text-xs sm:text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  🌐 <strong>Connect with me:</strong> Check out all my social platforms in the dock! 
                  <span className="text-blue-500"> → Click the dock icon at the bottom</span>
                </p>
              </div>
            </InfoCard>

            {/* Current Projects */}
            <InfoCard 
              theme={theme}
              title="🔭 Current Projects"
              gradient="from-pink-50/10 to-purple-50/10"
              borderColor="border-pink-200/20"
            >
              <div className="space-y-2">
                <p><span className="text-blue-500 font-semibold">• Bookstore Manager:</span> Book rental website</p>
                <p><span className="text-purple-500 font-semibold">• HomeStay Manager:</span> Rental room management</p>
                <p><span className="text-purple-500 font-semibold">• Weather App:</span> Application weather forecast</p>
              </div>
            </InfoCard>

            {/* Languages and Tools */}
            <InfoCard 
              theme={theme}
              title="🛠️ Languages and Tools"
              gradient="from-teal-50/10 to-cyan-50/10"
              borderColor="border-teal-200/20"
              fullWidth
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p><strong className="text-blue-500">Programming:</strong> C++, Python, JavaScript</p>
                </div>
                <div>
                  <p><strong className="text-cyan-500">Web Development:</strong> React, Node.js, HTML/CSS, Next.js</p>
                </div>
                <div>
                  <p><strong className="text-green-500">Database:</strong> MongoDB, MySQL</p>
                </div>
                <div>
                  <p><strong className="text-orange-500">Game Development:</strong> Unity</p>
                </div>
              </div>
            </InfoCard>

            {/* GitHub Activity */}
            <InfoCard 
              theme={theme}
              title="📊 GitHub Activity"
              gradient="from-violet-50/10 to-purple-50/10"
              borderColor="border-violet-200/20"
            >
              <p className={`mb-3 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Check out my GitHub profile for detailed stats and activity graphs!
              </p>
              <a 
                href={info.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:text-blue-400 transition-colors font-semibold inline-block"
              >
                🔗 @{info.githubUsername}
              </a>
            </InfoCard>

            {/* Fun Fact */}
            <InfoCard 
              theme={theme}
              title="⚡ Fun Fact"
              gradient="from-yellow-50/10 to-orange-50/10"
              borderColor="border-yellow-200/20"
              fullWidth
            >
              <p className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <strong className="text-yellow-500">I think I am funny!</strong> I'm the kind of person who embraces learning and tackling anything new with passion and determination. As long as it sparks my interest, I am fearless and unstoppable. 🚀
              </p>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Info Card Component
function InfoCard({ theme, title, gradient, borderColor, fullWidth = false, children }) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-4 md:p-5 lg:p-6 border ${borderColor} ${
      fullWidth ? 'md:col-span-2 lg:col-span-3' : ''
    } ${
      theme === 'dark' 
        ? 'bg-slate-800/50' 
        : 'bg-white/50'
    } shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      <h3 className={`text-base sm:text-lg md:text-xl font-semibold mb-3 md:mb-4 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h3>
      <div className={`text-sm sm:text-base space-y-2 ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {children}
      </div>
    </div>
  );
}

export default About;
