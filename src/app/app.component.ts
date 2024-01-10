import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ticket } from './interface/tickets.interface';
import { TicketsService } from './services/tickets.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public Tickets?: Ticket[];
  private ticketService = inject(TicketsService);
  private ticketSubscription:Subscription;

  constructor(){
    this.ticketSubscription = this.ticketService.getTickets().subscribe(tickets=>{
      this.Tickets=tickets;
    })
  }
  ngDestroy(){
    this.ticketSubscription.unsubscribe()
  }
}
