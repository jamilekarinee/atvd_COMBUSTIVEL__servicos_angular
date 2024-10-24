import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CombustivelService {
  private resultado: number | undefined
  constructor() {
    this.resultado = undefined;
  }

  calcular(alc: number, gas: number): boolean {
    if (alc > 0 && gas > 0) {
      this.resultado = alc / gas;
      return true;
    }
    return false;
  }
  obter_resultado() {
    return this.resultado; 
  }
  obter_resposta(){
    if (this.resultado) {
      if (this.resultado<=0.7) {
        return "Álcool é mais vantajoso.";
      }
      else {
        return "Gasolina é mais vantajosa."
      }
    }
    else{
      return ""; 
    }

  }
}
