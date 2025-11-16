import { info } from "../../../utils/info";

const About = ({ theme }) => {
  return (
    <>
      <style jsx>{`
        /* Scroll text mượt vô tận */
        @keyframes scrollTextInfinite {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        /* Scroll line nền đồng bộ */
        @keyframes scrollLinesInfinite {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 0 -200px, 0 -200px;
          }
        }

        .scrolling-text {
          animation: scrollTextInfinite 23.5s linear infinite;
        }

        .lined-background {
          position: relative;
          background-image: 
            repeating-linear-gradient(
              to bottom,
              ${theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(59, 130, 246, 0.15)'} 0px,
              ${theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(59, 130, 246, 0.15)'} 1px,
              transparent 1px,
              transparent 20px
            ),
            repeating-linear-gradient(
              to bottom,
              ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(59, 130, 246, 0.25)'} 0px,
              ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(59, 130, 246, 0.25)'} 1px,
              transparent 1px,
              transparent 100px
            );
          background-size: 100% 20px, 100% 100px;
          animation: scrollLinesInfinite 2.85s linear infinite;
        }

        /* Hover: pause cả text và line */
        .group:hover .scrolling-text,
        .group:hover .lined-background {
          animation-play-state: paused;
        }

        /* Custom scrollbar for content area */
        .scroll-area {
          scrollbar-width: thin; /* Firefox */
          scrollbar-color: ${theme === 'dark' ? '#4b5563 #111827' : '#9ca3af #e5e7eb'}; /* thumb track */
        }
        .scroll-area::-webkit-scrollbar { /* Chrome/Safari */
          width: 8px;
        }
        .scroll-area::-webkit-scrollbar-track {
          background: ${theme === 'dark' ? '#111827' : '#e5e7eb'};
          border-radius: 8px;
        }
        .scroll-area::-webkit-scrollbar-thumb {
          background-color: ${theme === 'dark' ? '#4b5563' : '#9ca3af'};
          border-radius: 8px;
        }
      `}</style>

      <section
        id="about"
        className={`relative py-24 min-h-screen ${
          theme === "dark" ? "bg-gray-900/50" : "bg-gray-200"
        }`}
      >
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                theme === "dark"
                  ? "text-white drop-shadow-lg"
                  : "text-gray-900 drop-shadow-lg"
              }`}
            >
              About Me
            </h2>
            <div
              className={`w-24 h-1 mx-auto rounded-full ${
                theme === "dark" ? "bg-blue-400" : "bg-blue-600"
              }`}
            />
          </div>

          <div className="flex justify-center">
            {/* Scrolling Card */}
            <div className={`relative w-full max-w-7xl mx-auto h-[100vh] sm:h-[100vh] rounded-lg shadow-2xl border overflow-hidden group ${
              theme === 'dark' 
                ? 'bg-slate-800 border-blue-200/20' 
                : 'bg-white border-blue-300/40'
            }`}>
              {/* Top Scroll Bar */}
              <div className={`absolute top-0 left-0 right-0 h-8 border-b flex items-center justify-center z-10 ${
                theme === 'dark' 
                  ? 'bg-blue-950 border-blue-700/50' 
                  : 'bg-blue-100 border-blue-300/50'
              }`}>
                <div className={`w-24 h-3 rounded-full shadow-inner border ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-400 to-blue-300 border-blue-200/30'
                    : 'bg-gradient-to-r from-blue-500 to-blue-400 border-blue-300/50'
                }`}></div>
                <div className={`absolute left-3 right-3 top-1/2 transform -translate-y-1/2 h-0.5 rounded-full ${
                  theme === 'dark' ? 'bg-blue-600/40' : 'bg-blue-500/60'
                }`}></div>
              </div>

              {/* Bottom Scroll Bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-8 border-t flex items-center justify-center z-10 ${
                theme === 'dark' 
                  ? 'bg-blue-950 border-blue-700/50' 
                  : 'bg-blue-100 border-blue-300/50'
              }`}>
                <div className={`w-24 h-3 rounded-full shadow-inner border ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-400 to-blue-300 border-blue-200/30'
                    : 'bg-gradient-to-r from-blue-500 to-blue-400 border-blue-300/50'
                }`}></div>
                <div className={`absolute left-3 right-3 top-1/2 transform -translate-y-1/2 h-0.5 rounded-full ${
                  theme === 'dark' ? 'bg-blue-600/40' : 'bg-blue-500/60'
                }`}></div>
              </div>

            {/* Scrollable Content - two columns with vertical divider */}
            <div className="relative pt-10 pb-10 overflow-auto scroll-area">
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left column */}
                <div className="flex-1 min-w-0">
                  <LeftColumn theme={theme} />
                </div>

                {/* Vertical divider on desktop */}
                <div className="hidden lg:block w-px bg-gray-300 dark:bg-gray-700" />

                {/* Right column */}
                <div className="flex-1 min-w-0">
                  <RightColumn theme={theme} />
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

