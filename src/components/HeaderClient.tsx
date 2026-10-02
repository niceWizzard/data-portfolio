"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface NavLink {
    name: string;
    href: string;
    desktopOnly?: boolean;
}

export default function HeaderClient({ navLinks }: { navLinks: NavLink[] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                    <Link 
                        key={link.name}
                        href={link.href} 
                        className={`text-sm font-medium text-white/70 hover:text-primary transition-colors ${link.desktopOnly ? 'hidden md:block' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
                <div className="w-px h-4 bg-white/10 mx-2"></div>
                <a 
                    href="https://linkedin.com/in/richardmanansala23" 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white/70 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                    <span className="hidden sm:inline">LinkedIn</span>
                    <svg className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
                </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden z-101 p-2 text-white/70 hover:text-primary transition-colors focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
            >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                    <motion.span 
                        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-full h-0.5 bg-current rounded-full origin-left transition-all"
                    />
                    <motion.span 
                        animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                        className="w-full h-0.5 bg-current rounded-full transition-all"
                    />
                    <motion.span 
                        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-full h-0.5 bg-current rounded-full origin-left transition-all"
                    />
                </div>
            </button>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-99 md:hidden"
                        />
                        
                        {/* Drawer */}
                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-screen w-[280px] bg-background border-l border-white/5 z-100 md:hidden pt-24 px-8 flex flex-col items-center gap-8"
                        >
                            <div className="flex flex-col items-center gap-6 w-full">
                                {navLinks.map((link) => (
                                    <Link 
                                        key={link.name}
                                        href={link.href} 
                                        onClick={closeMenu}
                                        className="text-lg font-medium text-white/70 hover:text-primary transition-colors py-2 w-full text-center border-b border-white/5"
                                    >
                                        {link.name}
                                        </Link>
                                ))}
                                <a 
                                    href="https://linkedin.com/in/richardmanansala23" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    onClick={closeMenu}
                                    className="text-lg font-medium text-white/70 hover:text-primary transition-colors py-2 w-full text-center flex items-center justify-center gap-2"
                                >
                                    LinkedIn
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
