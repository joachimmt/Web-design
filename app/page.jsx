import Image from 'next/image'


// Components
import BannerImage from "@/components/BannerImage";// import Image from 'next/image'
import APropos from "@/components/APropos";
import Services from "@/components/Services";
import Creations from "@/components/Creations";

export default function Home() {
  return (
    <div className="">
      {/* <p>Home page</p> */}
      <BannerImage />
      <APropos />
      <Services />
      <Creations />
    </div>
  );
}
