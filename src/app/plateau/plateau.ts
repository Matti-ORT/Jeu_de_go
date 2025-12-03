import { Component } from '@angular/core';
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

  // Gère le clic sur une case du plateau
  onCaseClick(i: number, j: number) {
  
    // Vérifie si la case est vide avant de jouer
    if (this.plateau[i][j] === null) {
      
      // affecte le joueur au case 
      this.plateau[i][j] = this.joueur;
      this.joueur = this.joueur === 'noir' ? 'blanc' : 'noir'; // Change de joueur
    }
    
    console.log(i,j)
  }
}
