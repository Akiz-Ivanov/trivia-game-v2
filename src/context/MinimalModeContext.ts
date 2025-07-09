import { createContext } from "react"
import type { MinimalModeContextType } from "@/types/minimal-mode.types"

export const MinimalModeContext = createContext<MinimalModeContextType | undefined>(undefined)