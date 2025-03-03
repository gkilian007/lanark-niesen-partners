'use client'

import Image from 'next/image'
import Header from '@/components/layout/Header'

export default function About() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <div className="relative h-screen w-full">
        <Image
          src="https://images4.imagebam.com/f5/ca/2c/ME101RN4_o.jpg"
          alt="Building under construction"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTAxMTIwPURBPj1HQTY4RjE5TU9PQEdGRVBCR0hDRkFATEr/2wBDAR"
        />
        
        <div className="absolute inset-0 md:flex md:items-center md:justify-center">
          <div className="md:max-w-4xl md:px-6 absolute md:relative md:top-auto top-[120px] left-0 right-0 px-4">
            <div className="text-lg md:text-xl text-black leading-relaxed space-y-6 bg-white/70 p-8 rounded-lg backdrop-blur-sm">
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