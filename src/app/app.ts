import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Cabecalho } from './components/cabecalho/cabecalho';
import { Rodape } from './components/rodape/rodape';
import { CriarPensamento } from './components/pensamentos/criar-pensamento/criar-pensamento';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Cabecalho, Rodape, CriarPensamento],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('memoteca');
}
