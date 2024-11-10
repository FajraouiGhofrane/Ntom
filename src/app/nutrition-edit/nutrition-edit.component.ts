import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealType,Nutrition } from 'src/app/Model/nutrition.model';
import { NutritionService } from 'src/app/Service/nutrition.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nutrition-edit',
  templateUrl: './nutrition-edit.component.html',
  styleUrls: ['./nutrition-edit.component.css'],
  // imports: [FormsModule, CommonModule],
  // standalone: true,
})
export class NutritionEditComponent implements OnInit {
  nutrition: Nutrition = {
    id: 0,
    name: '',
    description: '',
    mealType: null, 
    quantity: 0,
    calories: 0
  };

  constructor(
    private nutritionService: NutritionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Récupère l'ID depuis l'URL
    if (id) {
      this.loadNutrition(id); // Charge la nutrition correspondante
    }
  }

  loadNutrition(id: number): void {
    this.nutritionService.getNutritionById(id).subscribe({
      next: (data: Nutrition) => {
        this.nutrition = data; // Affecte les données de la nutrition récupérée à l'objet nutrition
      },
      error: (error: HttpErrorResponse) => {
        console.error('Erreur lors de la récupération de la nutrition', error);
      }
    });
  }

  onSubmit(): void {
    if (this.nutrition.id) {
      // Si un ID est défini, on soumet la mise à jour de la nutrition
      this.nutritionService.updateNutrition(this.nutrition.id, this.nutrition).subscribe({
        next: (updatedNutrition: Nutrition) => {
          console.log('Nutrition mise à jour avec succès:', updatedNutrition);
          this.router.navigate(['/nutritions']); // Redirige vers la liste des nutrition après mise à jour
        },
        error: (error: HttpErrorResponse) => {
          console.error('Erreur lors de la mise à jour de la nutrition', error);
        }
      });
    } else {
      console.error('ID non défini pour la nutrition');
    }
  }
}
