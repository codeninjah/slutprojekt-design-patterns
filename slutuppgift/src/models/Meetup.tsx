
export interface IMeetup {
    id: string,
    name: string,
    date: string,
    comments: [],
}


export type Props = {
    view: (item: IMeetup) => void
}


