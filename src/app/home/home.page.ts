import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pet {
  id: number;
  type: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private apiUrl: string = 'http://localhost:8080/http://petstore-demo-endpoint.execute-api.com/petstore/pets';
  pets: Pet[] = [];

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    this.http.get(this.apiUrl).subscribe((d: any) => {{
      console.log(d);
      this.pets = d;
    }})
  }

  sortBy(property: string) {
    this.pets.sort((a: any, b: any) => (a[property] > b[property]) ? 1 : -1);
  }

}
