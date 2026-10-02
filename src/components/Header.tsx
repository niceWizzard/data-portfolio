import React from 'react'
import Link from 'next/link'
import HeaderClient from './HeaderClient'

export default function Header() {
    const navLinks = [
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/#about', desktopOnly: true },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <header className='fixed top-0 left-0 w-full z-100 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-white/5'>
            <div className="container-custom flex flex-row justify-between items-center">
                <Link href="/" className='text-xl font-bold tracking-tighter hover:text-primary transition-colors z-101'>
                    Richard <span className="text-primary">Manansala</span>
                </Link>

                <HeaderClient navLinks={navLinks} />
            </div>
        </header>
    )
}
