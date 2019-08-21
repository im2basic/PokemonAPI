import { Component, OnInit } from '@angular/core';

//--IMPORT--
import {HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pokemon Api';
  animals;
  pokemon;
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.getPokemon();
  }

  getPokemon(){
    let observable = this._httpService.getPokemon();
    observable.subscribe(data => {
      this.pokemon = data['results'];
      console.log(data);
      console.log(data['species']['name']);
      console.log(data['abilities'][0]['ability']['name']);
    });
  }

}
