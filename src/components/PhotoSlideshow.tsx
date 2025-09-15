import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Import all slideshow images from src/assets/slide/*.webp
const slideModules = import.meta.glob('../assets/slide/*.webp', {
  eager: true,
  query: '?url',
  import: 'default'
}) as Record<string, string>

const slides = Object.entries(slideModules)
  .sort(([a], [b]) => {
    // Sort by numeric index in filename e.g., "Cavilha (3).webp"
    const idx = (p: string) => {
      const m = p.match(/\((\d+)\)\.webp$/)
      return m ? parseInt(m[1], 10) : 0
    }
    return idx(a) - idx(b)
  })
  .map(([path, url]) => {
    const name = path.split('/').pop() || ''
    const title = name.replace(/\.[^/.]+$/, '')
    return { image: url, title }
  })

const PhotoSlideshow = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="relative w-full">
      <div className="relative w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                <div className="relative h-[66vh]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Removed title/subtitle overlays for a cleaner slideshow */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-white/20 shadow-lg"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-white/20 shadow-lg"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Dots Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotoSlideshow