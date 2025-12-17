import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plateau',
  imports: [CommonModule],
  templateUrl: './plateau.html',
  styleUrl: './plateau.css',
})
export class Plateau {
  // Plateau de jeu 8x8, chaque case peut être 'noir', 'blanc' ou null (vide)
  plateau: ('noir' | 'blanc' | null)[][] = Array.from({ length: 9 }, () => Array(9).fill(null));
  
  // Le joueur courant, commence par 'noir'
  joueur: 'noir' | 'blanc' = 'noir';


  scoreNoir = signal(0);
  scoreBlanc = signal(0);

  // Gère le clic sur une case du plateau
  onCaseClick(i: number, j: number) {
  
    // Vérifie si la case est vide avant de jouer
    if (this.plateau[i][j] === null) {
      
      // affecte le joueur au case 
      this.plateau[i][j] = this.joueur;
      if (this.joueur === 'noir') {
          this.joueur = 'blanc';
        } else {
          this.joueur = 'noir';
        }
    }
  }

    onCaseRightClick(i: number, j: number, event: MouseEvent) {
      event.preventDefault();
      const occupant = this.plateau[i][j];
      // si pierre adverse -> retire et augmente le score du joueur courant
      if (occupant !== null  ) {
        this.plateau[i][j] = null;
        if (this.joueur === 'noir') this.scoreNoir.update(s => s + 1);
        else this.scoreBlanc.update(s => s + 1);
      }
    }
}
