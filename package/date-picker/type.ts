export enum ComponentView {
    DAYS = "days"
}

export interface Props {
    dateValue: string;
}

export interface DateStore {
    date: Date;
    status: string;
}
