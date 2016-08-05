import { Component } from '@angular/core';

import { JogoComponent } from './jogo/jogo.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Jogo da Velha!</h1>
        <jogovelha></jogovelha>
    `,
    directives: [JogoComponent]
})
export class AppComponent { }
