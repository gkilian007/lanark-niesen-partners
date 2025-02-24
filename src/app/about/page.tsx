'use client'

import Image from 'next/image'
import Header from '@/components/layout/Header'

export default function About() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <div className="relative h-screen w-full">
        <Image
          src="https://picsum.photos/id/1076/2000/1200"
          alt="Building under construction"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6">
            <div className="text-lg md:text-xl text-white leading-relaxed space-y-6">
              <p>
                Lanark Niesen Partners serves as the combined family office for the Tarlton and Dearborn families. With investments primarily in commercial real estate, software technology and media properties, Lanark Niesen focuses on investments that are simultaneously doing good while also achieving alpha.
              </p>
              <p>
                We often invest alongside other family offices and welcome inquiries from likeminded families looking for opportunities. Please reach out via the link below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 