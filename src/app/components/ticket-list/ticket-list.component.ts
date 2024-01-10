import { Component, Input } from '@angular/core';
import { Ticket } from '../../interface/tickets.interface';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.scss'
})
export class TicketListComponent {
  @Input() ticketList?: Ticket[] | null;
}
