import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Funcionario } from './Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  url = '/funcionario'

  constructor(private http: HttpClient) { }

  addFuncionario(nome, cargo, id){
    const objFuncionario ={
      nome: nome,
      cargo: cargo,
      id: id,
    };
    return this.http.post(`${this.url}/add`, objFuncionario)
    .subscribe(res => console.log('ok'))
  }
}
