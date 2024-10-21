'use client'

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import EventCardVertical from "./EventCardVertical"
import useEmblaCarousel from 'embla-carousel-react'

export default function MyCarouselEvents() {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  })

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent ref={emblaRef} className="-ml-2 md:-ml-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-3 basis-[200px] md:basis-[210px]">
              <div className="h-full">
                <EventCardVertical />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
        </div>
      </Carousel>
    </div>
  )
}