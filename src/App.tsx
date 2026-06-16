import { useState } from "react"
import { Footer } from "./components/Footer"
import { Timer } from "./components/Timer"
import { requestNotificationPermission } from "@/utils/notifications"


function App() {
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const [time, setTime] = useState<number>(14)

  const handleStartTimer = () => {
    console.log('jelou');

    requestNotificationPermission()
    setIsTimerActive(!isTimerActive)
  }
  return (
    <div className="w-full h-screen bg-base-300 flex flex-col text-center">
      <h1>BigBrain Breaks</h1>
      <p>Brain breaks reminder and pomodoro timer</p>
      {isTimerActive ? <Timer timerTime={time} setTimerTime={setTime} timerName={'Timer name'} isTimerActive setIsTimerActive={setIsTimerActive} /> : null}

      <button onClick={() => handleStartTimer()}> {isTimerActive ? "STOP" : "START"}</button>
      <Footer />
    </div>
  )
}

export default App
