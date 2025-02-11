import { Button } from "@/components/ui/button";

export default function creations() {
  return (
    <div className="mx-auto">
      <div className="bg-[#9747ff]  py-[10rem]">
        <div className="container flex mx-auto justify-between">
          <div>Vidéo</div>
          <div>
            <p>Ils m'ont fait confiance</p>
            <Button size="xl" className="max-w-40 py-3 bg-[#fdc350] font-bold">
              Me contacter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
