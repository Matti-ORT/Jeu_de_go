import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plateau',
  imports: [CommonModule],
  templateUrl: './plateau.html',
  styleUrl: './plateau.css',
})
export class Plateau {
  onCaseClick(i: number, j: number) {
    // Action à effectuer lors d'un clic sur une case (à compléter selon la logique du jeu)
    console.log('Case cliquée :', i, j);
  }
}
