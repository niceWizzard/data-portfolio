import React from 'react'
import Link from 'next/link'
import { EMAIL_ADDRESS, LINKEDIN_URL } from '../constants/contact'

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-background relative overflow-hidden py-16 md:py-24">
            {/* Background Detail */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container-custom px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* Branding Section */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors inline-block uppercase">
                                Richard <span className="text-primary">Manansala</span>
                            </Link>
                            <span className="text-white/50 font-medium">Fullstack Web Developer</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 w-fit px-4 py-2 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Available for new projects</span>
                        </div>

                        <p className="max-w-xs text-white/50 text-sm leading-relaxed mt-2 uppercase font-bold tracking-widest ">
                            Building digital experiences with precision and passion. Based in Pampanga, Philippines.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white/30">Navigation</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/" className="text-white/60 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/#showcase" className="text-white/60 hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/projects" className="text-white/60 hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="/#contact" className="text-white/60 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-6 ">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white/30">Connect</h4>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link href={LINKEDIN_URL} target="_blank" className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors group">
                                    <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors group">
                                    <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    Email
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs font-bold uppercase tracking-[0.2em]">
                    <span>Made in 2026 by Richard Manansala</span>
                    <div className="flex items-center gap-4">
                        <span>Built with Next.js & Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
