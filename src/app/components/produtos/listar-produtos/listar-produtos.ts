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

nomeCompleto: string = "Yuri Emanoel";
nomeCompleto1: string = "Emanoel";

  objetoModelo = {
    nome : 'Fatima',
    idade : 15,
    altura: 1.56,
    graduado: true
  };

  listaProdutos: any[] = [
    {nome: 'Curso de Angular', preco: 35.56, validade: '2021-12-31', id: 1},
    {nome: 'Curso de Ionic', preco: 50, validade: '2021-12-31', id: 2, promocao: true},
    {id: 3, nome: 'Curso de Ionic Avançado', preco:50, validade: '2021-12-31'},
  ];

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
