import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/interfaces';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ApiServiceService } from '../api-service.service'
import { EventMessageService } from '../event-message.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  
  item: Product | undefined;
  itemId : any

  // Aqui tengo que hacer un getbyId


  constructor(
    private route: ActivatedRoute,
    private api: ApiServiceService,
    private eventMessage: EventMessageService,
    private router: Router
    ) {

    this.eventMessage.messages$.subscribe((ev: { type: string; }) => {
      if(ev.type === 'GamesSelected') {
        this.router.navigate(['/dashboard']);
      } else if(ev.type === 'MoviesSelected'){
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    })
  }

  async ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    await this.getprod();


    console.log(this.item)
  }

  async getprod(){
    await this.api.getProductById(this.itemId).then(data => {
      console.log(data)
      if(data.productType=='BOOK'){
        this.api.getBookById(this.itemId).then(data => {
          this.item=data;
        })
      } else if(data.productType=='MOVIE'){
        this.api.getMovieById(this.itemId).then(data => {
          this.item=data;
        })
      } else {
        this.api.getGameById(this.itemId).then(data => {
          this.item=data;
        })
      }
    })
  }
  
}
