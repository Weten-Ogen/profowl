'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"


export function CarouselBg() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-full h-50vh absolute inset-0 -z-20 overflow-hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="w-full">
              <Card>
                <CardContent 
                className="w-full object-contain max-w-full items-center mt-12 justify-center h-[60vh] ">
                    <Image
                        className=" w-full h-auto object-cover"
                        alt=""
                        src='/hero.jpg'
                        width={800}
                        height={600}

                    />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  )
}
