import { useEffect } from "react"
import { triggerNotification } from "@/utils/notifications"

export const Timer = ({ timerTime, setTimerTime, timerName, isTimerActive, setIsTimerActive }: { timerTime: number, setTimerTime: (arg0: number) => void, timerName: string, isTimerActive: boolean, setIsTimerActive: (arg0: boolean) => void }) => {
  useEffect(() => {
    setTimeout(() => {
      if (timerTime > 0) {
        setTimerTime(timerTime - 1)
      } else {
        triggerNotification('System Alert', 'A background process has completed.');
        setIsTimerActive(false)
        setTimerTime(10)
      }
    }, 1000)
  }, [timerTime, isTimerActive, setTimerTime, setIsTimerActive])

  return (
    <div>
      {timerTime}
      {timerName}
    </div>
  )
}
