import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdOutlineMode } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { PiStrategy } from "react-icons/pi";
import { FiCheckCircle, FiRefreshCcw } from "react-icons/fi";

export default function Apropos() {
  return (
    <>
      <div className="bg-[#9747ff]  py-[10rem]">
        <div className="container flex mx-auto justify-between">
          <div>
            <Image
              src="/propos.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div>
            <p>
              Gagnez du temps avec un service clé en main qui <br />
              <span className="text-[#fdc350] font-semibold">
                vous simplifiera la vie
              </span>
            </p>
            <Button size="xl" className="max-w-40 py-3 bg-[#fdc350] font-bold">
              Me contacter
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-20 px-4">
        <div className="mx-auto sm:text-justify">
          <h1 className="text-4xl sm:text-5xl text-[#9747ff] font-bold mb-8">
            MON APPROCHE
          </h1>

          <p className="font-bold text-[#47464b]/75 text-2xl md:text-4xl mb-4">
            Dans un monde où la première impression est essentielle, votre
            présence en ligne doit être à la fois unique, impactante et fidèle à
            votre identité.
          </p>

          <p className="text-[#47464b]/75 text-xl md:text-4xl leading-relaxed">
            De la conception à la mise en ligne, je m’occupe de tout, en
            veillant à créer un site qui vous ressemble et qui parle à votre
            audience.
          </p>

          <p className="text-[#47464b]/75 text-xl md:text-4xl leading-relaxed mt-4">
            Mon approche du web design repose sur{" "}
            <span className="font-bold text-[#9747ff]">4 piliers</span> :
          </p>

          <div className="grid grid-cols-2 gap-9 justify-items-center rounded-xl border-spacing-3 border-gray-400 py-9 mt-8 bg-gray-100 dark:bg-gray-700 drop-shadow-xl pb-4">
            <div className="flex items-center space-x-5  w-full pr-4 pl-4">
              <span className="text-5xl">
                <MdOutlineMode className="h-10 w-10 text-[#9747ff] font-bold" />
              </span>
              <div>
                <h3 className="text-[#9747ff] text-xl font-semibold">
                  Personnalisation
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Écoute et compréhension des besoins pour créer un site qui
                  reflète votre identité et vos objectifs.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 w-full pr-4 pl-4">
              <span className="text-5xl">
                <IoTimeOutline className="h-10 w-10 text-[#9747ff] font-bold" />
              </span>
              <div>
                <h3 className="text-[#9747ff] text-xl font-semibold">
                  Gain de temps
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Capacité à faire gagner du temps – En tout me confiant
                  l’aspect technique et créatif, vous êtes libérés des
                  contraintes pour vous concentrer sur votre activité.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 w-full pr-4 pl-4">
              <span className="text-5xl">
                <PiStrategy className="h-10 w-10 text-[#9747ff]" />
              </span>
              <div>
                <h3 className="text-[#9747ff] text-xl font-semibold">
                  Accompagnement stratégique
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Vous guider dans les meilleures pratiques digitales et
                  maximiser l’impact de votre site.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 w-full pr-4 pl-4">
              <span className="text-5xl">
                <FiCheckCircle className="h-10 w-10 text-[#9747ff]" />
              </span>
              <div>
                <h3 className="text-[#9747ff] text-xl font-semibold">
                  Fiabilité et réactivité
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Assurer le suivi, les mises à jour et résoudre rapidement les
                  éventuels problèmes techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
