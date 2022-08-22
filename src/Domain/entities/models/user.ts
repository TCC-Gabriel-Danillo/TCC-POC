export type Position = {
    latitude: number; 
    longitude: number;
}

export interface User {
    id: number; 
    username: string;
    phoroUrl?: string 
    email?: string; 
    techs?: Array<string>
    position: Position
}