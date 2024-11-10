import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programme } from '../Model/programme';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {
  private apiUrl = 'http://localhost:8081/api/programmes'; 

  constructor(private http: HttpClient) {}

  // Create a new Programme
  createProgramme(programme: Programme): Observable<Programme> {
    return this.http.post<Programme>(this.apiUrl, programme);
  }

  // Get all Programmes
  getAllProgrammes(): Observable<Programme[]> {
    return this.http.get<Programme[]>(this.apiUrl);
  }

  // Get Programme by ID
  getProgrammeById(id: number): Observable<Programme> {
    return this.http.get<Programme>(`${this.apiUrl}/${id}`);
  }

  // Update a Programme
  updateProgramme(id: number, programme: Programme): Observable<Programme> {
    return this.http.put<Programme>(`${this.apiUrl}/${id}`, programme);
  }

  // Delete a Programme
  deleteProgramme(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
