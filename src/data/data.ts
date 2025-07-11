import type { Data } from "@/types/data.types"

const titles = [
    "Ready, set, quiz! Choose your topic and start your trivia adventure!",
    "It's trivia time! Select your category and get started!",
    "Get ready for a fun trivia challenge! Pick your questions and go!",
    "Think you're a trivia master? Show us what you know!",
    "Choose your trivia challenge and let the quiz begin!",
    "Trivia awaits! Pick your category and let's get started!",
    "Test your knowledge with a fun trivia quiz. Ready? Go!",
    "Pick your trivia adventure and start quizzing!",
    "Time to prove your trivia skills! Choose a topic and start now!",
    "Challenge your mind—pick a topic and test your smarts!",
    "Quick! Grab a topic before your brain realizes what’s happening!"
] as const

const data: Data = {
    amount: [
        {
            value: "10"
        },
        {
            value: "20"
        },
        {
            value: "30"
        },
        {
            value: "40"
        },
        {
            value: "50"
        },
    ],
    category: [
        { name: "General Knowledge", value: "9" },
        { name: "Entertainment: Books", value: "10" },
        { name: "Entertainment: Film", value: "11" },
        { name: "Entertainment: Music", value: "12" },
        { name: "Entertainment: Musicals & Theatres", value: "13" },
        { name: "Entertainment: Television", value: "14" },
        { name: "Entertainment: Video Games", value: "15" },
        { name: "Entertainment: Board Games", value: "16" },
        { name: "Science & Nature", value: "17" },
        { name: "Science: Computers", value: "18" },
        { name: "Science: Mathematics", value: "19" },
        { name: "Mythology", value: "20" },
        { name: "Sports", value: "21" },
        { name: "Geography", value: "22" },
        { name: "History", value: "23" },
        { name: "Politics", value: "24" },
        { name: "Art", value: "25" },
        { name: "Celebrities", value: "26" },
        { name: "Animals", value: "27" },
        { name: "Vehicles", value: "28" },
        { name: "Entertainment: Comics", value: "29" },
        { name: "Science: Gadgets", value: "30" },
        { name: "Entertainment: Japanese Anime & Manga", value: "31" },
        { name: "Entertainment: Cartoon & Animations", value: "32" }
    ],
    difficulty: [
        { name: "Easy", value: "easy" },
        { name: "Medium", value: "medium" },
        { name: "Hard", value: "hard" }
    ] 
}


const randomTitle = titles[Math.floor(Math.random() * titles.length)]

export { data, randomTitle }