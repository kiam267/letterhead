
import React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

function AutoCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, })
  );

  return (
    <div className="overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseOver={plugin.current.reset}
      >
        <CarouselContent className="px-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 border-2 p-2 m-3 rounded-3xl border-orange-200 shadow-sm"
            >
              <div className="p-1">
                <Image
                  src="/letterhead.jpg"
                  alt="letterhead"
                  height={400}
                  width={400}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default AutoCarousel;
