import { Routes } from '@angular/router';
import { CriarPensamento } from './components/pensamentos/criar-pensamento/criar-pensamento';
import { ListarPensamento } from './components/pensamentos/listar-pensamento/listar-pensamento';
import { ExcluirPensamento } from './components/pensamentos/excluir-pensamento/excluir-pensamento';

export const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  {
    path: 'criarPensamento',
    component: CriarPensamento,
  },

  {
    path: 'listarPensamento',
    component: ListarPensamento,
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamento,
  },
];
