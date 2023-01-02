import { RefObject, useEffect, useState } from "react"


type ScrollProgressIndicatorpProps = {
  checkpoints: Array<RefObject<HTMLDivElement>>
}
const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorpProps> = ({ checkpoints }) => {
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const currentInFocus = [...checkpoints]
        .filter((checkpoint) => {
          const current = checkpoint.current!
          return window.pageYOffset <= (current.offsetTop + current.offsetHeight)
        })
        .sort((a, b) => a.current!.offsetTop - b.current!.offsetTop)

      console.log(currentInFocus)
      const i = Math.max(0, checkpoints.length - currentInFocus.length)
      setCurrentCheckpoint(i)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [checkpoints])

  return (
    <div className="fixed bottom-0 h-16 inset-x-0 w-full flex flex-col items-center justify-center bg-background shadow-[0px_0px_32px_4px] shadow-background">
      <div className="flex flex-row text-surface justify-between items-center w-60 h-[2px] overflow-y-visible bg-secondary">
        {checkpoints.map((checkpoint, i) => (
          <div key={i} className={`${i == currentCheckpoint ? 'bg-primary scale-125' : 'bg-surface rounded-[50%]'} transition-all duration-200 ease-in w-4 h-4 transform rotate-45 tran`}
            onClick={(event) => {
              if (checkpoints[i] == null || checkpoints[i].current == null) {
                return
              }

              const element = checkpoints[i].current!.scrollIntoView(true)
            }} ></div>
        ))
        }
      </div>
    </div>
  )
}


export default ScrollProgressIndicator