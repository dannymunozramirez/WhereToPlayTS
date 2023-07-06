export interface UserInterface {
    occupation: string;
    name: string;
    alias: string;
    id: number
}

export interface GameInterface {
    id: string;
    name: string;
    type: string;
    organizer: UserInterface;
    address: string;
}

