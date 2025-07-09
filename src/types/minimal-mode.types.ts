export type MinimalMode = {
    animations: boolean
    illustrations: boolean
    sound: boolean
}

export type MinimalModeContextType = {
    minimalMode: MinimalMode
    toggleAnimations: () => void
    toggleIllustrations: () => void
    toggleSound: () => void
}