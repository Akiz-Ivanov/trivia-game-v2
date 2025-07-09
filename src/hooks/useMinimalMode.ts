import { useContext } from "react"
import { MinimalModeContext } from "@/context/MinimalModeContext"

export function useMinimalMode() {
    const context = useContext(MinimalModeContext)
    if (!context) {
        throw new Error("useMinimalMode must be used within a MinimalModeProvider")
    }
    return context
}