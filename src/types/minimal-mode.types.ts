export type MinimalMode = {
    animations: boolean
    illustrations: boolean
    backgroundPattern: boolean
    sound: boolean
}

export type MinimalModeContextType = {
    minimalMode: MinimalMode
    toggleAnimations: () => void
    toggleIllustrations: () => void
    toggleSound: () => void
    toggleBackgroundPattern: () => void
}