export interface Ticket{
    id?: string;
    descripcion:string;
    status: TicketStatus | string;
    createdAt:string|Date;
}
 
export type TicketStatus = 'empty' | 'in-progress' | 'finished';
