import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScrollButton = () => {
  return (
    <div className="fixed mx-auto inset-x-0 flex flex-row bottom-8 text-surface text-5xl justify-center items-center w-20 h-20 animate-bounce">
      <FontAwesomeIcon icon={ faAngleDown } />
    </div>
  )
}

export default ScrollButton