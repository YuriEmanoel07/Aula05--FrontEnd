import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {


  nomeProduto:string = "Curso de Angular";
  anuncio:string = `O ${this.nomeProduto} está em promoção`
  idProduto:number = 123;
  precoProduto:number = 2.59;
  promocao:boolean = true;
  foto:string = "img/crud.png";



      
}
