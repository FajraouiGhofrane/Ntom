
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../Model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8093/reservation';
  constructor(private http: HttpClient) { }
  
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/retrieve-all-reservation`);
  }

  getReservationById(id_reservation: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/retrieve-Reservation/${id_reservation}`);
  }

 
  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}/add-Reservation`, reservation);
  }

  
  deleteReservation(id_reservation: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove-Reservation/${id_reservation}`);
  }

 
  updateReservation(id_reservation: number, reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.baseUrl}/modify-Reservation/${id_reservation}`, reservation);
  }
}
