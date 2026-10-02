import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,
  styleUrl: './listar-produtos.css',
  templateUrl: './listar-produtos.html',
})
export class ListarProdutos {
  listaStrings: string[] = ['Primeiro', 'Segundo','Terceiro'];
  listaNumeros:number[] = [15,15.18,100];

  objetoModelo = {
    nome : 'Fatima',
    idade : 15,
    altura: 1.56,
    graduado: true
  };

  constructor(){
    for (let item of this.listaStrings){
      console.log(item);
    }
    
    for(const item of this.listaNumeros){
      console.log(item);
    }

    console.log(this.objetoModelo);
  }
}
