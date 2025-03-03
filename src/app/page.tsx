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
          src="https://images4.imagebam.com/32/35/ed/MEZY4JX_o.jpg"
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
      <section className="relative py-10 bg-[#251a40]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-xl md:text-2xl text-white font-light">
              Modern Perspective. Timeless Values. Relentless Execution.
            </h2>
            <Link href="/" className="flex items-center relative w-[192px] h-22 md:w-[288px] md:h-32">
              <Image
                src="https://images4.imagebam.com/f2/64/a2/ME101RMM_o.png"
                alt="Lanark Niesen Partners Logo"
                fill
                priority
                sizes="(max-width: 768px) 192px, 288px"
                className="object-contain"
                quality={90}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 