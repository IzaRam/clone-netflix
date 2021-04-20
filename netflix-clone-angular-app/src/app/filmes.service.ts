import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Filme } from './filme';


const url = "http://localhost:3000/filmes/"

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  buscar(id: number): Observable<Filme> {
    return this.http.get<Filme>(url + id);
  }

  buscarTodos(): Observable<Filme[]> {
    return this.http.get<Filme[]>(url);
  }

}
