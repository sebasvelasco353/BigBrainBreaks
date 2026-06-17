import { useState } from "react"
import { Footer } from "./components/Footer"
import { Timer } from "./components/Timer"
import { NewTimerModal } from "./components/NewTimerModal"
import { requestNotificationPermission } from "./utils/notifications"

// FIXME: @ alias not working on the linter but working on compile time

function App() {
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [time, setTime] = useState<number>(14)

  const handleToggleTimer = () => {
    requestNotificationPermission()
    setTime(10)
    setIsTimerActive(!isTimerActive)
  }

  return (
    <div className="w-full h-screen bg-base-200 flex flex-col text-center">
      <h1>BigBrain Breaks</h1>
      <p>Brain breaks reminder and pomodoro timer</p>
      <main className="flex flex-row justify-around p-6 w-full h-full">
        <section className="flex-3">
          {isTimerActive ? <Timer timerTime={time} setTimerTime={setTime} timerName={'Timer name'} isTimerActive setIsTimerActive={setIsTimerActive} /> : null}
          <button onClick={() => setIsModalOpen(true)}>Add new Timer</button>
          <button onClick={() => handleToggleTimer()}> {isTimerActive ? "STOP" : "START"}</button>
        </section>
        <section className="flex-1">

          {/* TODO: Add sidebar menu component and functionality */}
          <p>Sidebar Menu</p>
          <ul>
            <li>TimersQueue</li>
            <li>TimersHistory</li>
            <li>Settings</li>
          </ul>
        </section>
      </main>
      <NewTimerModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Footer />
    </div>
  )
}

export default App
