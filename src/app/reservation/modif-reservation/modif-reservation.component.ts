import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';  // Importer correctement Router ici
import { ReservationService } from 'src/app/Service/reservation.service';

@Component({
  selector: 'app-modif-reservation',
  templateUrl: './modif-reservation.component.html',
  styleUrls: ['./modif-reservation.component.css']
})
export class ModifReservationComponent implements OnInit {
  validateForm!: FormGroup;
  reservation: any;  // Utilisez 'any' ou définissez un type approprié pour 'reservation'

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,  // Injection de ActivatedRoute
    private router: Router,  // Injection de Router pour la navigation
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    const id_reservation = this.route.snapshot.paramMap.get('id_reservation');
    if (id_reservation) {
      this.loadReservation(+id_reservation);
    } else {
      console.error('ID de réservation non trouvé dans les paramètres de la route');
      this.router.navigate(['/error']);  // Utilisation correcte de `this.router` pour la navigation
    }
  }

  loadReservation(id_reservation: number): void {
    this.reservationService.getReservationById(id_reservation).subscribe(
      (data: any) => {
        this.reservation = data;
        this.initializeForm();
      },
      (error: any) => {
        console.error('Erreur de récupération de la réservation', error);
      }
    );
  }

  initializeForm(): void {
    if (this.reservation) {
      this.validateForm = this.fb.group({
        nomCours: [this.reservation.nomCours || '', [Validators.required]],
        nomCoach: [this.reservation.nomCoach || '', [Validators.required]],
        date_reservation: [this.reservation.date_reservation || '', [Validators.required]],
      });
    } else {
      console.error('Réservation non disponible pour initialiser le formulaire');
    }
  }

  saveReservation(): void {
    if (this.validateForm.valid) {
      const id_reservation = this.reservation.id_reservation;
      if (id_reservation) {
        this.reservationService.updateReservation(id_reservation, this.validateForm.value).subscribe(
          (response) => {
            console.log('Réservation mise à jour avec succès', response);
            this.router.navigate(['/afficher-reservation']);  // Utilisation correcte de `this.router` pour la navigation
          },
          (error) => {
            console.error('Erreur lors de la mise à jour de la réservation', error);
          }
        );
      } else {
        console.error('L\'ID de réservation est manquant ou invalide.');
      }
    }
  }
}
