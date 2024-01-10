import { Ticket } from './../interface/tickets.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuid } from "uuid";

//Tickets de Prueba
const ticketsPrueba: Ticket[] = [
  {
    id: uuid(),
    descripcion: 'Corrame MRS-L01',
    status: 'empty',
    createdAt: new Date(),
  },
  {
    id: uuid(),
    descripcion: 'Ticket 2',
    status: 'empty',
    createdAt: new Date(),
  },
  {
    id: uuid(),
    descripcion: 'Ticket 3',
    status: 'empty',
    createdAt: new Date('2023-09-30'),
  },
  {
    id: uuid(),
    descripcion: 'Ticket 4',
    status: 'empty',
    createdAt: new Date(),
  },
  {
    id: uuid(),
    descripcion: 'Ticket 5',
    status: 'empty',
    createdAt: new Date('2023-09-30'),
  },
  
];

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private ticketsDePrueba: Ticket[] = ticketsPrueba;
  private ticketsSubject = new BehaviorSubject<Ticket[]>(this.ticketsDePrueba);

  constructor() {
    this.LoadFromLocalStorage();
  }
  //Agrega Un Ticket
  public addTicket(newTicket: Ticket) {
    this.ticketsDePrueba.push(newTicket);
    this.update();
  }

 public removeTicket(id:string|undefined):void {
    const newTickets = this.ticketsDePrueba.filter(Ticket => Ticket.id !== id);
    this.ticketsDePrueba = newTickets;
    this.ticketsSubject.next(newTickets);
  }

  //Obtiene todos los tickets
  public getTickets(): Observable<Ticket[]> {
    return this.ticketsSubject.asObservable();
  }

  //Carga desde el localstorage
  private LoadFromLocalStorage() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTickets = localStorage.getItem('tickets');
      if (storedTickets) {
        this.ticketsDePrueba = JSON.parse(storedTickets);
      }
    }
  }


  private updateLocalStorage() {
    localStorage.setItem('tickets', JSON.stringify(this.ticketsDePrueba));
  }


  private update() {
    this.ticketsSubject.next(this.ticketsDePrueba);
    this.updateLocalStorage();
  }


}

/*
  public addTicket(newTicket: Ticket) {
    const  newTicket: Ticket={id:uuid(), ...Tickets };
    this.ticketsDePrueba.push(newTicket);
    this.update();
  }
*/
  //Borra Un Ticket
  /*
  public removeTicket(ticketID: Ticket["id"]) {
    const newTickets = this.ticketsDePrueba.filter((Ticket) => Ticket.id !== ticketID);
    this.ticketsDePrueba = newTickets;
    this.ticketsSubject.next(this.ticketsDePrueba);
    console.log(newTickets);
    
  }
*/