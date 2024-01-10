import { Component, inject } from '@angular/core';
import { formOptions } from '../../config/options';
import { TicketStatus, Ticket } from '../../interface/tickets.interface';
import { TicketsService } from '../../services/tickets.services';
import { v4 as uuid } from "uuid";


@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.scss'
})
export class TicketFormComponent {
  private ticketService = inject(TicketsService);

  public newTicketDescription: string = '';
  public newTicketStatus:  {value: TicketStatus, name: string}  = formOptions[0];
  public statusOptions = formOptions



  public addTicket() {

    const newTicket: Ticket = {
      id: uuid(),
      descripcion: this.newTicketDescription,
      status: this.newTicketStatus.value,
      createdAt: new Date(),
    };


    this.ticketService.addTicket(newTicket);
    this.newTicketDescription = '';
    this.newTicketStatus = formOptions[0];

  }
}
