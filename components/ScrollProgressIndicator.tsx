import { useEffect, useRef } from "react"

const ScrollProgressIndicator = () => {
  const nCheckpoints = 5
  const currentCheckpoint = 0

  const checkpoints = []
  for (let i = 0; i < nCheckpoints; i++) {
    checkpoints.push(
      <div key={i} className={`${i == currentCheckpoint ? 'bg-primary' : 'bg-surface rounded-full'} w-3 h-3 transform rotate-45 tran`}></div>
    )
  }
  
  return (
    <div className="fixed mx-auto bottom-8 inset-x-0 flex flex-row text-surface justify-between items-center w-60 h-[2px] overflow-y-visible bg-secondary">
      { checkpoints }
    </div>
  )
}


export default ScrollProgressIndicator