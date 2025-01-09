import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Image from "next/image";
export interface ImageBoxType {
  imageBox: { image: string }[];
}
const images: ImageBoxType[] = [
  {
    imageBox: [
      { image: "/deluxe-yachting-zurich_logo.png" },
      { image: "/deluxe-yachting-zurich_logo.png" },
    ],
  },
  {
    imageBox: [
      { image: "/home_banner_image1.jpg" },
      { image: "/home_banner_image1.jpg" },
    ],
  },
  {
    imageBox: [
      { image: "/home_banner_image2.webp" },
      { image: "/home_banner_image2.webp" },
    ],
  },
];
export function CarouselBox() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="inline-block lg:col-span-2 lg:grid lg:grid-cols-3 lg:gap-3">
      {images &&
        images.length > 0 &&
        images.map((boxs, box_index) => (
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            key={box_index}
          >
            <CarouselContent>
              {boxs.imageBox.map((box, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="rounded-none drop-shadow-sm hover:shadow-xl border-hidden bg-background">
                      <CardContent className="flex aspect-square items-center justify-center p-0 relative overflow-hidden">
                        <Image
                          src={box.image}
                          alt="image gallery"
                          height={1000}
                          width={1000}
                          className="w-full h-full md:col-span-2 block hover:scale-110 hover:transition"
                        />
                        <div className="text-4xl font-semibold absolute top-4 bottom-4 right-4 left-4 grid place-content-center bg-primary/15 hover:bg-primary/30">
                          <Button>{index + 1}</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="border border-red-700" /> */}
            {/* <CarouselNext className="border border-red-700" /> */}
          </Carousel>
        ))}
    </div>
  );
}
