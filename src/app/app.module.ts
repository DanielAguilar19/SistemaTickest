import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { ItemTicketComponent } from './components/item-ticket/item-ticket.component';
import { DatePipe } from "./pipes/date.pipe";

@NgModule({
    declarations: [
        AppComponent,
        ItemTicketComponent,
        TicketFormComponent,
        TicketListComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DatePipe
    ]
})
export class AppModule { }
