import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Props {
  image: string[] | undefined;
}

export function CarouselImg({ image }: Props) {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent className="relative gap-16 md:gap-12">
        {image?.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square rounded-lg items-center justify-center p-6 relative">
                  <Image
                    src={_}
                    alt={""}
                    className="rounded-2xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    priority
                    sizes="100"
                    fill
                  ></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute z-10 left-2 disabled:hidden" />

      <CarouselNext className="absolute z-10 right-2 disabled:hidden" />
    </Carousel>
  );
}
