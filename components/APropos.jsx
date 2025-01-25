import { Waterfall } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Photo from "@/components/Photo";

const montserrat = Montserrat({
  weight: '200',
  style: 'normal',
  subsets: ['latin'],
})

const waterfall = Waterfall({
  weight: '400',
  style: 'normal',
  subsets: ['serif'],
})

export default function APropos() {
  return (
    <div className="container mx-auto flex flex-col mt-8 mb-6 px-4 pt-[100px]">
      {/* Titre */}
      <h1 className={`${waterfall.className} text-6xl xl:text-xxl md:text-6xl lg:text-[100px] text-[#7b66ff] ml-0 xl:ml-auto pb-2 md:pb-5`}>
        Bonjour ! Moi c'est Chloé,
      </h1>

      {/* Conteneur Flex pour photo et texte */}
      <div className='flex flex-col md:flex-row justify-between gap-8 mt-8'>
        {/* Photo */}
        <div className='flex-1'>
          <Photo />
        </div>

        {/* Texte */}
        <p className={`${montserrat.className} text-s md:text-lg lg:text-4xl text-justify text-[#47464b] leading-loose md:leading-relaxed lg:leading-normal md:w-3/4`}>
          je suis une Franco-Canadienne <span className="font-semibold"> passionnée par la création et la stratégie web.</span> <br />
          Forte de quatre années d’expérience dans le marketing, je mets aujourd’hui
          mon expertise au service des entreprises désireuses de <span className='font-semibold'>valoriser leur image et de se démarquer,</span>
          tant à travers leur site internet que leurs réseaux sociaux. <br />
          <span className='font-semibold'>Mon objectif : transformer vos idées en un design unique, mémorable et à la hauteur de vos ambitions.</span>
        </p>
      </div>
    </div>
  );
}
