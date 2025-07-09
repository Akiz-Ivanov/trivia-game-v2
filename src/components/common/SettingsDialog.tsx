import { useMinimalMode } from "@/hooks/useMinimalMode"
import { Settings } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog"

const SettingsDialog = () => {

    const { minimalMode, toggleAnimations, toggleIllustrations, toggleSound } = useMinimalMode()

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
            <DialogContent  className="flex flex-col gap-6">
                <DialogHeader>
                    <DialogTitle  className="text-center text-18-22">Settings</DialogTitle>
                    <DialogDescription >
                        Toggle optional settings to customize your game.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-6">
                    <Switch
                        id="animations-toggle"
                        checked={minimalMode.animations}
                        onCheckedChange={toggleAnimations}
                        className="scale-135 cursor-pointer"
                    />
                    <label htmlFor="animations-toggle">Animations</label>
                </div>
                <div className="flex items-center gap-6">
                    <Switch
                        id="illustrations-toggle"
                        checked={minimalMode.illustrations}
                        onCheckedChange={toggleIllustrations}
                        className="scale-135 cursor-pointer"
                    />
                    <label htmlFor="illustrations-toggle">Illustrations</label>
                </div>
                <div className="flex items-center gap-6">
                    <Switch
                        id="sound-toggle"
                        checked={minimalMode.sound}
                        onCheckedChange={toggleSound}
                        className="scale-135 cursor-pointer"
                    />
                    <label htmlFor="sound-toggle">Sound</label>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SettingsDialog