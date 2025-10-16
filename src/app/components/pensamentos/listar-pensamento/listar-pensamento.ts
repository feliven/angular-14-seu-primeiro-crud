import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento';
import { InterfacePensamento } from '../../../interfaces/interface-pensamento';

@Component({
  selector: 'app-listar-pensamento',
  imports: [CommonModule, RouterLink, Pensamento],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento {
  listaPensamentos: InterfacePensamento[] = [];
}
