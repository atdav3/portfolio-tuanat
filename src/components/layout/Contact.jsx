"use client";

import React, { useState } from "react";
import { info } from "../../utils/info";
import { SOCIAL_PLATFORMS } from "../../data/socialPlatforms";

export default function Contact({ theme }) {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    // Tính toán vị trí các icons phân bố đều quanh vòng tròn
    const platformsToShow = [
        "GitHub",
        "LinkedIn", 
        "YouTube",
        "Discord",
        "Facebook",
        "Twitter",
        "Daily.dev",
        "Website",
        "Buy Me a Coffee"
    ];
    
    const socialOrbitItems = platformsToShow
        .map(label => SOCIAL_PLATFORMS.find(p => p.label === label))
        .filter(platform => platform)
        .map((platform, index, array) => {
            // Tính góc độ để phân bố đều (360 độ chia cho số lượng icons)
            const angle = (index * 360) / array.length;
            const radius = 45; // % từ center
            const radian = (angle * Math.PI) / 180;
            
            // Tính toán vị trí x, y dựa trên góc và bán kính
            const x = 50 + radius * Math.cos(radian);
            const y = 50 + radius * Math.sin(radian);
            
            return {
                platform,
                position: `absolute`,
                transform: `translate(-50%, -50%)`,
                left: `${x}%`,
                top: `${y}%`,
                size: platform.label === "Daily.dev" ? "w-[72px] h-[72px]" : "w-18 h-18"
            };
        });

    const email = info.email;

    return (
        <section id="contact" className="contact-section py-24 bg-gray-200 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Connect with me
                    </h2>
                    <p
                        className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-6"
                    >
                        Have a question about Tech, need technical advice, or want to discuss opportunities?
                        I'm here to help with any technology-related topics.
                    </p>
                    {/* Buy Me a Coffee Button */}
                    <a
                        href={info.social.buymeacoffee}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="coffee-button inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.38 0 2.5-1.12 2.5-2.5S19.88 3 18.5 3zm-1.5 6v1c0 2.76-2.24 5-5 5s-5-2.24-5-5V9h10zm1.5-4h.5c.28 0 .5.22.5.5S19.28 6 19 6H18V5zm-2.5 0H16v1h-1.5V5zm-3 0H13v1h-1.5V5zm-3 0H10v1H8.5V5z"/>
                        </svg>
                        <span>Buy Me a Coffee</span>
                    </a>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* ======= ORBITING ICONS ======= */}
                        <div className="text-center">
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
                                {/* Center Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="center-contact-button w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-lg md:text-xl shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-3">
                                        <span className="text-center leading-tight">Contact<br className="sm:hidden" /><span className="hidden sm:inline"> </span>Me</span>
                                    </div>
                                </div>

                                {/* Orbit layer (rotate whole ring) */}
                                <div className="absolute inset-0 spin-orbit">
                                    {socialOrbitItems.map((item, index) => {
                                        const sizeClass = item.size === "w-[72px] h-[72px]" 
                                            ? "w-12 h-12 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px]"
                                            : "w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18";
                                        
                                        return (
                                            <a 
                                                key={item.platform.label}
                                                href={item.platform.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                aria-label={item.platform.label}
                                                style={{
                                                    position: item.position,
                                                    left: item.left,
                                                    top: item.top,
                                                    transform: item.transform
                                                }}
                                                className={`${sizeClass} ${item.platform.color} rounded-full flex items-center justify-center hover:scale-125 hover:z-20 transition-all duration-500 ease-out shadow-lg border-2 z-10 hover:shadow-2xl`}
                                            >
                                                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 flex items-center justify-center">
                                                    {item.platform.icon}
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="contact-form p-6 md:p-8 rounded-2xl bg-white shadow-xl dark:bg-gray-800">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={`contact-input w-full px-4 py-3 rounded-lg border transition-all duration-300 ${theme === 'dark'
                                            ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-400'
                                            : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                                            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className={`contact-input w-full px-4 py-3 rounded-lg border transition-all duration-300 ${theme === 'dark'
                                            ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-400'
                                            : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                                            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                                        placeholder="Email subject"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className={`contact-input w-full px-4 py-3 rounded-lg border transition-all duration-300 ${theme === 'dark'
                                            ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-400'
                                            : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                                            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                                        placeholder="Write your message here..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={`w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${formData.name && formData.subject && formData.message && !isSubmitting
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg'
                                        : 'bg-gray-400 cursor-not-allowed'
                                        }`}
                                    disabled={!formData.name || !formData.subject || !formData.message || isSubmitting}
                                    onClick={() => {
                                        if (formData.name && formData.subject && formData.message) {
                                            setIsSubmitting(true);
                                            setSubmitMessage('');

                                            const formattedMessage = `Dear Trần Anh Tuấn,\n\n${formData.message}\n\nBest regards,\n${formData.name}`;
                                            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formattedMessage)}`;
                                            window.open(mailtoLink);

                                            setTimeout(() => {
                                                setIsSubmitting(false);
                                                setSubmitMessage('✅ Email client opened! Please send your message.');
                                                // Clear form after successful submission
                                                setFormData({ name: '', subject: '', message: '' });
                                            }, 1000);
                                        }
                                    }}
                                >
                                    {isSubmitting ? 'Opening Email...' : 'Send Message'}
                                </button>

                                {submitMessage && (
                                    <div className="text-center p-3 rounded-lg bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                                        {submitMessage}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* CSS cho quỹ đạo quay + counter-rotate icon + animations */}
            <style jsx global>{`
        @keyframes orbit-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes icon-counter-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(147, 51, 234, 0.4);
          }
        }
        
        @keyframes icon-float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-5px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .spin-orbit {
          animation: orbit-spin 40s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        
        /* Giữ icon luôn thẳng bằng cách quay ngược lại đúng tốc độ */
        .spin-orbit > a div svg {
          animation: icon-counter-rotate 40s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: 50% 50%;
          display: block;
        }
        
        /* Stagger animation cho các icons */
        .spin-orbit > a:nth-child(1) { animation-delay: 0s; }
        .spin-orbit > a:nth-child(2) { animation-delay: 0.1s; }
        .spin-orbit > a:nth-child(3) { animation-delay: 0.2s; }
        .spin-orbit > a:nth-child(4) { animation-delay: 0.3s; }
        .spin-orbit > a:nth-child(5) { animation-delay: 0.4s; }
        .spin-orbit > a:nth-child(6) { animation-delay: 0.5s; }
        .spin-orbit > a:nth-child(7) { animation-delay: 0.6s; }
        .spin-orbit > a:nth-child(8) { animation-delay: 0.7s; }
        .spin-orbit > a:nth-child(9) { animation-delay: 0.8s; }
        
        /* Entrance animation cho section */
        .contact-section {
          animation: fadeInUp 0.8s ease-out;
        }
        
        /* Pulse glow cho center button */
        .center-contact-button {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        /* Icon float effect - separate from orbit */
        .spin-orbit > a {
          animation: icon-float 4s ease-in-out infinite;
        }
        
        .spin-orbit > a:nth-child(1) { animation-delay: 0s; }
        .spin-orbit > a:nth-child(2) { animation-delay: 0.4s; }
        .spin-orbit > a:nth-child(3) { animation-delay: 0.8s; }
        .spin-orbit > a:nth-child(4) { animation-delay: 1.2s; }
        .spin-orbit > a:nth-child(5) { animation-delay: 1.6s; }
        .spin-orbit > a:nth-child(6) { animation-delay: 2s; }
        .spin-orbit > a:nth-child(7) { animation-delay: 2.4s; }
        .spin-orbit > a:nth-child(8) { animation-delay: 2.8s; }
        .spin-orbit > a:nth-child(9) { animation-delay: 3.2s; }
        
        /* Form animation */
        .contact-form {
          animation: fadeInScale 0.6s ease-out 0.2s both;
        }
        
        /* Input focus animation */
        .contact-input:focus {
          transform: translateY(-2px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Button hover shimmer effect */
        .coffee-button {
          position: relative;
          overflow: hidden;
        }
        
        .coffee-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }
        
        .coffee-button:hover::before {
          left: 100%;
        }
      `}</style>
        </section>
    );
}
