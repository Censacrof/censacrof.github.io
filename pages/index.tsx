import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            answer: [
              <a target={'_blank'} href='https://www.linkedin.com/in/francesco-galisi/'><span><FontAwesomeIcon icon={ faLinkedin } /> GitHub</span></a>,
              <a target={'_blank'} href='https://github.com/Censacrof'><span><FontAwesomeIcon icon={ faGithub } /> GitHub</span></a>,
              <a target={'_blank'} href='mailto:galisifrancesco@gmail.com'><span><FontAwesomeIcon icon={ faEnvelope } /> galisifrancesco@gmail.com</span></a>,
              <a target={'_blank'} href='tel:+393393688907'><span><FontAwesomeIcon icon={ faMobile } /> +39 3393688907</span></a>,
            ],
          },
        ]} />
      </div>
      <ScrollButton />
    </div>
  )
}
