import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interface/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  /* Variables de entorno */
  private baseURL: string = environment.baseUrl; 

  /* Inyectamos el servicio para hacer las peticiones Http */
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes`);
  }

  getHeroeById(id: string): Observable<Heroe> {
    const url = `${this.baseURL}/heroes/${id}`;

    return this.http.get<Heroe>(url);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes?q=${termino}&_limit=6`);
  }
}
