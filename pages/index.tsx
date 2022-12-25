import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt, faEnvelope, faMobile, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../components/Header'
import Prompt from '../components/Prompt'
import ScrollButton from '../components/ScrollButton'
import ScrollProgressIndicator from '../components/ScrollProgressIndicator'

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
              <ContactsEntry key='Linkedin' href='https://www.linkedin.com/in/francesco-galisi/' icon={faLinkedin} text='Linkedin' />,
              <ContactsEntry key='GitHub' href='https://github.com/Censacrof' icon={faGithub} text='GitHub' />,
              <ContactsEntry key='email' href='mailto:galisifrancesco@gmail.com' icon={faEnvelope} text='galisifrancesco@gmail.com' />,
              <ContactsEntry key='phone' href='tel:+393393688907' icon={faMobile} text='+39 3393688907' />,
            ],
          },
        ]} />
      <p className='text-surface my-36'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris elit, ornare eget feugiat quis, ullamcorper eu purus. Quisque eleifend sollicitudin lorem, eget tincidunt tortor pretium vitae. Vivamus vulputate arcu ac libero luctus lacinia. Nulla convallis, turpis eget consequat tristique, ligula orci semper est, ut blandit justo purus vitae tortor. Ut fringilla libero eu facilisis viverra. Vestibulum interdum eros eget nisi maximus, vitae hendrerit tortor hendrerit. Praesent sollicitudin arcu id congue feugiat. Etiam sed bibendum sapien. Cras venenatis hendrerit mauris, vel imperdiet ipsum tempus at.</p>
      <p className='text-surface my-36'>Integer egestas lorem nec auctor facilisis. Morbi quis bibendum felis. Quisque interdum porta tortor et sagittis. Phasellus tristique, magna imperdiet viverra mollis, nibh velit condimentum diam, vel dictum ipsum ipsum a urna. Nam faucibus nulla at augue vehicula, ut pellentesque tortor luctus. Nullam pharetra dapibus metus, a luctus enim interdum eu. Suspendisse scelerisque risus mattis, molestie lorem quis, posuere nibh. Suspendisse potenti. Praesent dictum ac velit semper efficitur. Sed vitae euismod risus. Cras nec dignissim dolor, nec sagittis metus. Vestibulum nec laoreet justo, quis pellentesque est. Mauris rutrum lectus risus, consequat feugiat turpis congue id.</p>
      <p className='text-surface my-36'>Fusce vitae velit eget justo tempus viverra. Etiam vestibulum odio vehicula auctor elementum. Aliquam cursus nunc sed est euismod, quis interdum justo semper. Vivamus sit amet aliquet neque. Phasellus purus neque, suscipit eu mauris eget, interdum lacinia mauris. Aliquam tristique ipsum ut sem blandit luctus. Aliquam convallis lacus in nibh dictum egestas. Nunc aliquet leo at dui luctus, quis facilisis turpis rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque malesuada pellentesque ex a tempor. Nunc eu interdum nulla. Integer quis purus sed nibh porta auctor. Sed risus nisi, sagittis quis elementum sodales, hendrerit quis eros.</p>
      </div>
      <ScrollProgressIndicator checkpoints={ ['a', 'b', 'c', 'd', 'e'] } />
      <ScrollButton />
    </div>
  )
}
