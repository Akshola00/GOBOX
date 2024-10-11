import * as React from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import EventCardVertical from "./EventCardVertical"

export default function MyCarouselEvents() {
  return (
    <Carousel className="w-full max-w-sm mx-auto">
      <CarouselContent className="-ml-2 md:-ml-4">
        {/* this is it */}
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-[calc(50%-0.5rem)] md:basis-[calc(50%-1rem)]">
        <EventCardVertical />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}