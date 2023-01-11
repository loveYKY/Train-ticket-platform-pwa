export interface passenger {
    id: number;
    licenceNo: string;
    name: string;
    seatType: seatType | null;
    ticketType: string;
    birthday?: string;
    gender?: string;
    followAdult?: number;
    [key: string]: any;
}

export interface seatType {
    seatLine: number;
    seatPosition: string;
}

export interface orderStateType {
    trainNumber: string;
    departStation: string;
    arriveStation: string;
    seat: string;
    departDate: number;
    arriveDate: number;
    departTimeStr: string;
    arriveTimeStr: string;
    durationStr: string;
    price: string;
    passengers: passenger[];
}

export interface actionType {
    type: string;
    name: string;
    value: any;
}
