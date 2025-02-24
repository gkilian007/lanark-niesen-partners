'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header'

export default function InvestorPortal() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would implement the authentication logic
    console.log('Login attempted:', credentials)
  }

  return (
    <main className="relative min-h-screen">
      <Header />
      
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            src="https://images4.imagebam.com/3f/a4/06/MEZV0NR_o.jpg"
            alt="Background"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTAxMTIwPURBPj1HQTY4RjE5TU9PQEdGRVBCR0hDRkFATEr/2wBDAR"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 font-poppins">
          <h2 className="text-2xl font-light text-gray-800 mb-6">Investor Portal</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
            
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors font-light"
              >
                Log In
              </button>
              
              <button
                type="button"
                onClick={() => console.log('Sign up clicked')}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-light"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
} 