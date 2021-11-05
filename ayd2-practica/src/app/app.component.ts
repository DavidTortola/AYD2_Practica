import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ayd2-practica';

  ValidarNumero(texto: string): string {
    let label = document.getElementById('lbl');
    if (Number(texto)) {
      return 'Es numero!';
    } else {
      return'No es numero';
    }
  }
}
