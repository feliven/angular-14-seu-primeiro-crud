import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  imports: [],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento {
  @Input() pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };
}
