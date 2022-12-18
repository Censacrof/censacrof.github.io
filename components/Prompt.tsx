import { useEffect, useState } from "react"

type PromptProps = {
  text: string,
}
const Prompt: React.FC<PromptProps> = ({ text }) => {
  const [currentText, setCurrentText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const delay = Math.floor(Math.random() * 60 + 30)
    
    const timeout = setTimeout(() => {
      setCurrentText(currentText => text.substring(0, currentText.length + 1))
      setCursorVisible(true)
    }, delay)
    return () => clearTimeout(timeout)
  }, [currentText])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(cursorVisible => !cursorVisible)
    }, 500)
    return () => clearInterval(interval)
  }, [currentText])

  return (
    <div className="flex flex-row justify-start w-full text-surface mt-10 gap-2">
      <span className="font-bold">{'> '}</span>{currentText}{cursorVisible ? '_' : ''}
    </div>
  )
}

export default Prompt