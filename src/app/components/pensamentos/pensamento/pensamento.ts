import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  imports: [],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento {
  pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
  };
}
