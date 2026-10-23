import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produto',
  standalone: false,
  styleUrl: './cadastrar-produto.css',
  templateUrl: './cadastrar-produto.html',
})
export class CadastrarProduto {
  nome : string = '';
  validade : string = '';
  preco : number =0;

  salvarProduto():void{
    console.log('Nome: ', this.nome);
    console.log('Validade: ', this.validade);
    console.log('Preço: ', this.preco);
    alert('Salvo com sucesso!')
  };
}
