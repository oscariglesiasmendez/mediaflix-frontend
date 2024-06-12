import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/interfaces';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

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
    private route: ActivatedRoute
    ) {

  }

  ngOnInit(): void { 
    console.log(this.itemId)
    this.itemId = this.route.snapshot.paramMap.get('id');
    
    const index = this.games.findIndex((item) => parseInt(item.productId) === parseInt(this.itemId));
    if (index !== -1) {
      this.item = this.games[index];
    }

    console.log(this.item)
  }

  ratingcount=0;
  totalrating=0;

  Finalrating:any;

  ratingcontrol=new FormControl(0);
  GetRating(){
    this.ratingcount++;
    this.totalrating +=this.ratingcontrol?.value || 0;
    //console.log(this.ratingcontrol.value);
    this.Finalrating= (this.totalrating/this.ratingcount).toFixed(2)
  }


  games: any[] = [
    {
      productId: 1,
      title: 'Hogwarts Legacy',
      description:
        'Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.',
      stock: 10,
      language: 'Multiidioma',
      productType: 'GAME',
      price: 35,
      rating: 2,
      url: 'https://howlongtobeat.com/games/83145_Hogwarts_Legacy.jpg',
      genre: 'Acción, Aventura, Rol',
      releaseDate: '2023-02-10',
      available: true,
      developer: 'Avalanche Software',
      platform: 'Playstation',
      duration: 27,
    },
    {
      productId: 2,
      title: 'Star Wars Jedi: Survivor',
      description:
        'La historia de Cal Kestis continúa en STAR WARS Jedi: Survivor™, un juego de acción en tercera persona de proporciones galácticas.',
      stock: 5,
      language: 'Multiidioma',
      productType: 'GAME',
      price: 35.9,
      rating: 4.2,
      url: 'https://howlongtobeat.com/games/108358_Star_Wars_Jedi_Survivor.jpg',
      genre: 'Acción, Aventura',
      releaseDate: '2023-04-28',
      available: true,
      developer: 'Electronic Arts',
      platform: 'Playstation',
      duration: 20.5,
    },
    {
      productId: 3,
      title: 'Elden Ring',
      description:
        'EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.',
      stock: 8,
      language: 'Multiidioma',
      productType: 'GAME',
      price: 35.99,
      rating: 4.75,
      url: 'https://howlongtobeat.com/games/68151_Elden_Ring.jpg',
      genre: 'Acción, Aventura',
      releaseDate: '2022-02-25',
      available: true,
      developer: 'FromSoftware Inc.',
      platform: 'Playstation',
      duration: 59,
    },
    {
      productId: 4,
      title: 'Rise of the Ronin',
      description:
        'Rise of the Ronin es un GAME de acción y rol en mundo abierto exclusivo de PlayStation 5 desarrollado por Team NINJA que se enfoca en el combate y en la historia épica de un samurai del Japón del siglo XIX que buscará forjar su propio nombre y que acabará decidiendo el destino del país nipón.',
      stock: 15,
      language: 'Multiidioma',
      productType: 'GAME',
      price: 69.9,
      rating: 4.15,
      url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co59v0.png',
      genre: 'Acción, Aventura, Rol',
      releaseDate: '2024-03-22',
      available: true,
      developer: 'Team Ninja',
      platform: 'Playstation',
      duration: 60,
    },
    {
      productId: 5,
      title: 'Tekken 8',
      description:
        'Prepárate para el próximo capítulo de la legendaria franquicia del juego de lucha: TEKKEN 8.',
      stock: 10,
      language: 'Multiidioma',
      productType: 'GAME',
      price: 52.99,
      rating: 4.5,
      url: 'https://howlongtobeat.com/games/113569_Tekken_8.jpg',
      genre: 'Acción',
      releaseDate: '2024-01-26',
      available: true,
      developer: 'Bandai Namco',
      platform: 'Playstation',
      duration: 4,
    },
    {
      productId: 6,
      title: 'Metal Gear Solid Master Collection',
      description:
        'La primera entrega en 3D de la serie METAL GEAR introduce una trama de acción y sigilo con escenas de acción en vivo y cinemáticas con una innovadora mecánica de juego.',
      stock: 5,
      language: 'Multiidioma',
      productType: 'GAME',
      price: 40.94,
      rating: 4.2,
      url: 'https://howlongtobeat.com/games/129257_Metal_Gear_Solid_Master_Collection_Vol1.jpg',
      genre: 'Acción',
      releaseDate: '2023-10-24',
      available: true,
      developer: 'KONAMI',
      platform: 'Playstation',
      duration: 20.5,
    },
    {
      productId: 7,
      title: 'The Last Of Us Parte I Remake',
      description:
        'Disfruta de la emotiva historia y los inolvidables personajes de The Last of Us, ganador de más de 200 premios de Juego del Año. En una civilización asolada, plagada de infectados y crueles supervivientes, Joel, nuestro exhausto protagonista, es contratado para sacar a escondidas a una chica de 14 años, Ellie, de una zona militar en cuarentena. Pero lo que comienza siendo una simple tarea, pronto se transforma en un brutal viaje por el país.',
      stock: 8,
      language: 'Multiidioma',
      productType: 'GAME',
      price: 56.9,
      rating: 4.75,
      url: 'https://howlongtobeat.com/games/109104_The_Last_of_Us_Part_I.jpg',
      genre: 'Acción, Aventura',
      releaseDate: '2023-03-28',
      available: true,
      developer: 'Naughty Dog',
      platform: 'Playstation',
      duration: 14,
    },
    {
      productId: 8,
      title: 'The Last of Us: Parte II Remastered',
      description:
        'Sobrevive tanto como puedas en cada partida mientras decides tu camino a través de una serie de encuentros aleatorios con diferentes enemigos y lugares inolvidables de toda la Parte II, todo ello culminando en tensas batallas contra jefes.',
      stock: 15,
      language: 'Multiidioma',
      productType: 'GAME',
      price: 41.99,
      rating: 5,
      url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co7dw9.png',
      genre: 'Acción, Aventura',
      releaseDate: '2024-01-19',
      available: true,
      developer: 'Naughty Dog',
      platform: 'Playstation',
      duration: 26.5,
    },
    {
      productId: 9,
      title: 'God of War',
      description:
        'Kratos ha dejado atrás su venganza contra los dioses del Olimpo y vive ahora como un hombre en los dominios de los dioses y monstruos nórdicos. En este mundo cruel e implacable debe luchar para sobrevivir… y enseñar a su hijo a hacerlo también.',
      stock: 5,
      language: 'Multiidioma',
      productType: 'GAME',
      price: 16.99,
      rating: 4.8,
      url: 'https://howlongtobeat.com/games/38050_God_of_War.jpg',
      genre: 'Acción, Aventura, Rol',
      releaseDate: '2022-01-14',
      available: true,
      developer: 'Santa Monica Studio',
      platform: 'Playstation',
      duration: 20.5,
    },
  ];
}
