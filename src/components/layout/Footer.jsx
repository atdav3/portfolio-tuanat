import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { info } from "../../utils/info";

// Social links loaded from info.js

const FooterLogo = ({ theme }) => (
    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        TuanAT
    </h3>
);

// Buy Me a Coffee Icon Component
const BuyMeACoffeeIcon = ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.38 0 2.5-1.12 2.5-2.5S19.88 3 18.5 3zm-1.5 6v1c0 2.76-2.24 5-5 5s-5-2.24-5-5V9h10zm1.5-4h.5c.28 0 .5.22.5.5S19.28 6 19 6H18V5zm-2.5 0H16v1h-1.5V5zm-3 0H13v1h-1.5V5zm-3 0H10v1H8.5V5z"/>
    </svg>
);

const FooterSocialLinks = ({ theme, socialLinks }) => (
    <div className="flex justify-center space-x-8 mb-8">
        {socialLinks.map(({ Icon, href, label }, index) => (
            <Link
                key={label}
                href={href}
                target="_blank"
                className={`transition-all duration-500 ease-out hover:scale-125 hover:-translate-y-2
                          text-gray-600 dark:text-gray-400 
                          hover:text-gray-900 dark:hover:text-white
                          ${label === 'Buy Me a Coffee' ? 'hover:text-amber-500 dark:hover:text-amber-400' : ''}`}
                aria-label={label}
                style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
            >
                <Icon size={28} />
            </Link>
        ))}
    </div>
);

const FooterCopyright = ({ theme }) => (
    <div className="text-center text-lg mb-8 text-gray-600 dark:text-gray-400">
        © 2025 Trần Anh Tuấn. All rights reserved.
    </div>
);

export default function Footer({ theme }) {
    const socialLinks = [
        { Icon: FaGithub, href: info.social.github, label: 'GitHub' },
        { Icon: FaLinkedin, href: info.social.linkedin, label: 'LinkedIn' },
        { Icon: FaXTwitter, href: info.social.twitter, label: 'Twitter' },
        { Icon: BuyMeACoffeeIcon, href: info.social.buymeacoffee, label: 'Buy Me a Coffee' }
    ];

    return (
        <>
            <footer className="py-16 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <FooterLogo theme={theme} />
                        <FooterSocialLinks theme={theme} socialLinks={socialLinks} />
                    </div>
                    <FooterCopyright theme={theme} />
                </div>
            </footer>
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
}
