import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nutrition } from '../Model/nutrition.model';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private apiUrl = 'http://localhost:9095/nutrition/';

  constructor(private http: HttpClient) { }

  getAllNutritions(): Observable<Nutrition[]> {
    return this.http.get<Nutrition[]>(`${this.apiUrl}retrieve-all-nutritions`); 
  }
  
  getNutritionById(id: number): Observable<Nutrition> {
    return this.http.get<Nutrition>(`${this.apiUrl}retrieve-nutrition/${id}`); 
  }

  addNutrition(nutrition: Nutrition): Observable<Nutrition> {
    console.log('Adding Nutrition:', nutrition); 
    return this.http.post<Nutrition>(`${this.apiUrl}add-nutrition`, nutrition);
  }

  updateNutrition(id: number, nutrition: Nutrition): Observable<Nutrition> {
    return this.http.put<Nutrition>(`${this.apiUrl}modify-nutrition/${id}`, nutrition);
  }
  

  deleteNutrition(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}remove-nutrition/${id}`); 
  }

}
