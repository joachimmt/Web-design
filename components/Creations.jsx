"use client";
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import {Button} from "@heroui/react";

const montserrat = Montserrat({
  weight: '200',
  style: 'normal',
  subsets: ['latin'],
})


export default function Creations() {
  return (
    <div className="container mx-auto flex flex-col mt-8 mb-6 px-4 pt-1 md:pt-[100px]">
      <h1 className="text-xl md:text-6xl mr-auto text-[#7b66ff]  ">CRÉATIONS</h1>
        <div className='flex justify-between'>
          <p className={`${montserrat.className} text-xl md:text-4xl md:w-2/4 mt-4 leading-loose md:leading-relaxed lg:leading-normal text-justify`}> Ils m'ont fait confiance pour <span className='font-semibold'>se démarquer et affirmer leur présence en ligne avec succès.</span> <br />
          Grâce à une approche personnalisée et des solutions adaptées, nous avons construit ensemble <span className='font-semibold'>une visibilité durable et impactante.</span> <br />
          Prenons le temps de discuter de vos projets. <span className='font-semibold'>Votre réussite en ligne commence dès aujourd’hui, en un simple clic ! </span> </p>
         <div className=" mt-[1rem]  ">
              <Image
               src="/photoport.png"
               width={300}
               height={100}
               objectFit='cover'
               className='w-full h-auto rounded-2xl'
               alt="Picture of the author"
             />
             </div>
        </div>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>


  </div>
  );
}
