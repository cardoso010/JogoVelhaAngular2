"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var JogoComponent = (function () {
    function JogoComponent() {
        this.msg = '';
        this.campos = ['C1L1', 'C2L1', 'C3L1', 'C1L2', 'C2L2', 'C3L2', 'C1L3', 'C2L3', 'C3L3'];
        this.camposdict = { 'C1L1': '', 'C2L1': '', 'C3L1': '', 'C1L2': '',
            'C2L2': '', 'C3L2': '', 'C1L3': '', 'C2L3': '', 'C3L3': '' };
        this.vencedor = '';
    }
    JogoComponent.prototype.checkBlock = function (position, valor) {
        if (this.validator(position)) {
            this.camposdict[position] = valor;
        }
        else {
            this.msg = 'Campos já está marcado!';
        }
    };
    JogoComponent.prototype.robot = function (valor) {
        var position = '';
        while (true) {
            position = this.campos[Math.floor(Math.random() * this.campos.length)];
            if (this.validator(position)) {
                break;
            }
        }
        this.checkBlock(position, valor);
    };
    JogoComponent.prototype.validator = function (position) {
        return this.camposdict[position] == "";
    };
    JogoComponent.prototype.ganhador = function (firstposit, secondposit, thirdposit) {
        if ((firstposit == secondposit) && (secondposit == thirdposit) && (firstposit != '')) {
            this.vencedor = firstposit;
            return true;
        }
    };
    JogoComponent.prototype.check = function (position, valor) {
        this.checkBlock(position, valor);
        this.robot('O');
        if (this.ganhador(this.camposdict['C1L1'], this.camposdict['C2L1'], this.camposdict['C3L1']) ||
            this.ganhador(this.camposdict['C1L2'], this.camposdict['C2L2'], this.camposdict['C3L2']) ||
            this.ganhador(this.camposdict['C1L3'], this.camposdict['C2L3'], this.camposdict['C3L3']) ||
            this.ganhador(this.camposdict['C1L1'], this.camposdict['C1L2'], this.camposdict['C1L3']) ||
            this.ganhador(this.camposdict['C2L1'], this.camposdict['C2L2'], this.camposdict['C2L3']) ||
            this.ganhador(this.camposdict['C3L1'], this.camposdict['C3L2'], this.camposdict['C3L3']) ||
            this.ganhador(this.camposdict['C1L1'], this.camposdict['C2L2'], this.camposdict['C3L3'])) {
            this.msg = "O ganhador é o " + this.vencedor;
        }
    };
    JogoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jogovelha',
            templateUrl: 'jogo.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], JogoComponent);
    return JogoComponent;
}());
exports.JogoComponent = JogoComponent;
//# sourceMappingURL=jogo.component.js.map