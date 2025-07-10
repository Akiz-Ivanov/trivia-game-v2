import { useState } from "react"
import { Power } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import RegularButton from "@/components/common/RegularButton"
import Card from "@/components/common/Card"
import Attributions from "./Attributions"
import { useMinimalMode } from "@/hooks/useMinimalMode"


import success from "@/assets/svgs/breaking-barriers-bro.svg"
// import okay from "@/assets/svgs/andalusian-fair.svg"

type ResultsProps = {
    score: number;
    numOfQuestions: number;
    resetGame: () => void;
}

const Results = ({ score, numOfQuestions, resetGame }: ResultsProps): React.JSX.Element => {

    const [imageLoaded, setImageLoaded] = useState<boolean>(false)

    const scorePercentage: number = (score / numOfQuestions) * 100

    const { minimalMode } = useMinimalMode()

    const message: string =
        scorePercentage < 33 ? "Better luck next time!"
            : scorePercentage < 66 ? "Pretty good!"
                : "Great job!"

    const messageStyle: string =
        scorePercentage < 33
            ? "#ff7043" : scorePercentage < 66
                ? "#9fffb8" : "#81c784";

    // const imgStyle = minimalMode.animations
    //     ? { animation: 'floatIn 1s ease-in-out', transform: 'none', opacity: 1 }
    //     : {};

    return (
        <Card
            role="region"
            aria-label="Quiz results"
            className={cn(
                "gap-3 px-8 py-4 relative",
                "shadow-[0_8px_32px_rgba(0,0,0,0.2)]", 
                "text-[1.2rem] max-w-[30rem]",
                minimalMode.backgroundGlow && "side-glow"
                )}
        >
            <p aria-live="polite" className="sr-only">
                You answered {score} out of {numOfQuestions} questions correctly. That's {scorePercentage.toFixed(0)}%. {message}
            </p>
            {minimalMode.illustrations && (
                <div className="img-wrapper min-w-[min(18.75rem,80vw)] min-h-[min(18.75rem,80vw)] relative">
                    {!imageLoaded && (
                        <Skeleton className="h-full w-full absolute " />
                    )}
                    <img
                        src={success}
                        alt="Success"
                        onLoad={() => setImageLoaded(true)}
                        className={cn(
                            'max-w-[18.75rem] object-contain transform will-change-transform transition-all duration-800 ease-out',
                            {
                                'opacity-100 translate-y-0': imageLoaded && minimalMode.animations,
                                'opacity-0 translate-y-5': !imageLoaded && minimalMode.animations,
                                'opacity-100 translate-y-0 transition-none': !minimalMode.animations,
                            }
                        )}
                    />
                </div>
            )}
            <h2>Correct answers: {score} out of {numOfQuestions}.</h2>
            <p>Percentage: {scorePercentage.toFixed(2)}%</p>
            <p style={{ color: messageStyle }}>{message}</p>
            <RegularButton
                type="button"
                onClick={resetGame}
                className="inline-flex items-center justify-center gap-1 rounded-[1.5rem] mt-3 px-8 py-3 
                    text-white shadow-[0_4px_20px_rgba(166,119,227,0.4)] transition-all duration-300 ease
                    bg-gradient-to-br from-[#6e8efb] to-[#a777e3] text-[1.2rem] will-change-transform
                    hover:from-[#7aa2ff] hover:to-[#c187f2] hover:shadow-[0_6px_25px_rgba(166,119,227,0.6)] hover:-translate-y-1 font-bold
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00c3ffcc] focus-visible:shadow-[0_0_0_4px_rgba(0,195,255,0.3)]
                    active:scale-95 active:shadow-[0_3px_10px_rgba(166,119,227,0.3)]
                    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
                Play Again <Power className="icon" size={20} strokeWidth={2} />
            </RegularButton>

            <Attributions />
        </Card>
    )
}

export default Results