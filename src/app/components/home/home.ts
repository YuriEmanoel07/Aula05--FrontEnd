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



      testeVariaveis(): void{    //TODA FUNÇÃO TEM UM TIPO (ex: void)
      console.log("Nome do Produto: ",this.nomeProduto)
      console.log("anuncio: ",this.anuncio);
      console.log(`ID: ` , this.idProduto);
      console.log(`Preço:`, this.precoProduto);
      console.log(`Promoção: `, this.promocao);

      //escopo de variaveis dentro do código
      var variavel1;
      var variavel;
      const constante3 = 3;

      var idade = 10;

      function ImprimeIdade(){
        var idade = 50;
        console.log('Minha idade é: ', idade);
      }
      ImprimeIdade();

      function ImprimeIdade2(){
        for (let idade = 30; idade <= 40; idade++){
          console.log('Idade dentro do for: ', idade);
        }
        console.log('Idade fora do for: ',idade);
      }
      ImprimeIdade2();
  }
}
