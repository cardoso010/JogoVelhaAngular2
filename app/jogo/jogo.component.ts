import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jogovelha',
  templateUrl: 'jogo.component.html',
})

export class JogoComponent {
  constructor() {  }

  msg : string = '';

  campos = ['C1L1', 'C2L1', 'C3L1', 'C1L2', 'C2L2', 'C3L2', 'C1L3', 'C2L3', 'C3L3'];
  camposdict = {'C1L1': '', 'C2L1' : '', 'C3L1': '', 'C1L2': '',
                'C2L2': '', 'C3L2': '', 'C1L3': '', 'C2L3': '', 'C3L3': ''};

  vencedor : string = '';

  checkBlock(position : string, valor : string){
    if(this.validator(position)){
      this.camposdict[position] = valor;
    } else {
      this.msg = 'Campos já está marcado!';
    }
  }

  robot(valor : string){
    let position = '';
    while(true){
      position = this.campos[Math.floor(Math.random() * this.campos.length)];
      if (this.validator(position)){
          break;
      }
    }
    this.checkBlock(position, valor);
  }

  validator(position : string){
    return this.camposdict[position] == "";
  }

  ganhador(firstposit : string, secondposit : string, thirdposit : string){
    if((firstposit == secondposit) && (secondposit == thirdposit) && (firstposit != '')){
      this.vencedor = firstposit;
      return true;
    }
  }

  check(position : string, valor : string){
    this.checkBlock(position, valor);
    this.robot('O');
    if(this.ganhador(this.camposdict['C1L1'], this.camposdict['C2L1'], this.camposdict['C3L1']) ||
       this.ganhador(this.camposdict['C1L2'], this.camposdict['C2L2'], this.camposdict['C3L2']) ||
       this.ganhador(this.camposdict['C1L3'], this.camposdict['C2L3'], this.camposdict['C3L3']) ||
       this.ganhador(this.camposdict['C1L1'], this.camposdict['C1L2'], this.camposdict['C1L3']) ||
       this.ganhador(this.camposdict['C2L1'], this.camposdict['C2L2'], this.camposdict['C2L3']) ||
       this.ganhador(this.camposdict['C3L1'], this.camposdict['C3L2'], this.camposdict['C3L3']) ||
       this.ganhador(this.camposdict['C1L1'], this.camposdict['C2L2'], this.camposdict['C3L3']))
    {
         this.msg = "O ganhador é o " + this.vencedor;
    }
  }
}
