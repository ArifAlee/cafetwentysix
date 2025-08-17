import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import picture from "../assets/special4.PNG";

const arr = [{ id:1, pic:picture},{id:1, pic:picture},{id:1, pic:picture},{id:1, pic:picture}];

export function CarouselOrientation({orientation}) {
  return (
    <Carousel orientation={orientation} opts={{ loop: true }} className="mt-15">
      <CarouselContent className="h-[200px] w-[350px] m-auto md:basis-1/2">
        {Array.from(arr).map((pic, index) => (
          <CarouselItem key={pic.id} className="p-auto md:basis-1/2">
            <div className="p-auto">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img src={pic.pic} className="w-stretch h-80" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
