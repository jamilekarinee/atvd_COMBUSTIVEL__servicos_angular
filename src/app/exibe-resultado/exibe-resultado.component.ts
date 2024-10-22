import { Component } from '@angular/core';
import { CombustivelService } from '../combustivel.service';

@Component({
  selector: 'app-exibe-resultado',
  templateUrl: './exibe-resultado.component.html',
  styleUrl: './exibe-resultado.component.css'
})
export class ExibeResultadoComponent {
  constructor(public servico_de_combustivel: CombustivelService){
    
  }

}
