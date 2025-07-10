import { useState, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary';

import { preloadAllCategoryImages } from '@/assets/imports'
import triviadbApi from './services/triviadbApi'
import Form from "./components/form/Form"
import GameManager from './components/game/GameManager'
import ErrorScreen from './components/common/ErrorScreen'
import LoadingScreen from './components/common/LoadingScreen'
import SettingsDialog from './components/common/SettingsDialog'
import { useMinimalMode } from "@/hooks/useMinimalMode"
import { useSoundManager } from './hooks/useSoundManager';

//* ====== Types ======
import type { TriviaQuestion } from './types/trivia-db.types'
import type { FormData } from "./types/form.types"
import type { Screen } from './types/screen.types'

function App(): React.JSX.Element {

  //* Static value for the initial form data
  const initialFormData: FormData = {
    amount: "10",
    category: "Any",
    difficulty: "Any"
  }

  //* ====== Form State ======
  const [formData, setFormData] = useState(initialFormData)   // Stores quiz config: amount, category, difficulty

  //* ====== Trivia Game State ======
  const [triviaData, setTriviaData] = useState<TriviaQuestion[]>([])  // Fetched trivia questions

  //* ====== UI & Flow State ======
  const [screen, setScreen] = useState<Screen>("form")
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true)

  //* ====== Function to handle form data changes ======
  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }))
  }

  //* ====== Start the game function ======
  const startGame = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setScreen("loading")

    try {
      const { amount, category, difficulty } = formData

      //* Fetch trivia data
      const triviaData = await triviadbApi.fetchTriviaData(amount, category, difficulty)

      if (!triviaData || triviaData.length === 0) {
        setScreen("error")
        return
      }

      //* Preload all category images
      await preloadAllCategoryImages()

      //* Set trivia data and start game
      setTriviaData(triviaData)
      setScreen("game")

    } catch (err) {
      console.error("Trivia fetch error:", err)
      setScreen("error")
    }

    setIsFirstRender(false)
  }

  //*====== Reset the game ======
  const resetGame = () => {
    setTriviaData([])
    setScreen("form")
  }

  const { minimalMode } = useMinimalMode()

  //* ====== Apply minimal mode ====== 
  useEffect(() => {
    document.body.classList.toggle('minimal-mode-animations', !minimalMode.animations || !minimalMode.backgroundPattern)
    document.body.classList.toggle('minimal-mode-illustrations', !minimalMode.illustrations || !minimalMode.backgroundPattern)
  }, [minimalMode])

  //* ====== Apply sound ======
  useSoundManager(minimalMode.sound)

  return (
    <main className='w-full xs:px-16-128 xs:py-8 overflow-x-hidden'>
      <div className='flex flex-col items-center justify-center w-full max-w-[30rem] xs:max-w-[37.5rem]'>
        <SettingsDialog />
        <ErrorBoundary FallbackComponent={ErrorScreen} onReset={resetGame}>
          {screen === "loading" && (
            <LoadingScreen />
          )}
          {screen === "error" && (
            <ErrorScreen resetErrorBoundary={resetGame} />
          )}
          {screen === "form" && (
            <Form
              formData={formData}
              onSubmit={startGame}
              onChange={handleChange}
              isFirstRender={isFirstRender}
            />
          )}
          {screen === "game" && (
            <GameManager
              triviaData={triviaData}
              resetGame={resetGame}
            />
          )}
        </ErrorBoundary>
      </div>
    </main>
  )
}

export default App