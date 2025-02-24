'use client'

import { useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const getLinkClassName = (path: string) => {
    const isActive = pathname === path
    return `block transition-colors ${
      isActive 
        ? 'text-gray-900 font-medium bg-gray-100 px-4 py-2 rounded-md' 
        : 'text-gray-800 hover:text-black'
    }`
  }

  // Determine if we're on a light background page
  const isLightPage = pathname === '/investor-portal' || pathname === '/contact'

  return (
    <header className="fixed w-full top-0 z-50 flex justify-between items-center p-6">
      <Link href="/" className="flex items-center">
        <img
          src="https://images4.imagebam.com/12/56/94/MEZV0LM_o.png"
          alt="Lanark Niesen Partners Logo"
          className="h-24 w-auto"
        />
      </Link>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-lg transition-all ${
          isLightPage 
            ? 'text-gray-800 bg-gray-200/80 hover:bg-gray-300/80' 
            : 'text-white bg-white/20 hover:bg-white/30'
        }`}
      >
        {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
        <span>Menu</span>
      </button>

      {isMenuOpen && (
        <nav className="absolute top-20 right-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 min-w-[200px]">
          <ul className="space-y-4">
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
      )}
    </header>
  )
} 