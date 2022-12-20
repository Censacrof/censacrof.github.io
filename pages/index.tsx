import Header from '../components/Header'
import Prompt from '../components/Prompt'
import ScrollButton from '../components/ScrollButton'

export default function Home() {
  return (
    <div className="container mx-auto px-5 py-4">
      <div className='flex flex-col items-center'>
        <Header />
        <Prompt active={true} qAndAs={[
          {
            question: `whoami`,
            answer: `Hi, I'm Francesco Galisi. I'm an engineer.\nI solve problems`,
          },
          {
            question: `cat contacts.txt`,
            answer: `m +39 3393688907`
                + `\nl Linkedin`
                + `\ng GitHub`,
          },
        ]} />
      </div>
      <ScrollButton />
    </div>
  )
}
