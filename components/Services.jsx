import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: '200',
  style: 'normal',
  subsets: ['latin'],
})


export default function Services() {
  return (
    <div className="container mx-auto flex flex-col mt-8 mb-6 px-4 pt-1 md:pt-[100px]">
      <h1 className="text-xl md:text-6xl mr-auto text-[#7b66ff]  ">SERVICES</h1>
      <p className={`${montserrat.className} text-xl md:text-4xl md:w-3/4 mt-4 leading-loose md:leading-relaxed lg:leading-normal text-justify`}> Un site web à votre image est la clé d’un <span className='font-semibold'>résultat optimal.</span> <br />
      Je vous propose <span className='font-semibold'>une gamme complète de services sur mesure,</span> <br /> conçus pour répondre à tous vos besoins et <span className='font-semibold'>garantir votre réussite en ligne.</span> </p>
      <div className='flex mt-5 gap-8 justify-between'>
        <div>L</div>
        <div>LA</div>
        <div>LA</div>
      </div>
    </div>
  );
}
