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
        ? 'text-gray-900 font-medium bg-gray-100 px-4 py-2 rounded-md' 
        : 'text-gray-800 hover:text-black hover:bg-gray-50 px-4 py-2 rounded-md'
    }`
  }

  // Determine if we're on a light background page
  const isLightPage = pathname === '/investor-portal' || pathname === '/contact'

  return (
    <header className="fixed w-full -top-6 z-50 flex justify-between items-center px-6">
      <Link href="/" className="flex items-center relative w-[400px] h-48">
        <Image
          src="https://images4.imagebam.com/12/56/94/MEZV0LM_o.png"
          alt="Lanark Niesen Partners Logo"
          fill
          priority
          sizes="400px"
          className="object-contain"
          quality={90}
        />
      </Link>

      <div 
        className="relative group"
      >
        <button
          className={`flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-lg transition-all ${
            isLightPage 
              ? 'text-gray-800 bg-gray-200/80 group-hover:bg-gray-300/80' 
              : 'text-white bg-white/20 group-hover:bg-white/30'
          }`}
          onMouseEnter={() => setIsMenuOpen(true)}
        >
          {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          <span>Menu</span>
        </button>

        <nav 
          className={`absolute top-12 right-0 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 min-w-[200px] transition-all duration-200 ${
            isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-[-10px]'
          }`}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <ul className="space-y-2">
            <li>
              <Link 
                href="/" 
                className={getLinkClassName('/')}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={getLinkClassName('/about')}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={getLinkClassName('/contact')}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                href="/investor-portal" 
                className={getLinkClassName('/investor-portal')}
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