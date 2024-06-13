import { Component } from '@angular/core';
import { EventMessageService } from './event-message.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mediaflix-frontend';
  constructor(private eventMessage: EventMessageService) { }
  goToGames(){
    this.eventMessage.emitGamesSelected(true);
  }

  goToMovies(){
    this.eventMessage.emitMoviesSelected(true);
  }

  goToBooks(){
    this.eventMessage.emitBooksSelected(true);
  }
}
