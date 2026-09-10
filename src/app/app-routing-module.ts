import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ListarProdutos } from './components/produtos/listar-produtos/listar-produtos';
import { CadastrarProduto } from './components/produtos/cadastrar-produto/cadastrar-produto';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'produtos',component: ListarProdutos},
  {path: 'produtos-cadastrar', component: CadastrarProduto}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
