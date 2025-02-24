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
          src="https://picsum.photos/id/1076/2000/1200"
          alt="Building under construction"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
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