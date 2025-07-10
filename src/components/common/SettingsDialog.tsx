import { useMinimalMode } from "@/hooks/useMinimalMode"
import { Settings } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog"
import ToggleSwitch from "./ToggleSwitch"

const SettingsDialog = () => {

    const { minimalMode, toggleAnimations, toggleIllustrations, toggleBackgroundPattern, toggleBackgroundGlow, toggleSound } = useMinimalMode()

    const { animations, illustrations, backgroundPattern, backgroundGlow, sound } = minimalMode

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    type="button"
                    aria-label="Open settings"
                    className="absolute top-4 right-4 z-50 rounded-full"
                >
                    <Settings className="size-7 text-accent hover:animate-[spin_1s_ease-in-out] cursor-pointer" />
                </button>
            </DialogTrigger>
            <DialogContent className="flex flex-col gap-6">
                <DialogHeader>
                    <DialogTitle className="text-center text-18-22">Settings</DialogTitle>
                    <DialogDescription className="text-center text-sm italic mb-2" >
                        Toggle optional settings to customize your game.
                    </DialogDescription>
                </DialogHeader>
                <ToggleSwitch id="animations-toggle" label="Animations" checked={animations} onChange={toggleAnimations} />
                <ToggleSwitch id="illustrations-toggle" label="Illustrations" checked={illustrations} onChange={toggleIllustrations} />
                <ToggleSwitch id="background-pattern-toggle" label="Background" checked={backgroundPattern} onChange={toggleBackgroundPattern} />
                <ToggleSwitch id="glow-toggle" label="Glow" checked={backgroundGlow} onChange={toggleBackgroundGlow} />
                <ToggleSwitch id="sound-toggle" label="Sound" checked={sound} onChange={toggleSound} />
            </DialogContent>
        </Dialog>
    )
}

export default SettingsDialog