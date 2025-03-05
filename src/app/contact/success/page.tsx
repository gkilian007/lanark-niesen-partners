import Link from 'next/link'
import Header from '@/components/layout/Header'
import Image from 'next/image'

export default function SuccessPage() {
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
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6">
            <div className="text-lg md:text-xl text-black leading-relaxed space-y-6 bg-white/70 p-8 rounded-lg backdrop-blur-sm text-center">
              <h1 className="text-3xl md:text-4xl font-light mb-6">Thank You</h1>
              <p>
                Your form was submitted successfully.
              </p>
              <p className="mt-8">
                We will get back to you as soon as possible.
              </p>
              <div className="mt-10">
                <Link 
                  href="/"
                  className="inline-block mt-4 px-8 py-3 bg-white/20 backdrop-blur-sm text-black hover:bg-white/30 rounded transition-colors duration-300"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 