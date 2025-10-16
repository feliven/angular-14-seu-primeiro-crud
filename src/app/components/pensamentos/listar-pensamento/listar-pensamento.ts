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
  listaPensamentos = [];
}
