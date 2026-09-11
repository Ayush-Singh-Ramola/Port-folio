'use client';

import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NavbarProps {
    isLoaded?: boolean;
}

export default function Navbar({ isLoaded = true }: NavbarProps) {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    const isHome = pathname === '/portfolio' || pathname === '/';
    const isProjects = pathname.startsWith('/portfolio/projects');
    const isBlogs = pathname.startsWith('/portfolio/blogs');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleAvatarClick = (e: React.MouseEvent) => {
        if (isHome && scrolled) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out"
            style={{ filter: isLoaded ? 'none' : 'blur(20px)', opacity: isLoaded ? 1 : 0 }}
        >
            <div
                className="flex items-center gap-8 px-6 py-3 rounded-xl"
                style={{
                    background: 'var(--theme-nav-bg)',
                    backdropFilter: 'blur(32px) saturate(150%)',
                    WebkitBackdropFilter: 'blur(32px) saturate(150%)',
                    border: '1px solid var(--theme-nav-border)',
                    boxShadow: 'var(--theme-nav-shadow)',
                }}
            >
                <div className="relative nav-avatar-wrapper group">
                    <Link
                        href="/portfolio"
                        onClick={handleAvatarClick}
                        className="hover:scale-105 transition-transform block shrink-0"
                    >
                        <Image
                            src="/images/avatar-v20260830202242.jpg"
                            alt="Avatar"
                            width={32}
                            height={32}
                            className="w-8 h-8 min-w-8 min-h-8 rounded-sm object-cover cursor-pointer shrink-0"
                        />
                    </Link>

                    {isHome && !scrolled && (
                        <div className="personal-space-tooltip hidden md:block absolute top-[90%] -translate-y-1/2 right-full z-[100]">
                            <div className="pr-4">
                                <Link
                                    href="/portfolio"
                                    className="flex items-center gap-1.5 whitespace-nowrap hover:text-theme-primary text-theme-secondary transition-colors"
                                >
                                    <span className="flex flex-col items-center">
                                        <span
                                            className="tooltip-text"
                                            style={{
                                                fontFamily: "var(--font-dancing), 'Dancing Script', cursive",
                                                fontSize: '21px',
                                                letterSpacing: '0.5px',
                                            }}
                                        >
                                            portfolio
                                        </span>
                                        <span
                                            className="text-theme-muted text-[11px] tracking-wider"
                                            style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace" }}
                                        >
                                            (Ayush)
                                        </span>
                                    </span>
                                    <svg className="arrow-svg flex-shrink-0" width="55" height="30" viewBox="0 0 70 38" fill="none">
                                        <path
                                            className="arrow-path"
                                            d="M2 32 C 10 30, 18 26, 26 20 C 36 12, 46 5, 56 2"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            fill="none"
                                        />
                                        <polygon className="arrow-head" points="54,0 65,0 56,8" fill="currentColor" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                <Link
                    href="/portfolio/projects"
                    className={`text-sm transition-colors ${
                        isProjects ? 'text-theme-primary font-medium' : 'text-theme-secondary hover:text-theme-primary'
                    }`}
                >
                    projects
                </Link>

                <Link
                    href="/portfolio/blogs"
                    className={`text-sm transition-colors ${
                        isBlogs ? 'text-theme-primary font-medium' : 'text-theme-secondary hover:text-theme-primary'
                    }`}
                >
                    blog
                </Link>

                <ThemeToggle />
            </div>
        </nav>
    );
}
