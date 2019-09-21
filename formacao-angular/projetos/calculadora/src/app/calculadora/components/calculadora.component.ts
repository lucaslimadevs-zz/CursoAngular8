import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraSevice: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }

  // Inicializa todos os operadores para o valor padrão.

  limpar(): void{
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);      
    }else{
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    // caso contenha apenas '0' ou null, reinicia o valor 
    if (numConcat === '0' || numAtual === null){
      numAtual = '';
    }

    // primeiro dígito é '.', concatena '0' antes do ponto
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    //caso '.' digitado e já cotenha um '.', apenas retorna
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  definirOperacao(operacao :string): void{
    //apenas define a operação caso não exista uma
    if (this.operacao === null) {
      this.operacao === operacao;
      return;
    }

    // caso operação definida e numero 2 selecionado, efetua o calculo da operação
    if (this.numero2 != null) {
      this.resultado = this.calculadoraSevice.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }

  } 
  
  //efetua o valor a ser exibido pela operação na tela da calculadora
  calcular(): void{
    if(this.numero2 == null) {
      return;
    }

    this.resultado = this.calculadoraSevice.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
  }

  // retorna o valor a ser exibido na tela da calculadora
  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }

    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }

}
