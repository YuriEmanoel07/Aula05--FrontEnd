import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from '../model/IProduto.model';

@Service()
export class Produtos {
    private URL: string = 'http://localhost:3000/produtos';

    private http = inject(HttpClient);

    //constructor (private http: HttpClient) {}

    buscarTodos(): Observable<IProduto[]>{
        return this.http.get<IProduto[]>(this.URL);
    }
}
