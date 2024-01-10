import { TicketStatus } from "../interface/tickets.interface";
import { traduccion } from "../utils/traductions";


export const formOptions: {name:string, value: TicketStatus}[]=[
    {value: 'empty', name: traduccion["empty"]},
    {value: 'in-progress', name: traduccion["in-progress"]},
    {value: 'finished', name: traduccion["finished"]},

];