/* Tách phần nội dung ra thành 2 cột */
function LeftColumn({ theme }) {
  return (
    <>
      <div className="px-12 py-4 text-left relative z-10">
        <h1 className={`text-2xl font-bold mb-4 text-center ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Hi 👋, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Trần Anh Tuấn</span>
        </h1>
        <h3 className={`text-lg font-semibold mb-6 text-center ${
          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
        }`}>
          Fullstack Developer from Hanoi Capital Region, Vietnam 🇻🇳
        </h3>
        
        <div className={`space-y-4 text-sm mb-6 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {/* Location & Work */}
          <div className="bg-gradient-to-r from-blue-50/10 to-cyan-50/10 rounded-lg p-3 border border-blue-200/20">
            <p className="mb-2">
              📍 <strong className="text-blue-500">Location:</strong> Hanoi Capital Region
            </p>
            <p>
              💼 <strong className="text-blue-500">Work Style:</strong> Online with English-speaking teams & offline with local Vietnamese companies
            </p>
          </div>

          {/* Education */}
          <div className="bg-gradient-to-r from-purple-50/10 to-blue-50/10 rounded-lg p-3 border border-purple-200/20">
            <p className="mb-2">
              🎓 <strong className="text-purple-500">Current Study:</strong> East Asia University of Technology
            </p>
            <p>
              🚀 <strong className="text-purple-500">Coding Journey:</strong> Started coding in 2022 while studying at EAUT
            </p>
          </div>

          {/* Passion & Skills */}
          <div className="bg-gradient-to-r from-green-50/10 to-blue-50/10 rounded-lg p-3 border border-green-200/20">
            <p className="mb-2">
              💻 <strong className="text-green-500">Tech Passion:</strong> Love all kinds of technology - both hardware & software
            </p>
            <p>
              🔧 <strong className="text-green-500">Main Focus:</strong> Web development with full-stack capabilities from freelance & indie development experience
            </p>
          </div>

          {/* Personality & Goals */}
          <div className="bg-gradient-to-r from-orange-50/10 to-red-50/10 rounded-lg p-3 border border-orange-200/20">
            <p className="mb-2">
              🚀 <strong className="text-orange-500">Serious about:</strong> Building startups & working in professional environments
            </p>
            <p className="mb-2">
              ✨ <strong className="text-orange-500">Personality:</strong> Creative, friendly, challenge-oriented & always eager to learn
            </p>
            <p>
              💡 <strong className="text-orange-500">Always seeking:</strong> New ideas in business & technology
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

function RightColumn({ theme }) {
  return (
    <>
      {/* Contact & Social */}
      <div className="px-12 py-4">
        <h3 className={`text-lg font-semibold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          📞 Contact Information:
        </h3>
        <div className={`space-y-3 text-sm mb-6 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          <div className="flex items-center gap-2">
            <span>📱</span>
            <strong className="text-blue-500">Phone:</strong>
            <a href="tel:+84393225719" className="text-blue-500 hover:text-blue-400 transition-colors">
              +84 393 225 719
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <strong className="text-blue-500">Email:</strong>
            <a href="mailto:davetranxx@gmail.com" className="text-blue-500 hover:text-blue-400 transition-colors">
              davetranxx@gmail.com
            </a>
          </div>
        </div>

        <h3 className={`text-lg font-semibold mb-3 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          🌐 Connect with me:
        </h3>
        {/* Social Links sẽ được render từ SocialList component */}
        <div className="text-sm">
          <p className="text-gray-500 dark:text-gray-400">
            Check out all my social platforms and links in the dock! 
            <span className="text-blue-500"> → Click the dock icon at the bottom</span>
          </p>
        </div>
      </div>

      {/* Current Projects */}
      <div className="px-12 py-4">
        <h3 className={`text-lg font-semibold mb-3 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          🔭 Current Projects:
        </h3>
        <div className={`text-sm space-y-2 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          <p><span className="text-blue-500 font-semibold">• Bookstore Manager:</span> Book rental website</p>
          <p><span className="text-purple-500 font-semibold">• HomeStay Manager :</span> Rental room management</p>
          <p><span className="text-purple-500 font-semibold">• Weather App :</span> Application weather forecast</p>
        </div>
      </div>

      {/* Languages and Tools */}
      <div className="px-12 py-4">
        <h3 className={`text-lg font-semibold mb-3 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          🛠️ Languages and Tools:
        </h3>
        <div className={`text-sm space-y-2 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          <p><strong className="text-blue-500">Programming:</strong> C++, Python, JavaScript</p>
          <p><strong className="text-cyan-500">Web Development:</strong> React, Node.js, HTML/CSS, Next.js</p>
          <p><strong className="text-green-500">Database:</strong> MongoDB, MySQL</p>
          <p><strong className="text-orange-500">Web Development:</strong> Unity</p>
        </div>
      </div>

      {/* GitHub Stats */}
      <div className="px-12 py-4">
        <h3 className={`text-lg font-semibold mb-3 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          📊 GitHub Activity
        </h3>
        <div className={`text-sm ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          <p>Check out my GitHub profile for detailed stats and activity graphs!</p>
          <p className="mt-2">
            <a href={info.social.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors font-semibold">
              🔗 @{info.githubUsername}
            </a>
          </p>
        </div>
      </div>

      {/* Fun Fact */}
      <div className="px-12 py-4">
        <div className="bg-gradient-to-r from-yellow-50/10 to-orange-50/10 rounded-lg p-4 border border-yellow-200/20">
          <h3 className={`text-lg font-semibold mb-2 ${
            theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
          }`}>
            ⚡ Fun Fact:
          </h3>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <strong className="text-yellow-500">I think I am funny!</strong> I'm the kind of person who embraces learning and tackling anything new with passion and determination. As long as it sparks my interest, I am fearless and unstoppable. 🚀
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
