import Image from 'next/image'

function BannerImage() {

  return (
    <div className=" mt-[1rem] items-center justify-center container mx-auto ">
     <Image
      src="/photo.png"
      width={500}
      height={100}
      className="w-full  top-0 h-[200px] left-0 rounded-2xl"      layout='responsive'
      objectFit='cover'
      alt="Picture of the author"
    />
    </div>
  )
}
export default BannerImage
