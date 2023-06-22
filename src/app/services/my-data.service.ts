import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHome } from 'src/module/home.interface';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  myDataService() {
    throw new Error('Method not implemented.');
  }
  homeData$: Observable<IHome[]> | undefined;
  itemData$: Observable<any> | undefined;
  constructor(private http: HttpClient) {}
  getData(limit: number, offset: number): Observable<IHome[]> {
    return this.http.get<IHome[]>(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
  }
  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
