"use client";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";

import Image from "next/image";
// import {Button} from "@heroui/react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const montserrat = Montserrat({
  weight: "200",
  style: "normal",
  subsets: ["latin"],
});

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const array1 = ["/photo.png", "/chloe.png", "/chloe.png", "/chloe.png"];

export default function Creations() {
  return (
    <div className="container mx-auto flex flex-col mt-8 mb-6 px-4 pt-1 md:pt-[100px]">
      <h1 className="text-xl md:text-6xl mr-auto text-[#7b66ff]">CRÉATIONS</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <p
          className={`${montserrat.className} text-xl md:text-4xl md:w-2/4 mt-4 leading-loose md:leading-relaxed lg:leading-normal text-justify`}
        >
          Ils m'ont fait confiance pour{" "}
          <span className="font-semibold">
            se démarquer et affirmer leur présence en ligne avec succès.
          </span>
          <br />
          Grâce à une approche personnalisée et des solutions adaptées, nous
          avons construit ensemble{" "}
          <span className="font-semibold">
            une visibilité durable et impactante.
          </span>
          <br />
          Prenons le temps de discuter de vos projets.{" "}
          <span className="font-semibold">
            Votre réussite en ligne commence dès aujourd’hui, en un simple clic
            !{" "}
          </span>
        </p>
        <div className="mt-[1rem] md:mt-0 md:ml-4">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {array1.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={src}
                          alt={`Image ${index + 1}`}
                          width={200}
                          height={200}
                          className="rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <button className="bg-[#7b66ff] mt-4 md:mt-[40px] text-white font-bold py-4 px-8 rounded-xl ml-6 mr-6 md:ml-[199px] md:mr-[1000px] self-center">
        PARLONS-EN
      </button>
    </div>
  );
}
