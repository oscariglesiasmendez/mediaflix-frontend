import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return lastValueFrom(this.http.get<any[]>('http://167.99.206.88:8080/api/products/all'));
  }

  getBooks(){
    return lastValueFrom(this.http.get<any[]>('http://167.99.206.88:8080/api/books/all'));
  }

  getMovies(){
    return lastValueFrom(this.http.get<any[]>('http://167.99.206.88:8080/api/movies/all'));
  }

  getGames(){
    return lastValueFrom(this.http.get<any[]>('http://167.99.206.88:8080/api/games/all'));
  }

  getProductById(id:any) {
    let url = `http://167.99.206.88:8080/api/products/${id}`;    
    return lastValueFrom(this.http.get<any>(url,));
  }

  getBookById(id:any){
    let url = `http://167.99.206.88:8080/api/books/${id}`;
    return lastValueFrom(this.http.get<any>(url));
  }

  getMovieById(id:any){
    let url = `http://167.99.206.88:8080/api/movies/${id}`
    return lastValueFrom(this.http.get<any>(url));
  }

  getGameById(id:any){
    let url = `http://167.99.206.88:8080/api/games/${id}`
    return lastValueFrom(this.http.get<any>(url));
  }
}
