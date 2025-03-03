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
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6">
            <div className="text-lg md:text-xl text-black leading-relaxed space-y-6 bg-white/70 p-8 rounded-lg backdrop-blur-sm">
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
      <section className="relative py-12 bg-[#001E60]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-xl md:text-2xl text-white font-light text-center lg:text-left">
                Modern Perspective. Timeless Values. Relentless Execution.
              </h2>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Link 
                href="/" 
                className="block relative 
                  w-[120px] h-[64px] 
                  xs:w-[140px] xs:h-[72px]
                  sm:w-[160px] sm:h-[80px] 
                  md:w-[180px] md:h-[88px] 
                  lg:w-[200px] lg:h-[96px] 
                  xl:w-[220px] xl:h-[104px] 
                  2xl:w-[240px] 2xl:h-[112px] 
                  3xl:w-[260px] 3xl:h-[120px]"
              >
                <Image
                  src="https://images4.imagebam.com/f2/64/a2/ME101RMM_o.png"
                  alt="Lanark Niesen Partners Logo"
                  fill
                  priority
                  sizes="(max-width: 480px) 120px, 
                         (max-width: 639px) 140px, 
                         (max-width: 767px) 160px, 
                         (max-width: 1023px) 180px, 
                         (max-width: 1279px) 200px, 
                         (max-width: 1535px) 220px, 
                         (max-width: 1919px) 240px, 
                         260px"
                  className="object-contain"
                  quality={90}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 