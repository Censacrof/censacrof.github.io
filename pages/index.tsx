import { Monda } from '@next/font/google'
import { useEffect, useState } from 'react'

const monda = Monda({weight: '400'})

const Header = () => {
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <div className='flex-grow flex flex-row justify-center items-center'>
        <div className="bg-primary rounded-full h-[70px] w-[70px]"></div>
      </div>
      <div className="flex flex-col justify-center gap-2 items-center text-surface text-3xl ">
        <h1 className='text-3xl'>Francesco Galisi</h1>
        <p className='font-barcode-text'>Software Engineer</p>
      </div>      
    </div>
  )
}

type PromptProps = {
  text: string,
}
const Prompt: React.FC<PromptProps> = ({ text }) => {
  const [currentText, setCurrentText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(false)

  useEffect(() => {
    const delay = Math.floor(Math.random() * 100 + 10)

    const timeout = setTimeout(() => {
      setCurrentText(currentText => text.substring(0, currentText.length + 1))
    }, delay)
    return () => clearTimeout(timeout)
  }, [currentText])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(cursorVisible => !cursorVisible)
    }, 500)
    return () => clearInterval(interval)
  }, [currentText])

  return (
    <div className="flex flex-row text-surface mt-10 gap-2">
      <div className='font-bold'>{'>'}</div>
      <div>
        {currentText}{cursorVisible ? '_' : ''}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="container mx-auto px-5 py-4">
      <div className='flex flex-col'>
        <Header />
        <Prompt text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil' />
      </div>
    </div>
  )
}
