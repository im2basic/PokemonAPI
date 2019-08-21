import { Injectable } from '@angular/core';

//---IMPORT---
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//--WHERE WE CREATE A OBJECT---
export class HttpService {

  constructor( private _http: HttpClient ) {
    this.getPokemon();
    // this.getAnimals();
  }


  // --OBSERVABLE METHOD-- SUBCRIBE TO A URL IN BACKEND
  // getAnimals(){
  //   return this._http.get('/home');
  // }

  getPokemon(){
    return this._http.get('https://pokeapi.co/api/v2/pokemon/1/');

  }
}
