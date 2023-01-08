import Image from "next/image"

const Header = () => {
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <div className='flex-grow flex flex-row justify-center items-center'>
        <div className="bg-primary relative rounded-full h-[70px] w-[70px] overflow-hidden">
          <Image
            src='https://github.com/Censacrof.png'
            alt='Profile picture'
            fill
            className='w-full'
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 items-center text-surface text-3xl ">
        <h1 className='text-3xl'>Francesco Galisi</h1>
        <p className='font-barcode-text'>Software Engineer</p>
      </div>      
    </div>
  )
}

export default Header