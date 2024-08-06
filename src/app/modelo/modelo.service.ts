import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {
  urlModelo = 'https://localhost:7108/modelo';
  constructor(private http: HttpClient) { }

  getConsultaModelo(hora: number, circuito: string, tipo: string, dia: number, mes: number) {
    return this.http.get(`${this.urlModelo}?hora=${hora}&circuito=${circuito}&tipo=${tipo}&diaSemana=${dia}&mes=${mes}`);
  }
}
