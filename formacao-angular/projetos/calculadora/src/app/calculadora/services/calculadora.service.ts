/** 
*Serviço responsável por executar as operações da calculadora.
*@author Lucas Santos
*@since 1.0.0
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Define as constantes utilizadas para identificar as
  operações de calculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // armezena o resultado da operação

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      
    }
  }
}
