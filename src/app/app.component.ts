import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 templateUrl : 'app.component.html'


 
})
export class AppComponent {
  title = 'Bonjour mon application E-commerce';
  nom = 'Sassi';
  prenom = 'Nouha';
  accroche = 'VOUS ETES LA BIENVENUE';
  couleurs : string[]=['bleu','rouge'];
  age : number;
}
