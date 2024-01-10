import { Component, Input, inject } from '@angular/core';
import { TicketsService } from '../../services/tickets.services';
import { Ticket } from '../../interface/tickets.interface';

@Component({
  selector: 'app-item-ticket',
  templateUrl: './item-ticket.component.html',
  styleUrl: './item-ticket.component.scss'
})
export class ItemTicketComponent {
  @Input() unTicket?: Ticket;

  private TicketsService = inject (TicketsService);

  public removeTicket(){
    if (!this.unTicket) return
    this.TicketsService.removeTicket(this.unTicket.id)
  }
  
}
