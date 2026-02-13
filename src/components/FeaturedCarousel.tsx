import { useState } from 'react'

interface Card {
  id: number
  title: string
  gradient: string
  visual: string
  ctaText: string
}

const cards: Card[] = [
  {
    id: 0,
    title: 'SLASH',
    gradient: 'from-yellow-600 via-amber-600 to-yellow-700',
    visual: 'letter-s',
    ctaText: 'Shop Now',
  },
  {
    id: 1,
    title: 'THE FORGE',
    gradient: 'from-orange-600 via-red-600 to-yellow-600',
    visual: 'forge',
    ctaText: 'Shop Now',
  },
  {
    id: 2,
    title: 'MYSTERY',
    gradient: 'from-orange-600 via-red-500 to-pink-600',
    visual: 'characters',
    ctaText: 'Shop Now',
  },
]

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const renderVisual = (type: string) => {
    switch (type) {
      case 'letter-s':
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-[200px] md:text-[280px] font-black" style={{
              background: 'linear-gradient(135deg, #d4af37, #f0c869, #d4af37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
            }}>
              S
            </div>
          </div>
        )
      
      case 'forge':
        return (
          <div className="w-full h-full relative flex flex-col items-center justify-center p-8">
            {/* Forge Character */}
            <div className="relative flex-1 flex items-end justify-center w-full max-w-md">
              {/* Character Body */}
              <div className="relative z-10">
                {/* Head/Body */}
                <div className="w-40 h-48 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full relative">
                  {/* Beard */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-12 bg-white/90 rounded-b-full"></div>
                  {/* Arms */}
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-x-20 w-6 h-32 bg-gray-800 rounded-full rotate-12"></div>
                  <div className="absolute bottom-20 left-1/2 transform translate-x-1/2 translate-x-14 w-6 h-32 bg-gray-800 rounded-full -rotate-12"></div>
                  {/* Hammer */}
                  <div className="absolute bottom-24 left-1/2 transform translate-x-1/2 translate-x-16 w-2 h-28 bg-gray-900 rotate-45"></div>
                  <div className="absolute bottom-32 left-1/2 transform translate-x-1/2 translate-x-20 w-8 h-3 bg-orange-600 rotate-45"></div>
                </div>
                
                {/* Flames */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-24">
                  <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-gradient-to-t from-orange-500 via-red-500 to-transparent rounded-full blur-xl opacity-80 animate-pulse"></div>
                  <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-t from-red-600 via-orange-500 to-transparent rounded-full blur-xl opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  {/* Sparks */}
                  <div className="absolute bottom-12 left-1/2 w-2 h-2 bg-yellow-400 rounded-full blur-sm animate-ping"></div>
                  <div className="absolute bottom-16 left-[45%] w-1.5 h-1.5 bg-orange-400 rounded-full blur-sm animate-ping" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute bottom-8 right-[45%] w-2 h-2 bg-red-400 rounded-full blur-sm animate-ping" style={{ animationDelay: '0.6s' }}></div>
                </div>
              </div>
            </div>
            
            {/* Title and CTA */}
            <div className="absolute bottom-6 left-0 right-0 px-8 flex items-center justify-between">
              <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">THE FORGE</h2>
              <button className="px-6 md:px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full text-sm md:text-base transition-all shadow-lg hover:shadow-xl">
                SHOP NOW
              </button>
            </div>
          </div>
        )
      
      case 'characters':
        return (
          <div className="w-full h-full relative p-8 flex flex-col">
            {/* Question Marks */}
            <div className="absolute top-6 left-6 flex gap-3 z-10">
              <span className="text-5xl md:text-6xl font-black text-blue-400 drop-shadow-lg" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}>?</span>
              <span className="text-5xl md:text-6xl font-black text-green-400 drop-shadow-lg" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}>?</span>
              <span className="text-5xl md:text-6xl font-black text-yellow-400 drop-shadow-lg" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}>?</span>
            </div>

            {/* Characters */}
            <div className="flex-1 flex items-end justify-center gap-8 md:gap-12 pb-20">
              {/* Shark in Tire */}
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-red-600 rounded-full relative border-4 border-red-800">
                  {/* Face */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center relative">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 border-2 border-white rounded-b-full border-t-0"></div>
                    </div>
                  </div>
                  {/* Tire ring */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-900 rounded-full"></div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-800 rounded-full border-2 border-white"></div>
                </div>
              </div>

              {/* Fire Character with Clock */}
              <div className="relative">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-orange-500 rounded-lg relative">
                  <div className="absolute inset-2 bg-gradient-to-br from-yellow-400 to-orange-600 rounded"></div>
                  {/* Clock face */}
                  <div className="absolute inset-4 bg-white rounded-full border-2 border-black flex items-center justify-center">
                    <div className="text-xs md:text-sm font-bold">12</div>
                  </div>
                </div>
                {/* Legs */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-orange-600"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-700 rounded-full"></div>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-16 md:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Carousel Container */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Cards */}
          {cards.map((card, index) => {
            const offset = index - currentIndex
            const isActive = index === currentIndex

            return (
              <div
                key={card.id}
                className={`absolute transition-all duration-500 ease-out rounded-2xl md:rounded-3xl overflow-hidden ${
                  isActive
                    ? 'w-[90%] max-w-[800px] h-[500px] md:h-[600px] z-20 opacity-100 scale-100'
                    : offset === -1
                    ? 'hidden md:block w-[50%] max-w-[400px] h-[480px] z-10 opacity-60 scale-90 -translate-x-[35%]'
                    : offset === 1
                    ? 'hidden md:block w-[50%] max-w-[400px] h-[480px] z-10 opacity-60 scale-90 translate-x-[35%]'
                    : 'hidden'
                }`}
                style={{
                  boxShadow: isActive
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div className={`w-full h-full bg-gradient-to-br ${card.gradient} relative`}>
                  {renderVisual(card.visual)}
                </div>
              </div>
            )
          })}

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="hidden md:flex absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-black/80 hover:bg-black text-white rounded-full items-center justify-center transition-all shadow-lg backdrop-blur-sm border border-white/10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-black/80 hover:bg-black text-white rounded-full items-center justify-center transition-all shadow-lg backdrop-blur-sm border border-white/10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile Navigation */}
          <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all shadow-lg"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all shadow-lg"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-3 h-3 md:w-4 md:h-4' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

