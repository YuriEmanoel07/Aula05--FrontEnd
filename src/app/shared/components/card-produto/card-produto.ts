import { Component, Input, input, inputBinding } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  standalone: false,
  styleUrl: './card-produto.css',
  templateUrl: './card-produto.html',
})
export class CardProduto {

  @Input() foto: string = '';
  @Input() nomeProduto: string = '';
  @Input() promocao: boolean = true;
  @Input() idProduto: number = 0;
  @Input() dataValidade: string = '';
  @Input() precoProduto : number = 0;

}
