
export interface Employee {
    id: number;
    birthday: Date;
    name: string;
    imgUrl?: string;
    cards?: Card[];
    wishes?: Toast[];
    admin?: boolean;
    ex?: boolean;
}

export interface Month {
    date: Date;
    cards: Card[];
}

export interface Card {
    date: Date;
    month: Month;
    type: CardType;
    employee: Employee;
    presents: Present[];
    inCharge: Employee;
    toasts: Toast[];
}

export enum CardType {
    Birthday,
    Newborn,
    Quit
}

export interface Present {
    card: Card;
    name: string;
    description: string;
    url: string;
    likes: number;
}

export interface Toast {
    card?: Card;
    toaster: Employee;
    wish?: string;
    wishImgUrl?: string;
    likes?: number;
}
