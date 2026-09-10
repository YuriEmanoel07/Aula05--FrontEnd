import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './template/header/header';
import { Footer } from './template/footer/footer';
import { Home } from './components/home/home';
import { ListarProdutos } from './components/produtos/listar-produtos/listar-produtos';
import { CadastrarProduto } from './components/produtos/cadastrar-produto/cadastrar-produto';

@NgModule({
  declarations: [App, Header, Footer, Home, ListarProdutos, CadastrarProduto],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
