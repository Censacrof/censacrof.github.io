import { useEffect, useRef, useState } from "react"


type ScrollProgressIndicatorpProps = {
  checkpoints: Array<String>
}
const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorpProps> = ({ checkpoints }) => {
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0)
  
  return (
    <div className="fixed mx-auto bottom-8 inset-x-0 flex flex-row text-surface justify-between items-center w-60 h-[2px] overflow-y-visible bg-secondary">
      { checkpoints.map((checkpoint, i) => (
          <div key={i} className={`${i == currentCheckpoint ? 'bg-primary' : 'bg-surface rounded-[50%]'} transition-all duration-200 ease-in w-4 h-4 transform rotate-45 tran`} 
            onClick={(event) => {
            setCurrentCheckpoint(i)
          }} ></div> 
        ))
      }
    </div>
  )
}


export default ScrollProgressIndicator