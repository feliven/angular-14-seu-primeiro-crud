import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InterfacePensamento } from '../../../interfaces/interface-pensamento';

@Component({
  selector: 'app-pensamento',
  imports: [NgClass],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento {
  @Input() pensamento: InterfacePensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
