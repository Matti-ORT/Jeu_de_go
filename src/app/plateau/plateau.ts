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

  // Gère le clic sur une case du plateau
  onCaseClick(i: number, j: number) {
    if (this.partieTerminee) return; // bloque les actions si la partie est terminée
    // Vérifie si la case est vide avant de jouer
    if (this.plateau[i][j] === null) {
      // affecte le joueur au case
      this.plateau[i][j] = this.joueur;
      // Un coup normal annule toute passe précédente
      this.lastPass = null;
      // Change de joueur
      if (this.joueur === 'noir') {
        this.joueur = 'blanc';
      } else {
        this.joueur = 'noir';
      }
    }
  }


  

    scoreNoir = signal(0);
    scoreBlanc = signal(0);

  // Gère le clic droit sur une case du plateau pour retirer une pierre 
  onCaseRightClick(i: number, j: number, event: MouseEvent) {
    event.preventDefault();
    if (this.partieTerminee) return; // bloque les actions si la partie est terminée
    const occupant = this.plateau[i][j];
    // si pierre adverse -> retire et augmente le score du joueur courant
    if (occupant !== null) {
      this.plateau[i][j] = null;
      // un retrait de pierre annule toute passe précédente
      this.lastPass = null;
      if (this.joueur === 'noir') this.scoreNoir.update((s) => s + 1);
      else this.scoreBlanc.update((s) => s + 1);
    }
  }






  // dernier joueur ayant passé (null si aucune passe active)
  lastPass: 'noir' | 'blanc' | null = null;
  partieTerminee: boolean = false; // vrai si deux passes consécutives ont eu lieu

  // Gère la passe du joueur courant
  onPass() {
    if (this.partieTerminee) return;
    if (this.lastPass === null) {
      // première passe : on enregistre qui a passé et on change de joueur
      this.lastPass = this.joueur;
      this.joueur = this.joueur === 'noir' ? 'blanc' : 'noir';
    } else if (this.lastPass !== this.joueur) {
      // l'autre joueur passe consécutivement => fin de la partie
      this.partieTerminee = true;
      this.lastPass = null;
    } else {
      // sécurité : si le même joueur passe deux fois de suite (improbable), on ne termine pas
      this.lastPass = this.joueur; // reste la même
      this.joueur = this.joueur === 'noir' ? 'blanc' : 'noir';
    }
  }
}
