export type FormData = {
    amount: string
    category: string
    difficulty: "easy" | "medium" | "hard" | "Any"
}

export type FormProps = {
    formData: FormData
    onSubmit: React.FormEventHandler<HTMLFormElement>
    onChange: (key: string, value: string) => void
    isFirstRender: boolean
}