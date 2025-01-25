import Image from 'next/image'

export default function Photo() {
  return (

      <Image
          src="/chloe.png"
          width={500}
          height={100}
          className=" w-full h-auto object-cover rounded-2xl"
          layout='responsive '
          // objectFit='cover'
          alt="Picture of the chloe"
        />
  )
}
