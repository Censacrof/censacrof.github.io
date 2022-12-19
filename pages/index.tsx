import Header from '../components/Header'
import Prompt from '../components/Prompt'
import ScrollButton from '../components/ScrollButton'

export default function Home() {
  return (
    <div className="container mx-auto px-5 py-4">
      <div className='flex flex-col items-center'>
        <Header />
        <Prompt qAndAs={[
          {
            question: `whoami`,
            answer: `Hi, I'm Francesco Galisi. I'm an engineer.\nI solve problems`,
          },
          {
            question: `locate social`,
            answer: `You can find me on {insert links here}`,
          },
        ]} />
      </div>
      <ScrollButton />
    </div>
  )
}
