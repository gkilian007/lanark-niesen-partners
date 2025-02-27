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
          <div className="w-full max-w-2xl bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-light text-gray-900 mb-6">Contact Us</h1>
            
            <form action="https://formspree.io/f/mqaevklj" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 bg-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 bg-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                    Organization:
                  </label>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 bg-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 bg-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone:
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 bg-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <select
                    name="country"
                    id="country"
                    className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 bg-transparent"
                  >
                    <option value="">Select Country</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message field:
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 bg-transparent resize-none"
                />
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-12 py-3 bg-teal-600 text-white rounded-md uppercase text-sm tracking-wider hover:bg-teal-700 transition-colors"
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