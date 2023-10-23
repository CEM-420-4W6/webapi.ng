import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

class Cat {
  constructor(
    public id: number,
    public name: string
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  catName: string = '';
  cats: Cat[] = [];

  constructor(public http: HttpClient) { }

  async sendCat(){
    let res = await lastValueFrom(this.http.post<Cat>('http://localhost:5117/api/Cats', new Cat(0,this.catName)));
    console.log(res);

    this.catName = '';
  }

  async getCats() {
    this.cats = await lastValueFrom(this.http.get<Cat[]>('http://localhost:5117/api/Cats'));
  }

}
