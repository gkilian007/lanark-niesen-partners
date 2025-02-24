'use client'

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <img
          src="https://images4.imagebam.com/72/c5/55/MEZUWFE_o.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-light text-white space-y-2">
            <div>Modern Perspective.</div>
            <div>Timeless Values.</div>
            <div>Relentless Execution.</div>
          </h1>
        </div>
      </div>
    </div>
  )
} 