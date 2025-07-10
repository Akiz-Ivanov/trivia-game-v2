export type MinimalMode = {
    animations: boolean
    illustrations: boolean
    backgroundPattern: boolean
    backgroundGlow: boolean
    sound: boolean
}

export type MinimalModeContextType = {
    minimalMode: MinimalMode
    toggleAnimations: () => void
    toggleIllustrations: () => void
    toggleBackgroundPattern: () => void
    toggleBackgroundGlow: () => void
    toggleSound: () => void
}