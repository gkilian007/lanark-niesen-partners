import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen">
        <Hero />
      </section>

      {/* About Section */}
      <section className="relative h-screen">
        <Image
          src="https://images4.imagebam.com/f3/ec/37/MEZVX2O_o.jpg"
          alt="Building under construction"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTAxMTIwPURBPj1HQTY4RjE5TU9PQEdGRVBCR0hDRkFATEr/2wBDAR"
        />
        <div className="absolute inset-0 bg-black/55" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6">
            <div className="text-lg md:text-xl text-white leading-relaxed space-y-6">
              <p>
                Lanark Niesen Partners serves as the combined family office for the Tarlton and Dearborn families. With investments primarily in commercial real estate, software technology and media properties, Lanark Niesen focuses on investments that are simultaneously doing good while also achieving alpha.
              </p>
              <p>
                We often invest alongside other family offices and welcome inquiries from likeminded families looking for opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl text-white font-light mb-6">
            Get in Touch
          </h2>
          <Link 
            href="/contact"
            className="inline-block px-8 py-3 text-lg bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
} 