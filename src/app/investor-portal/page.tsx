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
      
      {/* Header Image - 1/3 height */}
      <div className="relative w-full h-[33.333vh]">
        <Image
          src="https://images4.imagebam.com/32/35/ed/MEZY4JX_o.jpg"
          alt="Building under construction header"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTAxMTIwPURBPj1HQTY4RjE5TU9PQEdGRVBCR0hDRkFATEr/2wBDAR"
        />
      </div>
      
      {/* Dark purple background for bottom 2/3 */}
      <div className="relative bg-[#251a40] min-h-[66.667vh]">
        <div className="flex items-center justify-center min-h-[66.667vh] p-4">
          <div className="w-full max-w-2xl p-8 rounded-lg">
            <h1 className="text-3xl font-light text-white mb-6">Investor Portal</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="username" className="block text-sm font-medium text-white">
                    Username: <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    className="mt-1 block w-full border-b border-white focus:border-white focus:ring-0 bg-transparent text-white placeholder-white/50"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="password" className="block text-sm font-medium text-white">
                    Password: <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="mt-1 block w-full border-b border-white focus:border-white focus:ring-0 bg-transparent text-white placeholder-white/50"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="flex justify-center gap-4 pt-4">
                <button
                  type="submit"
                  className="px-12 py-3 bg-white/20 backdrop-blur-sm text-white rounded-md uppercase text-sm tracking-wider hover:bg-white/30 transition-colors border border-white/50"
                >
                  LOG IN
                </button>
                
                <button
                  type="button"
                  onClick={() => console.log('Sign up clicked')}
                  className="px-12 py-3 bg-white/20 backdrop-blur-sm text-white rounded-md uppercase text-sm tracking-wider hover:bg-white/30 transition-colors border border-white/50"
                >
                  SIGN UP
                </button>
              </div>

              <div className="text-center mt-6">
                <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
                  Forgot your password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
} 