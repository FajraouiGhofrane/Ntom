import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/Service/reservation.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router'; // Importer Router
import { Reservation } from 'src/app/Model/reservation';

@Component({
  selector: 'app-afficher-reservtion',
  templateUrl: './afficher-reservtion.component.html',
  styleUrls: ['./afficher-reservtion.component.css']
})
export class AfficherReservtionComponent implements OnInit {
  reservations: Reservation[] = [];
  validateForm: FormGroup | undefined;
  message: string = '';

  constructor(
    private reservationService: ReservationService,
    private fb: FormBuilder,
    private router: Router // Injection du router ici
  ) {}

  ngOnInit(): void {
    this.loadReservations();
    this.initializeForm();
  }

  loadReservations(): void {
    this.reservationService.getReservations().subscribe(
      (data: Reservation[]) => {
        this.reservations = data;
      },
      error => {
        console.error('Erreur lors du chargement des réservations', error);
      }
    );
  }

  initializeForm(): void {
    this.validateForm = this.fb.group({
      nomCours: [null, [Validators.required]],
      nomCoach: [null, [Validators.required]],
      date_reservation: [null, [Validators.required]],
    });
  }

  removeReservation(id_reservation: number): void {
    this.reservationService.deleteReservation(id_reservation).subscribe(
      () => {
        this.loadReservations();
      },
      error => {
        console.error('Erreur lors de la suppression de la réservation:', error);
      }
    );
  }

  // Méthode de mise à jour avec injection du Router
  updateReservation(id_reservation: number): void {
    // Rediriger vers la page de modification
    this.router.navigate([`/modifier/${id_reservation}`]);
  }
}
