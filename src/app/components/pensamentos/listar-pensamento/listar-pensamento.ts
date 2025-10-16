import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pensamento',
  imports: [CommonModule, RouterLink, Pensamento],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento {
  listaPensamentos = [
    { conteudo: 'I love Angular', autoria: 'Nay', modelo: 'modelo3' },
    { conteudo: 'I love Angulars', autoria: 'Naya', modelo: 'modelo2' },
    {
      conteudo:
        'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      autoria: '',
      modelo: 'modelo1',
    },
    { conteudo: 'I love Angulares', autoria: 'Nay@', modelo: 'modelo1' },
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2',
    },
  ];
}
