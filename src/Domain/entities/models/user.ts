export type Position = {
    latitude: number 
    longitude: number
}

export interface User {
    id: number
    username: string
    profileUrl: string 
    position: Position 
    phoroUrl?: string 
    email?: string
    techs?: Array<string>
}