import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt, faEnvelope, faMobile, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../components/Header'
import Prompt from '../components/Prompt'
import ScrollButton from '../components/ScrollButton'

type ContactsEntryProps = {
  href: string,
  icon: IconDefinition,
  text: string,
}
const ContactsEntry: React.FC<ContactsEntryProps> = ({ href, icon, text }) => {
  return <a rel='noreferrer' target='_blank' href={href}><span>|- <FontAwesomeIcon icon={icon} /> <span className='underline'>{text}</span></span></a>
}

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
              <ContactsEntry href='https://www.linkedin.com/in/francesco-galisi/' icon={faLinkedin} text='Linkedin' />,
              <ContactsEntry href='https://github.com/Censacrof' icon={faGithub} text='GitHub' />,
              <ContactsEntry href='mailto:galisifrancesco@gmail.com' icon={faEnvelope} text='galisifrancesco@gmail.com' />,
              <ContactsEntry href='tel:+393393688907' icon={faMobile} text='+39 3393688907' />,
            ],
          },
        ]} />
      </div>
      <ScrollButton />
    </div>
  )
}
