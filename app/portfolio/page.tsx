'use client';

import AgeCounter from '@/components/AgeCounter';
import BlogCard from '@/components/BlogCard';
import CTAButtons from '@/components/CTAButtons';
import GitHubContributions from '@/components/GitHubContributions';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import RotatingTitle from '@/components/RotatingTitle';
import SkillBadges from '@/components/SkillBadges';
import SmoothScroll from '@/components/SmoothScroll';
import { blogs } from '@/data/blogs';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PortfolioPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const headingFont = { fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace", fontWeight: 600 };
    const geistMonoFont = { fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace" };

    return (
        <SmoothScroll>
            <div className="min-h-screen text-page-text overflow-y-auto overflow-x-hidden relative z-2" style={geistMonoFont}>
                <Navbar isLoaded={isLoaded} />

                <main
                    className="relative transition-all duration-700 ease-out"
                    style={{
                        filter: isLoaded ? 'blur(0px)' : 'blur(20px)',
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? 'scale(1)' : 'scale(1.02)',
                    }}
                >
                    <div className="max-w-2xl mx-auto px-6 pt-32 pb-20">
                        <div className="mb-16">
                            <div className="relative mb-8 flex gap-4">
                                <Image
                                    src="/images/avatar-v20260830202242.jpg"
                                    alt="Avatar"
                                    width={96}
                                    height={96}
                                    className="w-24 h-24 rounded-sm object-cover shrink-0 mt-1"
                                    style={{ boxShadow: 'var(--theme-avatar-shadow)' }}
                                    priority
                                />
                                <div className="flex flex-col justify-start">
                                    <h1 className="text-2xl md:text-3xl text-theme-primary tracking-wide mb-1 pr-14 md:pr-0" style={headingFont}>
                                        Ayush Singh Ramola
                                    </h1>
                                    <RotatingTitle />
                                    <AgeCounter />
                                </div>
                            </div>

                            <div className="text-theme-secondary text-sm leading-relaxed mb-8">
                                <p className="mb-3">basically, i just like building things. a lot. currently learning Typescript and diving deep into backend systems and networking.</p>
                                <p>in my free time, i like to write blogs, read, solve algorithms and play cricket.</p>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-theme-muted">
                                <a href="https://github.com/Ayush-Singh-Ramola" target="_blank" rel="noopener noreferrer" className="hover:text-theme-icon-hover transition-colors" title="GitHub">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                                </a>
                                <a href="https://x.com/ayuszzzz" target="_blank" rel="noopener noreferrer" className="hover:text-theme-icon-hover transition-colors" title="X/Twitter">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/ayush-singh-ramola-2b597330a/" target="_blank" rel="noopener noreferrer" className="hover:text-theme-icon-hover transition-colors" title="LinkedIn">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                                <a href="https://leetcode.com/u/ayushzjzjjjzk/" target="_blank" rel="noopener noreferrer" className="hover:text-theme-icon-hover transition-colors" title="LeetCode">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>
                                </a>
                                <a href="https://medium.com/@ayushsinghramola02" target="_blank" rel="noopener noreferrer" className="hover:text-theme-icon-hover transition-colors" title="Medium">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
                                </a>
                                <a href="https://discord.com/users/ayush171911" target="_blank" rel="noopener noreferrer" className="hover:text-theme-icon-hover transition-colors" title="Discord">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                                </a>
                            </div>

                            <CTAButtons />

                            <div className="mt-12 mb-8">
                                <h2 className="text-2xl mb-6 tracking-wider" style={headingFont}>Skills</h2>
                                <SkillBadges />
                            </div>
                        </div>

                        <section id="projects" className="mb-16">
                            <h2 className="text-2xl mb-6 tracking-wider" style={headingFont}>Projects</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {projects.slice(0, 2).map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>

                            <div className="flex justify-center mt-6">
                                <Link
                                    href="/portfolio/projects"
                                    className="group text-sm text-theme-muted hover:text-theme-primary px-4 py-2 rounded-lg border border-theme-divider hover:border-theme-card-hover-border hover:bg-theme-card transition-all flex items-center gap-2"
                                >
                                    <span className="animated-underline">View All</span>
                                    <svg className="w-4 h-4 view-all-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </Link>
                            </div>
                        </section>

                        <section className="mb-16">
                            <h2 className="text-2xl mb-6 tracking-wider" style={headingFont}>Stats</h2>
                            <GitHubContributions username="Ayush-Singh-Ramola" />
                        </section>

                        <section id="blog" className="mb-16">
                            <h2 className="text-2xl mb-6 tracking-wider" style={headingFont}>Blogs</h2>

                            <div className="space-y-4">
                                {blogs.slice(0, 2).map((blog) => (
                                    <BlogCard key={blog.id} blog={blog} />
                                ))}
                            </div>

                            <div className="flex justify-center mt-6">
                                <Link
                                    href="/portfolio/blogs"
                                    className="group text-sm text-theme-muted hover:text-theme-primary px-4 py-2 rounded-lg border border-theme-divider hover:border-theme-card-hover-border hover:bg-theme-card transition-all flex items-center gap-2"
                                >
                                    <span className="animated-underline">View All</span>
                                    <svg className="w-4 h-4 view-all-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </Link>
                            </div>
                        </section>

                        <div className="mt-16 relative">
                            <div
                                className="absolute inset-0 pointer-events-none z-10"
                                style={{
                                    background: `linear-gradient(to bottom, var(--theme-gradient-overlay) 0%, transparent 30%, transparent 70%, var(--theme-gradient-overlay) 100%)`
                                }}
                            />
                            <Image
                                src="/images/vagabond-mountains.jpg"
                                alt="Vagabond - Mountains"
                                width={800}
                                height={200}
                                className="w-full h-48 object-cover object-center opacity-60"
                            />
                            <p
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-theme-muted text-lg tracking-wider z-20"
                                style={{ fontFamily: "var(--font-dancing), 'Dancing Script', cursive" }}
                            >
                                &quot;inside, i&apos;m infinite&quot;
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </SmoothScroll>
    );
}