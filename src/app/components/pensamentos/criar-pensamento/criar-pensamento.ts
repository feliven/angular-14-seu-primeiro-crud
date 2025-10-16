import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule, RouterLink],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo2',
  };

  criarPensamento() {
    console.log('criado');
  }

  cancelar() {
    console.log('CANCELLED!');
  }
}
