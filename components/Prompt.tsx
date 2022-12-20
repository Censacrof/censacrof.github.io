import { useEffect, useState } from "react"

type QAndA = {
  question: string,
  answer: string | Array<JSX.Element>,
}

enum QAndARendererState {
  idle,
  doingQ,
  pause,
  doingA,
  done,
}

type QAndARendererProps = {
  qAndA: QAndA,
  active: boolean,
  onDone?: () => void,
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
    
    const timeout = setTimeout(() => {
      setState(QAndARendererState.doingQ)
    }, 500)

    return () => clearTimeout(timeout)
  })

  // doingQ
  useEffect(() => {
    if (!active || state != QAndARendererState.doingQ)
      return
    
    if (currentCharQ >= qAndA.question.length) {
      setState(QAndARendererState.pause)
      return
    }

    const timeOut = setTimeout(() => {
      setCurrentCharQ(currentCharQ => Math.min(currentCharQ + 1, qAndA.question.length))
    }, 60)

    return () => clearTimeout(timeOut)
  }, [state, currentCharQ])

  // pause
  useEffect(() => {
    if (!active || state != QAndARendererState.pause)
      return
    
    const timeout = setTimeout(() => {
      setState(QAndARendererState.doingA)
    }, 500)

    return () => clearTimeout(timeout)
  })

  // doingA
  useEffect(() => {
    if (!active || state != QAndARendererState.doingA)
      return
    
    if (currentCharA >= qAndA.answer.length) {
      setState(() => QAndARendererState.done)
      return
    }

    let millis = 10
    if (typeof qAndA.answer === 'string'){
      if (currentCharA > 0) {
        const c = qAndA.answer[currentCharA - 1]
        if (c == ',')
          millis = 250
        else if (c == '.')
          millis = 500
      }
    } else {
      millis = 60
    }

    const timeOut = setTimeout(() => {
      setCurrentCharA(currentCharA => Math.min(currentCharA + 1, qAndA.answer.length))
    }, millis)

    return () => clearTimeout(timeOut)
  }, [state, currentCharA])

  // done
  useEffect(() => {
    if (!active || state != QAndARendererState.done)
      return
    
    if (onDone != null)
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

  let linesInA;  
  if (typeof qAndA.answer === 'string') {
    linesInA = (qAndA.answer as string).substring(0, currentCharA).split('\n');
  } else {
    linesInA = qAndA.answer.slice(0, currentCharA)
  }

  return (
    <div className="font-chivo-mono text-surface gap-2">
      <p><span className="font-bold">{active || state != QAndARendererState.idle ? '> ' : ''}</span><span className="text-primary-variant">{qAndA.question.substring(0, currentCharQ)}</span>{cursorVisible && state == QAndARendererState.doingQ ? '_' : ''}</p>
      {
        linesInA.map((answer, i) => (
          <p key={i}>{answer}{active && cursorVisible && (i == linesInA.length - 1 && state != QAndARendererState.doingQ && state != QAndARendererState.idle) ? '_' : ''}</p>
        ))
      }
    </div>
  )
}


type PromptProps = {
  qAndAs: Array<QAndA>,
  active: boolean,
  onDone?: () => void,
}
const Prompt: React.FC<PromptProps> = ({ qAndAs, active, onDone }) => {
  const [currentActiveQAndA, setCurrentActiveQAndA] = useState(0)

  const incrementCurrentLine = () => {
    setCurrentActiveQAndA((currentLine) => Math.min(currentLine + 1, qAndAs.length - 1))
  }

  return (
    <div className="flex flex-col gap-4 mt-10 justify-start items-start w-full">
      {
        qAndAs.map((qAndA, i) => {
          return (
            <QAndARenderer key={i} qAndA={qAndA} active={active && (i == currentActiveQAndA)} 
              onDone={i < qAndAs.length - 1 ? incrementCurrentLine : () => {
                if (onDone)
                  onDone()
              }} />
          )
        })
      }
    </div>    
  )
}

export default Prompt