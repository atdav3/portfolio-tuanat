import { info } from "../../../utils/info";

const About = ({ theme }) => {
  return (
    <>
      <style jsx>{`
        /* Mobile Optimizations */
        @media (max-width: 640px) {
          /* Improve touch targets */
          a {
            min-height: 44px;
            display: inline-flex;
            align-items: center;
          }
          
          /* Smooth scrolling on mobile */
          * {
            -webkit-overflow-scrolling: touch;
          }
          
          /* Better text rendering on mobile */
          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }
        
        /* Touch manipulation for better mobile performance */
        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
      <section
        id="about"
        className={`relative py-8 sm:py-12 md:py-16 lg:py-24 min-h-screen ${
          theme === "dark" ? "bg-gray-900/50" : "bg-gray-200"
        }`}
      >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 ${
              theme === "dark"
                ? "text-white drop-shadow-lg"
                : "text-gray-900 drop-shadow-lg"
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-12 sm:w-16 md:w-24 h-0.5 sm:h-1 mx-auto rounded-full ${
              theme === "dark" ? "bg-blue-400" : "bg-blue-600"
            }`}
          />
        </div>

        {/* Main Content Grid - Mobile First */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {/* Hero Section - Mobile Optimized */}
          <div className={`rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-200/20' 
              : 'bg-gradient-to-br from-white to-gray-50 border border-blue-300/40'
          }`}>
            <div className="text-center">
              <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Hi 👋, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Trần Anh Tuấn</span>
              </h1>
              <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Fullstack Developer from Hanoi Capital Region, Vietnam 🇻🇳
              </h3>
            </div>
          </div>

          {/* Grid Layout for Information Cards - Mobile Optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
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

            {/* Contact Information - Mobile Optimized */}
            <InfoCard 
              theme={theme}
              title="📞 Contact Information"
              gradient="from-indigo-50/10 to-blue-50/10"
              borderColor="border-indigo-200/20"
            >
              <div className="space-y-2.5 sm:space-y-2">
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2">
                  <span className="text-base sm:text-lg">📱</span>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                    <strong className="text-blue-500 text-xs sm:text-sm md:text-base">Phone:</strong>
                    <a 
                      href="tel:+84393225719" 
                      className="text-blue-500 hover:text-blue-400 active:text-blue-600 transition-colors break-all text-xs sm:text-sm md:text-base py-1 px-1 -mx-1 rounded touch-manipulation"
                    >
                      +84 393 225 719
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2">
                  <span className="text-base sm:text-lg">✉️</span>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                    <strong className="text-blue-500 text-xs sm:text-sm md:text-base">Email:</strong>
                    <a 
                      href="mailto:davetranxx@gmail.com" 
                      className="text-blue-500 hover:text-blue-400 active:text-blue-600 transition-colors break-all text-xs sm:text-sm md:text-base py-1 px-1 -mx-1 rounded touch-manipulation"
                    >
                      davetranxx@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-300/20 dark:border-gray-700/20">
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  🌐 <strong>Connect with me:</strong> Check out all my social platforms in the dock! 
                  <span className="text-blue-500 block sm:inline mt-1 sm:mt-0"> → Click the dock icon at the bottom</span>
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

            {/* Languages and Tools - Mobile Optimized */}
            <InfoCard 
              theme={theme}
              title="🛠️ Languages and Tools"
              gradient="from-teal-50/10 to-cyan-50/10"
              borderColor="border-teal-200/20"
              fullWidth
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="pb-1 sm:pb-0">
                  <p className="leading-relaxed"><strong className="text-blue-500">Programming:</strong> C++, Python, JavaScript</p>
                </div>
                <div className="pb-1 sm:pb-0">
                  <p className="leading-relaxed"><strong className="text-cyan-500">Web Development:</strong> React, Node.js, HTML/CSS, Next.js</p>
                </div>
                <div className="pb-1 sm:pb-0">
                  <p className="leading-relaxed"><strong className="text-green-500">Database:</strong> MongoDB, MySQL</p>
                </div>
                <div>
                  <p className="leading-relaxed"><strong className="text-orange-500">Game Development:</strong> Unity</p>
                </div>
              </div>
            </InfoCard>

            {/* GitHub Activity - Mobile Optimized */}
            <InfoCard 
              theme={theme}
              title="📊 GitHub Activity"
              gradient="from-violet-50/10 to-purple-50/10"
              borderColor="border-violet-200/20"
            >
              <p className={`mb-2 sm:mb-3 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Check out my GitHub profile for detailed stats and activity graphs!
              </p>
              <a 
                href={info.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:text-blue-400 active:text-blue-600 transition-colors font-semibold inline-block py-1 px-2 -mx-2 rounded touch-manipulation text-xs sm:text-sm md:text-base"
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
    </>
  );
}

// Reusable Info Card Component - Mobile Optimized
function InfoCard({ theme, title, gradient, borderColor, fullWidth = false, children }) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 border ${borderColor} ${
      fullWidth ? 'md:col-span-2 lg:col-span-3' : ''
    } ${
      theme === 'dark' 
        ? 'bg-slate-800/50' 
        : 'bg-white/50'
    } shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98] touch-manipulation`}>
      <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 leading-tight ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h3>
      <div className={`text-xs sm:text-sm md:text-base space-y-1.5 sm:space-y-2 leading-relaxed ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {children}
      </div>
    </div>
  );
}

export default About;
