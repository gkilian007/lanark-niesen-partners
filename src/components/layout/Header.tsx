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
    return `block transition-colors ${
      isActive 
        ? 'text-gray-900 font-medium bg-gray-100/90 px-4 py-2 rounded-md' 
        : 'text-gray-800 hover:text-black hover:bg-gray-100/70 px-4 py-2 rounded-md'
    }`
  }

  // Determine if we're on a light background page
  const isLightPage = pathname === '/investor-portal' || pathname === '/contact'

  return (
    <header className="fixed w-full -top-3 md:-top-6 z-50 flex justify-between items-center px-4 md:px-6">
      <Link href="/" className="flex items-center relative w-[200px] h-24 md:w-[400px] md:h-48">
        <Image
          src="https://images4.imagebam.com/9f/62/cd/MEZVWT5_o.png"
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
              ? 'text-gray-800 bg-gray-200/80 group-hover:bg-gray-300/80' 
              : 'text-white bg-white/20 group-hover:bg-white/30'
          }`}
          onMouseEnter={() => setIsMenuOpen(true)}
        >
          {isMenuOpen ? <X size={18} className="md:w-5 md:h-5" /> : <MenuIcon size={18} className="md:w-5 md:h-5" />}
          <span className="text-sm md:text-base">Menu</span>
        </button>

        <nav 
          className={`absolute top-10 md:top-12 right-0 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg p-4 md:p-6 min-w-[180px] md:min-w-[200px] transition-all duration-200 ${
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
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`${getLinkClassName('/about')} text-sm md:text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`${getLinkClassName('/contact')} text-sm md:text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                href="/investor-portal" 
                className={`${getLinkClassName('/investor-portal')} text-sm md:text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Investor Portal
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 