import { useEffect, useState } from "react"

type QAndA = {question: string, answer: string}

enum QAndARendererState {
  idle,
  doingQ,
  doingA,
  done,
}

type QAndARendererProps = {
  qAndA: QAndA,
  active: boolean,
  onDone: () => void,
}
const QAndARenderer: React.FC<QAndARendererProps> = ({ qAndA, active, onDone }) => {
  const [state, setState] = useState(QAndARendererState.idle)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [currentCharQ, setCurrentCharQ] = useState(0)
  const [currentCharA, setCurrentCharA] = useState(0)

  // idle
  useEffect(() => {
    if (!active || state != QAndARendererState.idle)
      return
    
    setState(QAndARendererState.doingQ)
  })

  // doingQ
  useEffect(() => {
    if (!active || state != QAndARendererState.doingQ)
      return
    
    if (currentCharQ >= qAndA.question.length) {
      setState(QAndARendererState.doingA)
      return
    }

    const timeOut = setTimeout(() => {
      setCurrentCharQ(currentCharQ => Math.min(currentCharQ + 1, qAndA.question.length))
    }, 30)

    return () => clearTimeout(timeOut)
  }, [state, currentCharQ])

  // doingA
  useEffect(() => {
    if (!active || state != QAndARendererState.doingA)
      return
    
    if (currentCharA >= qAndA.answer.length) {
      setState(() => QAndARendererState.done)
      return
    }

    const timeOut = setTimeout(() => {
      setCurrentCharA(currentCharA => Math.min(currentCharA + 1, qAndA.answer.length))
    }, 30)

    return () => clearTimeout(timeOut)
  }, [state, currentCharA])

  // done
  useEffect(() => {
    if (!active || state != QAndARendererState.done)
      return
    
    onDone()
  }, [state])

  // blinking cursor effect
  useEffect(() => {
    if (!active) {
      setCursorVisible(false)
      return
    }

    const interval = setInterval(() => {
      setCursorVisible(cursorVisible => !cursorVisible)
    }, 500)
    return () => clearInterval(interval)
  }, [active, cursorVisible])

  // always make cursor visible when simulating typing
  useEffect(() => {
    setCursorVisible(true)
  }, [currentCharQ, currentCharA])

  return (
    <div className="text-surface gap-2">
      {
        active ? (
          <>
            <p><span className="font-bold">{'> '}</span><span className="text-primary-variant">{qAndA.question.substring(0, currentCharQ)}</span>{cursorVisible && state == QAndARendererState.doingQ ? '_' : ''}</p>
            <p>{qAndA.answer.substring(0, currentCharA)}{cursorVisible && state == QAndARendererState.doingA ? '_' : ''}</p>
          </>
        ) : <></>
      }
    </div>
  )
}


type PromptProps = {
  qAndAs: Array<QAndA>,
}
const Prompt: React.FC<PromptProps> = ({ qAndAs }) => {
  const [currentLine, setCurrentLine] = useState(0)

  const incrementCurrentLine = () => {
    setCurrentLine((currentLine) => currentLine + 1)
  }

  return (
    <div className="flex flex-col gap-4 mt-10 justify-start items-start w-full">
      {
        qAndAs.map((qAndA, i) => {
          return (
            <QAndARenderer key={i} qAndA={qAndA} active={i <= currentLine} onDone={incrementCurrentLine} />
          )
        })
      }
    </div>    
  )
}

export default Prompt