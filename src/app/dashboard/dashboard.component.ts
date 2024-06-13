import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service'
import { EventMessageService } from '../event-message.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  products: any[]=[];

  constructor(private api: ApiServiceService, private eventMessage: EventMessageService) {
    this.eventMessage.messages$.subscribe((ev: { type: string; }) => {
      if(ev.type === 'GamesSelected') {
        this.api.getGames().then(data => {
          this.products=data;
        })
      } else if(ev.type === 'MoviesSelected'){
        this.api.getMovies().then(data => {
          this.products=data;
        })
      } else {
        this.api.getBooks().then(data => {
          this.products=data;
        })
      }
    })
   }
 
  ngOnInit(): void {
    this.api.getProducts().then(data => {
      this.products=data;
    })
  }
}
