import { Monda } from '@next/font/google'

const monda = Monda({weight: '400'})

const Header = () => {
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <div className='flex-grow flex flex-row justify-center items-center'>
        <div className="bg-primary rounded-full h-[70px] w-[70px]"></div>
      </div>
      <div className="flex flex-col justify-center gap-2 items-center">
        <h1 className='text-3xl text-surface'>Francesco Galisi</h1>
        <p className='text-3xl font-barcode-text text-surface'>Software Engineer</p>
      </div>      
    </div>
  )
}

export default function Home() {
  return (
    <div className="container mx-auto px-3 py-4">
      <div className='flex flex-col'>
        <Header />
      </div>
    </div>
  )
}
