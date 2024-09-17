export type Notes = {
    id: string
    tittle: string
    description : string
    date: Date
}

export type DraftNotes = Omit<Notes, 'id'>