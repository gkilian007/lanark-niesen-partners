'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  })

  return (
    <main className="relative min-h-screen">
      <Header />
      
      {/* Header Image - 1/3 height */}
      <div className="relative w-full h-[33.333vh]">
        <Image
          src="https://images4.imagebam.com/a7/17/e2/MEZY4HK_o.jpg"
          alt="Mountain landscape header"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTAxMTIwPURBPj1HQTY4RjE5TU9PQEdGRVBCR0hDRkFATEr/2wBDAR"
        />
      </div>
      
      {/* Dark blue background for bottom 2/3 */}
      <div className="relative bg-blue-900 min-h-[66.667vh]">
        <div className="flex items-center justify-center min-h-[66.667vh] p-4">
          <div className="w-full max-w-2xl p-8 rounded-lg">
            <h1 className="text-3xl font-light text-white mb-6">Contact Us</h1>
            
            <form action="https://formspree.io/f/mqaevklj" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white">
                    First Name: <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    className="mt-1 block w-full border-b border-white focus:border-white focus:ring-0 bg-transparent text-white placeholder-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white">
                    Last Name: <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    className="mt-1 block w-full border-b border-white focus:border-white focus:ring-0 bg-transparent text-white placeholder-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-white">
                    Organization:
                  </label>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    className="mt-1 block w-full border-b border-white focus:border-white focus:ring-0 bg-transparent text-white placeholder-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email: <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full border-b border-white focus:border-white focus:ring-0 bg-transparent text-white placeholder-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white">
                    Phone:
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full border-b border-white focus:border-white focus:ring-0 bg-transparent text-white placeholder-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-white">
                    Country
                  </label>
                  <select
                    name="country"
                    id="country"
                    className="mt-1 block w-full border-b border-white focus:border-white focus:ring-0 bg-transparent text-white"
                  >
                    <option value="" className="bg-blue-900">Select Country</option>
                    <option value="United States" className="bg-blue-900">United States</option>
                    <option value="Canada" className="bg-blue-900">Canada</option>
                    <option value="United Kingdom" className="bg-blue-900">United Kingdom</option>
                    <option value="Australia" className="bg-blue-900">Australia</option>
                    <option value="Germany" className="bg-blue-900">Germany</option>
                    <option value="France" className="bg-blue-900">France</option>
                    <option value="Japan" className="bg-blue-900">Japan</option>
                    <option value="China" className="bg-blue-900">China</option>
                    <option value="Other" className="bg-blue-900">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message field:
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full border-b border-white focus:border-white focus:ring-0 bg-transparent text-white resize-none"
                />
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-12 py-3 bg-white/20 backdrop-blur-sm text-white rounded-md uppercase text-sm tracking-wider hover:bg-white/30 transition-colors border border-white/50"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
} 