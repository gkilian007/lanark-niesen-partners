'use client'

import { useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const getLinkClassName = (path: string) => {
    const isActive = pathname === path
    return `block px-4 py-2 transition-colors ${
      isActive 
        ? 'text-white font-medium' 
        : 'text-white hover:text-gray-200'
    }`
  }

  // Determine if we're on a light background page
  const isLightPage = pathname === '/investor-portal' || pathname === '/contact'

  return (
    <header className="fixed w-full -top-3 md:-top-6 z-50 flex justify-between items-center px-4 md:px-6">
      <Link href="/" className="flex items-center relative w-[200px] h-24 md:w-[400px] md:h-48">
        <Image
          src="https://images4.imagebam.com/f2/64/a2/ME101RMM_o.png"
          alt="Lanark Niesen Partners Logo"
          fill
          priority
          sizes="(max-width: 768px) 200px, 400px"
          className="object-contain"
          quality={90}
        />
      </Link>

      <div 
        className="relative group"
      >
        <button
          className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-sm rounded-lg transition-all ${
            isLightPage 
              ? 'text-white bg-[#001E60] group-hover:bg-[#001E60]/90' 
              : 'text-white bg-[#001E60] group-hover:bg-[#001E60]/90'
          }`}
          onMouseEnter={() => setIsMenuOpen(true)}
        >
          {isMenuOpen ? <X size={18} className="md:w-5 md:h-5" /> : <MenuIcon size={18} className="md:w-5 md:h-5" />}
          <span className="text-sm md:text-base">Menu</span>
        </button>

        <nav 
          className={`absolute top-10 md:top-12 right-0 bg-white/30 backdrop-blur-sm rounded-lg shadow-lg p-4 md:p-6 min-w-[180px] md:min-w-[200px] transition-all duration-200 ${
            isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-[-10px]'
          }`}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <ul className="space-y-1 md:space-y-2">
            <li>
              <Link 
                href="/" 
                className={`${getLinkClassName('/')} text-sm md:text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={pathname === '/' ? 'border-b-2 border-white' : 'hover:border-b hover:border-white/70'}>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`${getLinkClassName('/about')} text-sm md:text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={pathname === '/about' ? 'border-b-2 border-white' : 'hover:border-b hover:border-white/70'}>
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`${getLinkClassName('/contact')} text-sm md:text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={pathname === '/contact' ? 'border-b-2 border-white' : 'hover:border-b hover:border-white/70'}>
                  Contact
                </span>
              </Link>
            </li>
            <li>
              <Link 
                href="/investor-portal" 
                className={`${getLinkClassName('/investor-portal')} text-sm md:text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={pathname === '/investor-portal' ? 'border-b-2 border-white' : 'hover:border-b hover:border-white/70'}>
                  Investor Portal
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 