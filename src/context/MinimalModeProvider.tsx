import { useState } from "react"
import type { MinimalMode } from "@/types/minimal-mode.types"
import { MinimalModeContext } from "./MinimalModeContext"

export function MinimalModeProvider({ children }: { children: React.ReactNode }) {

    const [minimalMode, setMinimalMode] = useState<MinimalMode>({
        animations: true,
        illustrations: true,
        backgroundPattern: true,
        sound: true
    })

    const toggleAnimations = () => {
        setMinimalMode(prevMode => ({
            ...prevMode,
            animations: !prevMode.animations
        }))
    }

    const toggleIllustrations = () => {
        setMinimalMode(prevMode => ({
            ...prevMode,
            illustrations: !prevMode.illustrations
        }))
    }

    const toggleBackgroundPattern = () => {
        setMinimalMode(prevMode => ({
            ...prevMode,
            backgroundPattern: !prevMode.backgroundPattern
        }))
    }

    const toggleSound = () => {
        setMinimalMode(prevMode => ({
            ...prevMode,
            sound: !prevMode.sound
        }))
    }

    return (
        <MinimalModeContext.Provider value={{
            minimalMode,
            toggleAnimations,
            toggleIllustrations,
            toggleSound,
            toggleBackgroundPattern
        }}>
            {children}
        </MinimalModeContext.Provider>
    )
}