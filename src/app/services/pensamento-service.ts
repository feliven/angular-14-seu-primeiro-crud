import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfacePensamento } from '../interfaces/interface-pensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly enderecoAPI = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  getPensamentos(): Observable<InterfacePensamento[]> {
    return this.http.get<InterfacePensamento[]>(this.enderecoAPI);
  }

  setPensamento(pensamento: InterfacePensamento) {
    return this.http.post<InterfacePensamento>(this.enderecoAPI, pensamento);
  }
}
