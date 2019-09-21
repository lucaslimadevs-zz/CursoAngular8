import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }))

  it('deve gatantir que 3 - 2 = 1',
    inject([CalculadoraService], (service: CalculadoraService)=>{
    let subtacao = service.calcular(3, 2, CalculadoraService.SUBTRACAO);
    expect(subtacao).toEqual(1); 
  }))

  it('deve gatantir que 4 / 2 = 2',
    inject([CalculadoraService], (service: CalculadoraService)=>{
    let divisao = service.calcular(4, 2, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(2); 
  }))

  it('deve gatantir que 5 * 2 = 10',
    inject([CalculadoraService], (service: CalculadoraService)=>{
    let multiplicacao = service.calcular(5, 2, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(10); 
  }))

  it('deve retornar 0 para operação inválida',
    inject([CalculadoraService], (service: CalculadoraService)=>{
    let operacaInvalida = service.calcular(5, 2, '%');
    expect(operacaInvalida).toEqual(0); 
  }))

});
