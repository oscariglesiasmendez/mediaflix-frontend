import { Component, Input } from '@angular/core';
import { Product } from '../models/interfaces';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() item: Product|undefined
  
  constructor(
    private router: Router
    ) {
      
    }

    goToProductDetails(item:Product | undefined) {
      this.router.navigate(['/product-detail', item?.productId]);
    }

}


