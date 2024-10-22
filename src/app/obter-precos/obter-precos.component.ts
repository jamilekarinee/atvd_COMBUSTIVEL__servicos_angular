import { Component } from '@angular/core';
import { CombustivelService } from '../combustivel.service';

@Component({
  selector: 'app-obter-precos',
  templateUrl: './obter-precos.component.html',
  styleUrl: './obter-precos.component.css'
})
export class ObterPrecosComponent {
  constructor(private servico_de_combustivel: CombustivelService){

  } 

  calcular(alcool: number, gasolina: number){
    this.servico_de_combustivel.calcular(alcool, gasolina)
  }
}
