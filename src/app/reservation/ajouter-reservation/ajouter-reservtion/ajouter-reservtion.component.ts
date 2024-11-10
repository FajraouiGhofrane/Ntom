import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ReservationService } from 'src/app/Service/reservation.service';

@Component({
  selector: 'app-ajouter-reservtion',
  templateUrl: './ajouter-reservtion.component.html',
  styleUrls: ['./ajouter-reservtion.component.css']
})
export class AjouterReservtionComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private reservationService: ReservationService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire avec des validateurs requis pour chaque champ
    this.validateForm = this.fb.group({
      nomCours: [null, [Validators.required]],
      nomCoach: [null, [Validators.required]],
      date: [null, [Validators.required]],
      time: [null, [Validators.required]],
      
    });
  }

  // Méthode pour ajouter une réservation en vérifiant la validité du formulaire
  addReservation() {
    if (this.validateForm.valid) {
      this.reservationService.addReservation(this.validateForm.value).subscribe(
        (newReservation) => {
          console.log('Réservation ajoutée avec succès:', newReservation);
          // Réinitialiser le formulaire après soumission
          this.validateForm.reset();
          this.router.navigate(['/list-reservation']); // Redirection après ajout
        },
        (error) => {
          console.error('Erreur lors de l’ajout de la réservation:', error);
        }
      );
    } else {
      console.log("Veuillez remplir tous les champs du formulaire.");
    }
  }
  onCancel() {
    this.validateForm.reset();
  }
}
