export class Product {
    public productId?: number;
    public title?: string;
    public description?: string;
    public stock?: number;
    public language?: string;
    public productType?: ProductType;
    public price?: number;
    public rating?: number;
    public url?: string;
    public genre?: string;
    public releaseDate?: Date;
    public available: boolean = true;
  }

  export enum ProductType {
    BOOK = 'BOOK',
    MOVIE = 'MOVIE',
    GAME = 'GAME',
  }