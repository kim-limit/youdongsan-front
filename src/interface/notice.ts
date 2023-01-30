export interface INotice {
    id: number;
    title: string;
    content: string;
    writer: string;
    views: number;
    createdAt: Date;
    updatedAt: Date;
}
