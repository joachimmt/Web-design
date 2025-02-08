import { Button } from "@/components/ui/button";
import CardService from "@/components/CardService";
import { cards } from "@/lib/data";

export default function service() {
  return (
    <>
      <div className="bg-[#9747ff]  py-[10rem]">
        <div className="container flex mx-auto justify-between">
          <div>Vidéo</div>
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
        <div className="  mx-auto sm:text-justify">
          <h1 className="text-4xl sm:text-5xl text-[#9747ff] font-bold mb-8">
            Service
          </h1>

          <p className="font-bold text-[#47464b]/75 text-2xl md:text-4xl mb-4">
            Votre réussite en ligne repose sur plusieurs domaines clés.
          </p>

          <p className="text-[#47464b]/75 text-xl md:text-4xl leading-relaxed">
            En vous offrant une gamme de
            <span className="font-bold">
              {" "}
              services variés et complémentaires
            </span>
            , je conçois des stratégies personnalisées et sur mesure pour
            <span className="font-bold">
              {" "}
              répondre précisément à vos objectifs.
            </span>
          </p>

          <p className="text-[#47464b]/75 text-xl md:text-4xl leading-relaxed mt-4">
            Mon approche ciblée vous permet
            <span className="font-bold">
              {" "}
              d’optimiser votre présence en ligne et d’atteindre des résultats
              concrets.
            </span>
          </p>

          <h3 className="mt-8 text-[#9747ff] text-2xl md:text-4xl font-bold">
            Contactez-moi et élaborons ensemble votre stratégie sur mesure
          </h3>
        </div>

        <div className="container mx-auto mt-7">
          <p className="mb-[5rem]">salut</p>
          <div className="justify-between"></div>
          <div className="  grid sm:grid-cols-1 lg:grid-cols-2 p-6  gap-8 justify-items-center">
            {cards.map((card) => (
              <CardService key={card.id} card={card} />
            ))}
          </div>{" "}
        </div>
      </div>
    </>
  );
}
